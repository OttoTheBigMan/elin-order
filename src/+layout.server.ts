import type { LayoutServerLoad } from './$types';
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export const load = (async () => {
    return {};
}) satisfies LayoutServerLoad;

export const _findCurrentUser = async (token : string) => {
    let prismaToken = await prisma.token.findUnique({
    where: { id: token },
    include: { user: { select: { name: true, id: true } } }
});
if(!prismaToken) return {id: "", name: ""};

return prismaToken.user;
};