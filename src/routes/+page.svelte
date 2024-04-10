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
        <div class="completedActivities">
            <div class="completedActivitiesNav">
                <a href="/">
                    <i class="fa-solid fa-2xl fa-angle-up"></i>
                    <h2>Recent activities</h2>
                </a>
            </div>
            {#each data.activityLogArray as item}
                <div class="recentlyCompletedActivities">
                    <div class="firstCol">
                        <img src={item.user.pic} alt="yep" />
                    </div>
                    <div class="secondCol">
                        <div class="secondCol-Row">
                            <h3>| {item.user.name}</h3>
                            <p>
                            {item.createdAt
                                .getUTCHours()
                                .toString()
                                .padStart(2, "0")}:{item.createdAt
                                .getUTCMinutes()
                                .toString()
                                .padStart(2, "0")} | {months[
                                item.createdAt.getUTCMonth()
                            ]}
                            {item.createdAt.getUTCDate()}
                        </p>
                        </div>
                        

                        <h3>{item.activity.name}</h3>
                        
                    </div>
                    <div class="theirdCol">
                        <p>{item.activity.description}</p>
                    </div>
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
                    <p>
                        {item.createdAt
                            .getUTCHours()
                            .toString()
                            .padStart(2, "0")}:{item.createdAt
                            .getUTCMinutes()
                            .toString()
                            .padStart(2, "0")} | {months[
                            item.createdAt.getUTCMonth()
                        ]}
                        {item.createdAt.getUTCDate()}
                    </p>
                    <h3>
                        Performed by {item.user.name} |
                        <img src={item.user.pic} alt="yep" />
                    </h3>
                </div>
            {/each}
        </div>
    </div>
</main>

<style>
    
    .completedActivitiesNav {
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;
        background-color: black;
        width: 100vw;

        position: sticky;
        top: 0;
    }

    .completedActivitiesNav a {
        display: flex;
        text-decoration: none;
        color: white;
        transform: translateX(30px);
    }

    .completedActivitiesNav i {
        transform: rotate(-90deg);
        margin-left: 20px;
    }

    .lists-container {
        display: flex;
        justify-content: space-evenly;
    }

    .completedActivities {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .recentlyCompletedActivities {
        display: flex;
        gap: 20px;
        padding: 20px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    }

    .secondCol-Row {
        display: flex;
        align-items: center;
        gap: 10px;
    }


    @media (max-width: 768px) {
        .lists-container {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
