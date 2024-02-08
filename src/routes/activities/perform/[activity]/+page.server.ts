import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {PrismaClient} from "@prisma/client";
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