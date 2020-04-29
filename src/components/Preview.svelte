<script>
import parser from '../utils/parser';
export let content = '';
export let title = '';
let htmlContent = '';
$: has_content = content.length > 0
$: preview_content =  content.length > 0 ? htmlContent : 'Nothing here';
$: parser
    .process(content, (err, file) => {
      htmlContent = String(file)
    })
</script>

<h1 class="title is-1">{title}</h1>
<div contenteditable="false" bind:innerHTML={preview_content} class="content preview" class:has-text-grey-light={!has_content} />


<style lang="scss">
.preview {
  min-height: 5rem;
  
  margin-top: 1rem;
}
</style>