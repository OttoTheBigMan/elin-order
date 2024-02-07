<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData, PageData } from './$types';
    
    export let data: PageData;
    export let form: ActionData;
</script>

<main>
    <form action="?/register" method="post" use:enhance>
        
        <label>Username: <input type="text" name="username"></label>
        <label>Password: <input type="password" name="password"></label>
        <label>Repeat Password: <input type="password" name="password-repeat"></label>
        <button>Log In</button>
        {#if form?.msg}
            <span>{form.msg}</span>
        {/if}
    </form>
    <a href="/login">Already have account?</a>
</main>