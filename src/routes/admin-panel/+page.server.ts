import { redirect, type Actions } from '@sveltejs/kit';
import { _findCurrentUser } from '../+layout.server';
import type { PageServerLoad } from './$types';
import {PrismaClient} from "@prisma/client";

export const load = (async ({cookies}) => {
    const prisma = new PrismaClient();
    let yep = await _findCurrentUser(cookies.get("username") ?? "");
    let yap = await prisma.user.findUnique({where: {name: yep.name}});
    
    if (!yap || !yap.isAdmin) {
        throw redirect(303, "/activities");
    }
    const activities = await prisma.activity.findMany({ where: {isApproved: false}});

    const milestones = await prisma.milestone.findMany({where: {isApproved: false}});
    return {activities, milestones};
}) satisfies PageServerLoad;

export const actions: Actions = {
    approve: async ({request, params}) => {
        const prisma = new PrismaClient();
        let formData = await request.formData();
        const activityId = formData.get('activityId')?.toString();
        try {
            await prisma.activity.update({
                where: {id: activityId},
                data: {isApproved: true}
            });
        } catch (error) {
            // Handle the error here
        }
    },
    deny: async ({request, params}) => {
        const prisma = new PrismaClient();
        let formData = await request.formData();
        const activityId = formData.get('activityId')?.toString();
        try {
            await prisma.activity.delete({
                where: {id: activityId}
            });
        } catch (error) {
            // Handle the error here
        }
    }
        
};