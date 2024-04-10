<script lang="ts">
    import { enhance } from "$app/forms";
    import { fade, fly } from "svelte/transition";
    import type { PageData } from "./$types";
    import { browser } from "$app/environment";
    import { invalidateAll } from "$app/navigation";
    import { onDestroy } from "svelte";
    export let data: PageData;

    $: milestone = data.milestone
    $: milestones = data.leaderboard
    let interval: NodeJS.Timeout;
    if(browser){
        interval = setInterval(() => {

            invalidateAll();
        }, 5000);
    }
    onDestroy(() => {
        clearInterval(interval);
    });
    
</script>
<main>
<a href="http://localhost:5173/"><button>back</button></a>
<div class="leaderboard" style="animation-duration: 800ms;">
    <div in:fly = "{{y: -10, duration: 1000}}">
        {#if data.leaderboard.length > 0}
            <ol>
                {#each data.leaderboard as user}
                    <li class="list">
                        <img src={user.pic} alt="" class="profilepic">
                        <p class="text">{user.name}</p>
                        {#each milestone as milestones}
                            <img src={milestones} alt="" class="medal">
                        {/each}
                        <!-- <img src={milestone.badge} alt="" class="medal"> -->
                        <p class="text1">{user.totalPoints}</p>
                    </li>
                {/each}
            </ol>
        {:else}
            <p>Loading...</p>
        {/if}
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



    
    button {
        width: 80px;
        height: 20px;
    }
    .medal {
        height: 40px;
        border-radius: 100px;
        margin-left: 15px;
        
    }
    
</style>
