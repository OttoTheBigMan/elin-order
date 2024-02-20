import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {

    let userId = cookies.get('userId');

    return {userId};
}) satisfies PageServerLoad;