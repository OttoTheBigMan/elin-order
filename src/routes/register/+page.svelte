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
                <div class="test">
                    <label>Username: <input type="text" name="username"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <label>Repeat Password: <input type="password" name="password-repeat"></label>
                    <label>Profile Picture: <input type="text" placeholder="image url" bind:value={s}></label>
                    <label><input type="hidden" value={s} name="pic"></label>
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
        

        height: 100vh;
        width: 100vw;
        
        
        animation-name: example;
        animation-duration: 50s;
        animation-iteration-count: infinite;
        background-size: cover;
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

    .test{
        display: flex;
        flex-direction: column;
        gap: 10px;                              
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
    @keyframes example{
        0%{
            background-image: url('./training.jpg');
        }
        50%{
            background-image: url(https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        }
        75%{
            background-image: url(https://images.unsplash.com/photo-1562771242-a02d9090c90c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
        }
        100%{
            background-image: url('./training.jpg');
        }
        
        
    }
</style>
