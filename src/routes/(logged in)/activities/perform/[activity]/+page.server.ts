import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {PrismaClient} from "@prisma/client";
import { _findCurrentUser } from '../../../../+layout.server';
const prisma = new PrismaClient();

export const load = (async ({params}) => {
    let activity = params.activity;
    let pActivity = await prisma.activity.findUnique({where: {id: activity}, include: {comments: true}});
    if(!pActivity) {
        throw error(404, "Activity not found");
    }
    let info = {
        id: pActivity.id,
        name: pActivity.name,
        description: pActivity.description,
        points: pActivity.points
    }
    let comments = []
    for(let comment of pActivity.comments) {
        let user = await prisma.user.findUnique({where: {id: comment.userId}});
        if(user) {
            comments.push({
                //Might add pfp shit here aswell
                id: comment.id,
                user: user.name,
                text: comment.text,
                pic: user.pic
            });
        }
    }
    return {info: info, comments: comments};
}) satisfies PageServerLoad;

export const actions: Actions = {
    perform: async({request, cookies}) => {
        let data = await request.formData();
        let userInfo = await _findCurrentUser(cookies.get('username') ?? "");
        let activity = data.get('activity')?.toString();
        if(!activity) {
            return error(400, "Missing activity");
        }
        let pUser = await prisma.user.findUnique({where: {id: userInfo.id}});
        if(!pUser) {
            return error(401, "Unauthorized");
        }
        let pActivity = await prisma.activity.findUnique({where: {id: activity}});
        if(!pActivity) {
            return error(404, "Activity not found");
        }
        let cuh = await prisma.activityLog.create({
            data: {
                userId: pUser.id,
                activityId: pActivity.id
            }
        });
        const totalPoints = pUser.totalPoints + pActivity.points;
        await prisma.user.update({
            where: {id: pUser.id},
            data: {
                totalPoints: totalPoints
            }
        });
        //find a milestone from the database where points is between the user's total points and the user's previous points
        let milestone = await prisma.milestone.findMany({where: {points: {lte: totalPoints, gt: pUser.totalPoints}, isApproved: true}});
        if(milestone.length > 0) {
            for (let i = 0; i < milestone.length; i++) {
                const element = milestone[i];
                await prisma.milestoneLog.create({
                    data: {
                        userId: pUser.id,
                        milestoneId: element.id
                    }
                });
            }
            
        }
    },
    comment: async({request, cookies}) => {
        let data = await request.formData();
        let userInfo = await _findCurrentUser(cookies.get('username') ?? "");
        let activity = data.get('activity')?.toString();
        let text = data.get('text')?.toString();
        if(!activity || !text) {
            return error(400, "Missing activity or text");
        }
        let pUser = await prisma.user.findUnique({where: {id: userInfo.id}});
        if(!pUser) {
            return error(401, "Unauthorized");
        }
        let pActivity = await prisma.activity.findUnique({where: {id: activity}, include: {comments: true}});
        if(!pActivity) {
            return error(404, "Activity not found");
        }
        let comments = []
        for(let comment of pActivity.comments) {
            let user = await prisma.user.findUnique({where: {id: comment.userId}});
            if(user) {
                comments.push({
                    //Might add pfp shit here aswell
                    id: comment.id,
                    user: user.name,
                    text: comment.text,
                    pic: user.pic
                });
            }
        }
        let comment = await prisma.comment.create({
            data: {
                userId: pUser.id,
                activityId: pActivity.id,
                text: text
            }
        });
        comments.push(comment);
        return {comments}
    }
};