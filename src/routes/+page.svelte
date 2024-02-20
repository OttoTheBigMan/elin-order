<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    export let data : PageData;
</script>

<main>
    <h1>Insane...</h1>
    {#if data.loggedIn}
    <form action="/login?/logOut" method="post" use:enhance>
        <button>Log out</button>
    </form>
    {/if}
</main>