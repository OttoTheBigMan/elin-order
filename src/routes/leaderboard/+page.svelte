<script lang="ts">
    import { enhance } from "$app/forms";
    import { fade, fly } from "svelte/transition";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>
<a href="http://localhost:5173/"><button>back</button></a>
<div class="leaderboard" style="animation-duration: 800ms;">
    <div in:fly = "{{y: -10, duration: 1000}}">
        {#if data.leaderboard.length > 0}
            <ol>
                {#each data.leaderboard as user, i}
                    <li class="list">
                        <img src={user.pic} alt="" class="profilepic">
                        <p class="text">{user.name}</p>
                        <img src="https://static.vecteezy.com/system/resources/previews/019/025/847/original/golden-medal-with-ribbon-champion-and-winner-awards-medal-png.png" alt="" class="medal">
                        <p class="text1">{user.totalPoints}</p>
                    </li>
                {/each}
            </ol>
        {:else}
            <p>Loading...</p>
        {/if}
    </div>
</div>
<div id="box"></div>
<style>
    .leaderboard {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(89, 89, 89);
        width: 140vh;
        padding-bottom: 20px;
        border-radius: 15px;
        animation-name: flydown;
        animation-duration: 4000ms;
        /* box-shadow: 0 0 3px red; */
        padding-top: 20px;
    }
    :global(body) {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* background-image: url(https://wallpapercave.com/wp/wp10690413.jpg); */
        background-size: cover;
        /* backdrop-filter: blur(2px);         */
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        left: 0;
        
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
    .medal {
        height: 40px;
        border-radius: 100px;
        margin-left: 15px;
        
    }
    
</style>
