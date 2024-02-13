<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;

    $: activities = data.activities;
</script>

<main>
    <h1>Activities</h1>
    <ul>
        {#each activities as activity}
            <li><a href="/activities/perform/{activity.id}">{activity.name}</a> | {activity.points} Points
                <form action="?/like" method="post" use:enhance>
                    <input type="hidden" name="activityId" value="{activity.id}">
                    <button><i class="fa-{activity.liked ? "solid" : "regular"} fa-heart"></i></button>
                </form>
                | {activity.likeCount} Likes
            </li>
        {/each}
    </ul>
    <a href="/activities/suggest">Suggest an activity</a>
</main>