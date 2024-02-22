<script lang="ts">
    import { enhance } from '$app/forms';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<main>
    <h1>{data.info.name}</h1>
    <h2>Grants {data.info.points} points</h2>
    <span>{data.info.description}</span>

    <h1>Perform the activity</h1>
    <form action="?/perform" method="post" use:enhance>
        <input type="hidden" name="activity" value={data.info.id}>
        <button>Perform</button>
    </form>
    <h1>Comments</h1>
    <div class="waltuh">
        {#each data.comments as comment}
            <div class="profile">
                <div class="cuh">
                    <img src={comment.pic} alt="">
                    <h2>{comment.user}</h2>
                </div>
                <p>{comment.text}</p>
            </div>
        {/each}
    </div>
    <form action="?/comment" method="post" use:enhance>
        <input type="hidden" name="activity" value={data.info.id}>
        <textarea name="text" placeholder="Write a comment"></textarea>
        <button>Comment</button>
    </form>
</main>

<style>
    .waltuh {
        display: flex;
        flex-direction: column;
    }
    .cuh {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
    }
    .profile {
        display: flex;
        flex-direction: column;
        background-color: #f0f0f0;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        min-width: fit-content;
        max-width: 25%;
    }
</style>