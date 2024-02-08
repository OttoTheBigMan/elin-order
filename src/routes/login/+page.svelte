<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<main>
    <div class="loginContainer">
        <h1>Login</h1>
        <div class="loginContainerForm">
            <form action="?/login" method="post" use:enhance>
                <label>Username: <input type="text" name="username" /></label>
                <label>Password: <input type="password" name="password" /></label>
                <button>Log In</button>
            </form>
        </div>
        <a href="/register">Don't have an account?</a>
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

    .loginContainer {
        position: relative;
        display: flex;
        flex-direction: column;
        background: var(--background-color);
        border-radius: 2rem;
        padding: 20px 40px;
        box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);

        color: white;
        letter-spacing: 2px;
        gap: 25px;
    }

    .loginContainer a {
        position: relative;
        text-align: left;
        color: var(--accent-color);
        text-decoration: none;
        width: fit-content;
    }

    .loginContainer a::after {
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

    .loginContainer a:hover::after {
        width: 100%;
    }

    .loginContainerForm form {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 10px;
    }

    .loginContainerForm form input {
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--primary-color);
        color: white;
    }

    .loginContainerForm form button {
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
