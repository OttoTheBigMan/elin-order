<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>


<h1>Admin Panel: Here you can approve or deny suggested activities or milestones</h1>

{#each data.activities as activity}
    <div>
        <h2>{activity.name}</h2>
        <p>{activity.description}</p>
    </div>
    <form action="?/approve" method="post" use:enhance>
        <input type="hidden" name="activityId" value="{activity.id}">
        <button>Approve</button>
    </form>
    <form action="?/deny" method="post" use:enhance>
        <input type="hidden" name="activityId" value="{activity.id}">
        <button>Deny</button>
    </form>
{/each}

{#each data.milestones as milestone}
    <div>
        <h2>{milestone.name}</h2>
        <p>{milestone.description}</p>
    </div>
    <form action="?/approveMilestone" method="post" use:enhance>
        <input type="hidden" name="milestoneId" value="{milestone.id}">
        <button>Approve</button>
    </form>
    <form action="?/denyMilestone" method="post" use:enhance>
        <input type="hidden" name="milestoneId" value="{milestone.id}">
        <button>Deny</button>
    </form>
{/each}
