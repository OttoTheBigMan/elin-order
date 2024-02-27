import type { Actions, PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


export const load = (async () => {
    const leaderboard = await prisma.user.findMany({
        orderBy: {
            totalPoints: 'desc'
        } 
    }); 
    const milestone = await prisma.milestone.findMany({

    })
    
        
    
    

    return {leaderboard, milestone};
}) satisfies PageServerLoad;

