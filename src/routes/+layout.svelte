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
    :global(body) {
        padding: 0px;
        margin: 0px;
    }
    :global(html) {
        padding: 0px;
        margin: 0px;
    }
</style>
