<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main>
    <!-- Suggest an activity -->
    <form action="?/activities" method="post" use:enhance>
        <label>Activity Name: <input type="text" name="name"></label>
        <label>Description: <input type="textarea" name="desc"></label>
        <label>Suggested points: <input type="number" name="location"></label>
        <button>Suggest</button>
    </form>
</main>