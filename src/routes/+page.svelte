<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<main>
    <slot />

    <div class="lists-container">
        <div>
            <h2>Recently completed activities</h2>
            {#each data.activityLogArray as item}
                <div>
                    <h3>{item.activity.name}</h3>
                    <p>{item.activity.description}</p>
                    <p>{item.createdAt}</p>
                    <h3>Performed by {item.user.name} | <img src="{item.user.pic}" alt="yep"></h3>
                </div>
            {/each}
        </div>
        <div>
            <!-- Add the recent milestones here pwease :) -->
            <h2>Recently completed milestones</h2>
            {#each data.milestoneArray as item}
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.createdAt}</p>
                    <h3>Performed by {item.user.name} | <img src="{item.user.pic}" alt="yep"></h3>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    .lists-container {
        display: flex;
        justify-content: space-evenly;
    }
</style>