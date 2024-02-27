import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const load = (async ({cookies}) => {
    //Return a bool showing if you are logged in or not
    const loggedIn = cookies.get("username") !== undefined;

    //Get all the milestones and activityLogs and sort them by date
    const milestones = await prisma.milestoneLog.findMany({orderBy: {createdAt: 'desc'}, include: {user: true, milestone: true}});
    const activityLogs = await prisma.activityLog.findMany({orderBy: {createdAt: "desc"}, include: {activity: true, user: true}});
    
    return {loggedIn: loggedIn, milestoneArray: milestones, activityLogArray: activityLogs};
}) satisfies PageServerLoad;