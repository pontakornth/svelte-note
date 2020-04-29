<script>
import { notes } from './store.js';
import Editor from './components/Editor.svelte';
import Menu from './components/Menu.svelte';
import './styles/theme.scss';
$: hasPages = $notes.pages.length > 0;
</script>

<div class="columns is-gapless is-mobile app">
  <div class="column is-2 is-hidden-mobile is-visible-tablet has-background-grey-lighter">
    <Menu />
  </div>
  <div class="column padded is-10-desktop padded is-10-mobile">
    {#if hasPages}
      <Editor />
    {:else}
      <div class="empty-box">
        <div class="empty has-text-centered	">
          <p class="is-size-2 has-text-grey">There is no page</p>
          <p class="is-size-5 has-text-grey">Create add page for new one</p>
        </div>
      </div>
    {/if}
  </div>
</div>


<style lang="scss">
.app {
  min-height: 100%;
}
.padded {
  padding: 1rem;
}

.empty {
  margin: auto;
}

.empty-box {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>