<script>
import Preview from './Preview.svelte';
let title = '';
let content = '';
let mode = 'edit';
$: isContentEmpty = content.length  === 0;
const resetContent = () => {
  content = ''
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
    <input type="text" placeholder="Title" class="input" bind:value={title}>
    <textarea class="textarea mt" rows="25" placeholder="Your note here" bind:value={content} />
    <div class="buttons mt">
      <button class="button is-success">Save</button>
      <button class="button is-danger" disabled={isContentEmpty} on:click={resetContent}>Reset</button>
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