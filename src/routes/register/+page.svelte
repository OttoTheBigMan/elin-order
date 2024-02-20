<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData, PageData } from './$types';
    
    export let data: PageData;
    export let form: ActionData;
    let s ="";
</script>

<main>
    <div class="registerContainer">
        <h1>Register</h1>
        <div class="registerContainerForm">
            <form action="?/register" method="post" use:enhance>
                <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 10px;">
                    <label>Username: <input type="text" name="username"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <label>Repeat Password: <input type="password" name="password-repeat"></label>
                    <input type="text" placeholder="image url" bind:value={s}>
                    <input type="hidden" value={s} name="pic">
                    <button>Log In</button>
                    {#if form?.msg}
                        <span>{form.msg}</span>
                    {/if}
                </div>
            </form>
        </div>
        <a href="/login">Already have account?</a>
    </div>
</main>

<style>
    
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: url('./training.jpg');
        background-position: center;
        background-size: cover;

        height: 100vh;
        width: 100vw;
    }

    .registerContainer {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        background: var(--background-color);
        border-radius: 2rem;
        padding: 20px 40px;
        box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);

        color: white;
        letter-spacing: 2px;
        gap: 25px;
    }

    .registerContainer a {
        position: relative;
        text-align: left;
        color: var(--accent-color);
        text-decoration: none;
        width: fit-content;
    }

    .registerContainer a::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--accent-color);
        transition: width 0.3s ease-in-out;
    }

    .registerContainer a:hover::after {
        width: 100%;
    }

    .registerContainerForm form {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 10px;
    }

    .registerContainerForm label {
        display: flex;
        flex-direction: column;
    }

    .registerContainerForm form input {
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--primary-color);
        color: white;
    }

    .registerContainerForm form button {
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--accent-color);
        color: white;
        cursor: pointer;
    }

    :root {
        --background-color: #0c0b0c;
        --primary-color: #24293b;
        --accent-color: #c26462;
    }
</style>

