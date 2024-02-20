<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main>
    <h1>Suggest an activity</h1>
    <form action="?/suggest" method="post" use:enhance>
        <label>Activity Name: <input type="text" name="name"></label>
        <label>Description: <input type="textarea" name="desc"></label>
        <label>Suggested points: <input type="number" name="points"></label>
        <button>Suggest</button>
    </form>
    
</main>