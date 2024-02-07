import crypto from "crypto";
import {PrismaClient} from "@prisma/client"
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from "@sveltejs/kit";

const prisma = new PrismaClient();

export const load = (async ({cookies}) => {
    let username = cookies.get("username");
    if(username){
        throw redirect(303, "/")
    }
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    register: async ({request, cookies}) => {
        let data = await request.formData();
        let username = data.get("username")?.toString();
        let password = data.get("password")?.toString();
        let rePass = data.get("password-repeat")?.toString();
        let name = data.get("fullName")?.toString();

        if(!username || !name || !password || !rePass){
            return fail(400, {msg: "Please provide all the necessary information"});
        }
        const possibleUser = await prisma.user.findUnique({where: {name: username}});
        if(possibleUser){
            return fail(400, {msg:"This username is already in use."});
        }
        if(password != rePass){
            return fail(400, {msg: "The passwords are not matching."});
        }

        const pass = hashPassword(password);
        const pUser = await prisma.user.create({
            data: {name: username, password: pass.hash, salt: pass.salt}
        });
        const token = await prisma.token.create({
            data: { userId: pUser.id },
        });
        cookies.set("username", token.id, { secure: false, path: "/"});
        throw redirect(307, "/");
    }
};

function hashPassword(password : crypto.BinaryLike){
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return { salt, hash };
}