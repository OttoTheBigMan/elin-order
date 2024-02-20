import type { PageServerLoad } from './$types';

<<<<<<< HEAD
export const load = (async ({ cookies }) => {

    let userId = cookies.get('userId');

    return {userId};
=======
export const load = (async ({cookies}) => {
    //Return a bool showing if you are logged in or not
    const loggedIn = cookies.get("username") !== undefined;
    return {loggedIn: loggedIn};
>>>>>>> 36659183b08cd3618749bd4d6d04884d71b43ddc
}) satisfies PageServerLoad;