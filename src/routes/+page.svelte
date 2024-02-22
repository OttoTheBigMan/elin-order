<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";
    export let data: PageData;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
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
                    <p>{item.createdAt.getUTCHours().toString().padStart(2, '0')}:{item.createdAt.getUTCMinutes().toString().padStart(2, '0')} | {months[item.createdAt.getUTCMonth()]} {item.createdAt.getUTCDate()}</p>
                    <h3>Performed by {item.user.name} | <img src="{item.user.pic}" alt="yep"></h3>
                </div>
            {/each}
        </div>
        <div>
            <!-- Add the recent milestones here pwease :) -->
            <h2>Recently completed milestones</h2>
            {#each data.milestoneArray as item}
                <div>
                    <h3>{item.milestone.name}</h3>
                    <p>{item.milestone.description}</p>
                    <p>{item.createdAt.getUTCHours().toString().padStart(2, '0')}:{item.createdAt.getUTCMinutes().toString().padStart(2, '0')} | {months[item.createdAt.getUTCMonth()]} {item.createdAt.getUTCDate()}</p>
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