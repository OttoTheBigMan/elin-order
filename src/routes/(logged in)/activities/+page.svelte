<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main>
    <h1>Activities</h1>
    <ul>
        {#each data.activities as activity}
            <li><a href="/activities/perform/{activity.id}">{activity.name}</a> | {activity.points} Points</li>
        {/each}
    </ul>
    <a href="/activities/suggest">Suggest an activity</a>
</main>