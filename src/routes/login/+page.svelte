<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main>
    <form action="?/login" method="post" use:enhance>
        
        <label>Username: <input type="text" name="username"></label>
        <label>Password: <input type="password" name="password"></label>
        
        <button>Log In</button>
    </form>
    <a href="/register">Don't have an account?</a>
</main>