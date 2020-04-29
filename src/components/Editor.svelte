<script>
import Preview from './Preview.svelte';
import { notes } from '../store.js';
$: title = $notes.pages[$notes.currentIndex].title;
$: content = $notes.pages[$notes.currentIndex].content;
$: isEmpty = $notes.pages[$notes.currentIndex].content;
let mode = 'edit';
const resetContent = () => {
  $notes.pages[$notes.currentIndex].content = ''
}
const editMode = () => {
  mode = 'edit'
}
const previewMode = () => {
  mode = 'preview'
}
</script>

<div>
  <div class="editor column is-12">
    <div class="tabs">
      <ul>
        <li class:is-active={mode === 'edit'}><a on:click={editMode} href="javascript:void(0)">Editor</a></li>
        <li class:is-active={mode === 'preview'}><a on:click={previewMode} href="javascript:void(0)">Preview</a></li>
      </ul>
    </div>
    {#if mode == 'edit'}
    <input type="text" placeholder="Title" class="input" bind:value={$notes.pages[$notes.currentIndex].title}>
    <textarea class="textarea mt" rows="25" placeholder="Your note here" bind:value={$notes.pages[$notes.currentIndex].content} />
    <div class="buttons mt">
      <button class="button is-success">Save</button>
      <button class="button is-danger" disabled={isEmpty} on:click={resetContent}>Reset</button>
    </div>
    {:else}
    <Preview {content} {title} />
    {/if}
  </div>
</div>


<style lang="scss">
.editor {
  padding: 1rem 2rem 1rem 2rem;
}
.mt {
  margin-top: 1rem;
}
</style>