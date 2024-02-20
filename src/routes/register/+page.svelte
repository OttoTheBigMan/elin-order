<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData, PageData } from './$types';
    
    export let data: PageData;
    export let form: ActionData;
    let s ="";
</script>

<main>
    <form action="?/register" method="post" use:enhance>
        
        <label>Username: <input type="text" name="username"></label>
        <label>Password: <input type="password" name="password"></label>
        <label>Repeat Password: <input type="password" name="password-repeat"></label>
        <button>Log In</button>
        <label for="img">image</label>
        <input type="text" name="img" bind:value={s}>
        <input type="hidden" value={s} name="pic">
        
        {#if form?.msg}
            <span>{form.msg}</span>
        {/if}
    </form>
    <a href="/login">Already have account?</a>
    <img src={s} alt="">
</main>