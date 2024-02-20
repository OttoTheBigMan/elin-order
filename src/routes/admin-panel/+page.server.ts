import { redirect } from '@sveltejs/kit';
import { _findCurrentUser } from '../../+layout.server';
import type { PageServerLoad } from './$types';
import {PrismaClient} from "@prisma/client";

export const load = (async ({cookies}) => {
    const prisma = new PrismaClient();
    let yep = await _findCurrentUser(cookies.get("username") ?? "");
    let yap = await prisma.user.findUnique({where: {name: yep.name}});
    
    // Check if the user is an admin
    if (!yap || !yap.isAdmin) {
        throw redirect(303, "/activities");
        // Redirect to the appropriate page with a status code of 303
        // Replace '/activites' with the URL you want to redirect to
        // You can also throw an error or return an error response instead of redirecting
    }
}) satisfies PageServerLoad;