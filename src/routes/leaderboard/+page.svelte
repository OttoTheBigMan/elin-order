<script lang="ts">
    import { enhance } from "$app/forms";
    import { fade, fly } from "svelte/transition";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<main>
    <div class="leaderboardDiv">
        <h1>Leaderboard</h1>
    </div>
    <div class="leaderboard">
        
        <div class="leaderboardContainer">
            {#if data.leaderboard.length > 0}
                {#each data.leaderboard as user}
                    <ul>
                        <img src={user.pic} alt="" class="profilepic" />
                        <p>{user.name}</p>
                        <p>{user.totalPoints}</p>
                    </ul>
                {/each}
            {:else}
                <p>Leaderboard under construction..</p>
            {/if}
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;

        background-color: var(--accent-color);
    }
    .leaderboard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 20px;
        border-radius: 2rem;
        border: 4px solid white;
    }

    .leaderboardDiv {
        width: fit-content;
        padding: 20px 20px;
        border-radius: 2rem;
        border: 4px solid white;
        background: var(--accent-color);
        transform: translateY(calc(50% + 2px));
    }

    .leaderboardDiv h1 {
        margin: 0;
        
    }

    .leaderboardContainer ul {
        padding: 0;
    }

</style>
