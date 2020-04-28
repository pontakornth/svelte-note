<script>
import unified from 'unified';
import markdown from 'remark-parse';
import html from 'remark-html';
export let content = '';
let htmlContent = '';
$: has_content = content.length > 0
$: preview_content =  htmlContent.length > 0 ? htmlContent : 'Nothing here';
$: unified()
    .use(markdown)
    .use(html)
    .process(content, (err, file) => {
      htmlContent = String(file)
    })
</script>


<div contenteditable="false" bind:innerHTML={preview_content} class="content preview" class:has-text-grey-light={!has_content} />


<style lang="scss">
.preview {
  min-height: 5rem;
  padding: calc(0.75em - 1px);
  border: 1px solid rgba(49,49,49,.5);
  border-radius: 4px;
}
</style>