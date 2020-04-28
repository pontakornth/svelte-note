<script>
import Editor from './components/Editor.svelte';
import './styles/theme.scss';
</script>

<div class="columns is-mobile app is-centered">
  <div class="column is-half-desktop is-10-mobile">
    <Editor />
  </div>
</div>


<style lang="scss">
.app {
  height: 100%;
  padding: 1rem;
}
</style>