<script lang="ts">
    import type { PageData } from "../$types";
    export let data: PageData;
    let score = 1;
</script>

<h1>Leaderboard</h1>

{#if data.leaderboard.length > 0}
    <ol>
        {#each data.leaderboard as user}
            <li>{user.name} - {score}</li>
        {/each}
    </ol>
{:else}
    <p>Loading...</p>
{/if}
