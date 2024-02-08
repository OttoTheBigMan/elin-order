<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main>
    <h1>{data.info.name}</h1>
    <h2>Grants {data.info.points} points</h2>
    <span>{data.info.description}</span>

    <h1>Perform the activity</h1>
    <form action="?/perform/{data.info.id}" method="post">
        <button>Perform</button>
    </form>
</main>