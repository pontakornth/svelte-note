<script>
let text = "";
</script>

<h1>Classic markdown editor</h1>
<textarea placeholder="Your note here" bind:value={text} />

<div class="display">
 {text}
</div>