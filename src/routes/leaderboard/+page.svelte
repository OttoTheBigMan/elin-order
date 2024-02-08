<script lang="ts">
    import { enhance } from "$app/forms";
    import { fade, fly } from "svelte/transition";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>
<button>back</button>
<div class="leaderboard" style="animation-duration: 800ms;">
    <h1>Leaderboard</h1>
    <div in:fly = "{{y: -10, duration: 1000}}">
        {#if data.leaderboard.length > 0}
            <ol>
                {#each data.leaderboard as user, i}
                    <li class="list">
                        <img src="https://i.pinimg.com/736x/98/35/db/9835db3c92ef4ed52315995b2a60988b.jpg" alt="" class="profilepic">
                        <p class="text">{user.name}</p>
                        <p class="text1">{user.totalPoints}</p>
                    </li>
                {/each}
            </ol>
        {:else}
            <p>Loading...</p>
        {/if}
    </div>
</div>
<style>
    .leaderboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: grey;
        width: 140vh;
        padding-bottom: 20px;
        border-radius: 15px;
        animation-name: flydown;
        animation-duration: 4000ms;
        
    }
    .div {
        background-color: darkgray;
        width: 110vh;
        height: 15vh;
        border-radius: 10px;
        display: inline-block;
       
        margin-bottom: 10px;
        flex-direction: row;
        
    }
    :global(body) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    li {
        transform: translate(25px,0);
    }
    @keyframes flydown {
        from {
			transform: translate(0,-500px);
		}
		
		to {
			transform: translate(0,0);
		}
    }
    .profilepic {
        width: 80px;
        height: 80px;
        border-radius: 15px;
        margin-right: 10px;

    }
    .list {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: darkgrey;
        width: 100vh;
        border-radius: 20px;
        margin-bottom: 10px;
        padding-left: 10px;
    }
    .text {
        font-size: xx-large;
        font-family: sans-serif;
    }
    .text1 {
        position: absolute;
        right: 30px;
        font-size: xx-large;
        font-family: sans-serif;
    }
    ol {
        padding: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0;

    }
    button {
        width: 80px;
        height: 20px;
    }
</style>