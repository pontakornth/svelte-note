<script>
export const notes = [];
</script>

{#if notes.length > 0}
<p>TODO: Show notes</p>
{:else}
<p>There is no note.</p>
{/if}