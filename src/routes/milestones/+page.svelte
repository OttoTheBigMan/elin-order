<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    $: milestones = data.displayInfo;
</script>

<main>
    <h1>Milestones</h1>
    <ul>
        {#each milestones as milestone}
            <li><a>{milestone.name}</a> | {milestone.description} | {milestone.points} Points</li>
        {/each}
    </ul>
</main>