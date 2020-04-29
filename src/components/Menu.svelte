<script>
import { notes } from '../store'
const changePage = (index) => {
  $notes.currentIndex = index
}
</script>

<div class="buttons padded">
 <button on:click={notes.newPage} class="button is-primary">Add page</button>
 <button on:click={notes.deleteAll} class="button is-danger">Delete all</button>
</div>
{#if $notes.pages.length > 0}
  {#each $notes.pages as page, index (page.uuid)}
  <a href="javascript:void(0)" class="item" on:click={changePage(index)} class:is-active={$notes.currentIndex === index }>
    {page.title}
  </a>
  {/each}
{:else}
  <div class="item placeholder">No notes here</div>
{/if}

<style lang="scss">
.item {
  display: block;
  width: 100%;
  padding: 0.5rem;
  background: #eee;
  color: #111;
  &.is-active {
  color: hsl(217, 71%, 53%);
  }

  &.placeholder {
    color: rgb(44,44,44);
  }
}

.padded {
  padding: 0.5rem;
}
</style>
