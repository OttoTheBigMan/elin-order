<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<slot></slot>

<style>
    :global(body) {
        padding: 0px;
        margin: 0px;
    }
    :global(html) {
        padding: 0px;
        margin: 0px;
    }
</style>