<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>Suggest a milestone cuhhh</h1>

<form action="?/suggestMilestone" method="post" use:enhance>
    <input type="text" name="name" placeholder="Name">
    <input type="text" name="description" placeholder="Description">
    <input type="number" name="points" placeholder="Points">
    <input type="text" name="badgeurl" placeholder="Badge image link">
    <button>Suggest</button>
</form>