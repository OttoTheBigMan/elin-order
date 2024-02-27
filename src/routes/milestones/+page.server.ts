import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
const prisma = new PrismaClient();

export const load = (async () => {
    const milestones = await prisma.milestone.findMany({ where: {isApproved: true}});
    const displayInfo = milestones.map((milestone) => {
        return {
            id: milestone.id,
            name: milestone.name,
            description: milestone.description,
            points: milestone.points,
        }
    });

    return {displayInfo};
}) satisfies PageServerLoad;