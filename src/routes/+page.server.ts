import type { PageServerLoad } from './$types';

export const load = (async ({cookies}) => {
    //Return a bool showing if you are logged in or not
    const loggedIn = cookies.get("username") !== undefined;
    return {loggedIn: loggedIn};
}) satisfies PageServerLoad;