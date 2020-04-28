<script>
import Preview from './Preview.svelte';
let content = '';
</script>

<div class="editor">
  <h1 class="title is-1 has-text-centered">ตัวแก้ไข Markdown</h1>
  <textarea class="textarea" placeholder="Your note here" bind:value={content} />
</div>

<Preview {content} />

<style lang="scss">
.editor {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>