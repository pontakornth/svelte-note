<script>
import Editor from './components/Editor.svelte';
import Menu from './components/Menu.svelte';
import './styles/theme.scss';
</script>

<div class="columns is-gapless is-mobile app">
  <div class="column is-2 is-hidden-mobile is-visible-tablet has-background-grey-lighter">
    <Menu />
  </div>
  <div class="column padded is-10-desktop padded is-10-mobile">
    <Editor />
  </div>
</div>


<style lang="scss">
.app {
  height: 100%;
}
.padded {
  padding: 1rem;
}
</style>