import type { PageServerLoad } from './$types';

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export const load = (async () => {

    const activities = await prisma.activity.findMany({ where: {isApproved: true} });
    const displayInfo = activities.map((activity) => {
        return {
            id: activity.id,
            name: activity.name,
            description: activity.description,
            points: activity.points
        }
    });

    return {activities: displayInfo};
}) satisfies PageServerLoad;