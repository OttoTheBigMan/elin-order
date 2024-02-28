<script lang="ts">
    import type { LayoutData } from "./$types";


    export let data: LayoutData;
</script>

<nav class="navbar">
    <ul class="navbarLinks">
        <li><a href="/">Home</a></li>
        <li><a href="/leaderboard">Leaderboard</a></li>
        <li><a href="/activities">Activities</a></li>
        <li><a href="/admin-panel">Admin Panel</a></li>
    </ul>
</nav>
<slot />


<style>
    .navbar {
        display: flex;
        padding: 0px 80px;
        height: 10vh;
        background-color: var(--background-color);
        align-items: center;
    }
    .navbar ul {
        list-style: none;
    }

    .navbar a {
        text-decoration: none;
        color: white;
        transition: all 0.3s ease-in-out;
        position: relative;
    }

    .navbar a:hover {
        color: var(--accent-color);
    }

    .navbar a::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: -2px;
        left: 50%; /* Modified this line */
        transform: translateX(-50%); /* Added this line */
        width: 0;
        height: 2px;
        background-color: var(--accent-color);
        transition: width 0.3s ease-in-out;
    }

    .navbar a:hover::after {
        width: 100%;
    }
    
    .navbarLinks {
        display: flex;
        gap: 20px;
        padding: 0;
    }

    :root {
        --background-color: #0c0b0c;
        --primary-color: #24293b;
        --accent-color: #c26462;
    }
</style>
