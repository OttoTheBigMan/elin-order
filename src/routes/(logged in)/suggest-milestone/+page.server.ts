import { error, fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import {PrismaClient} from "@prisma/client";
import { _findCurrentUser } from '../../+layout.server';

const prisma = new PrismaClient();

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    suggestMilestone: async({request, cookies}) => {
        let data = await request.formData();
        let name = data.get('name')?.toString();
        let description = data.get('description')?.toString();
        let points = data.get('points')?.toString();
        let badgeurl = data.get('badgeurl')?.toString();
        if(!name || !description || !points || !badgeurl) {
            throw error(400, "Missing field");
        }
        if(isNaN(parseInt(points))) {
            return fail(300, {msg: "Points must be a number"});
        }
        if(parseInt(points) < 0) {
            return fail(300, {msg: "Points cannot be negative"});
        }

        let user = await _findCurrentUser(cookies.get('username') ?? "");
        if(user.id == "") {
            return fail(401, {msg: "Unauthorized"});
        }

        await prisma.milestone.create({
            data: {
                name: name,
                description: description,
                points: parseInt(points),
                badge: badgeurl,
                userId: user.id
            }
        });
    }
};