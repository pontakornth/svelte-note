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
  <div class="item">
    <a href="javascript:void(0)" class:is-active={$notes.currentIndex === index } on:click={changePage(index)}>{page.title}</a>
    <a href="javascript:void(0)" class:is-visible={$notes.currentIndex === index } class="delete-button has-text-danger">
      <span class="icon">
        <span class="material-icons">clear</span>
      </span>
    </a>
  </div>
  {/each}
{:else}
  <div class="item placeholder">No notes here</div>
{/if}

<style lang="scss">
.item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  background: #eee;
  color: #111;
  & a {
    color: #111;
    
  }
  & a.is-active {
  color: hsl(217, 71%, 53%);
  }

  &.placeholder {
    color: rgb(44,44,44);
  }
  &:hover {
    .delete-button {
      display: inline-flex;
    }
  }
}

.delete-button {
  display: none;
}
.padded {
  padding: 0.5rem;
}
</style>
