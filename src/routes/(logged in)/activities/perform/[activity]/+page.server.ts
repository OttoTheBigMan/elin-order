import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {PrismaClient} from "@prisma/client";
import { _findCurrentUser } from '../../../../+layout.server';
const prisma = new PrismaClient();

export const load = (async ({params}) => {
    let activity = params.activity;
    let pActivity = await prisma.activity.findUnique({where: {id: activity}});
    if(!pActivity) {
        throw error(404, "Activity not found");
    }
    let info = {
        id: pActivity.id,
        name: pActivity.name,
        description: pActivity.description,
        points: pActivity.points
    }
    return {info: info};
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
        await prisma.user.update({
            where: {id: pUser.id},
            data: {
                totalPoints: pUser.totalPoints + pActivity.points
            }
        });
    }
};