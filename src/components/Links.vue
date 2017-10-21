<template>
    <div class="links">
    <h3 class="link" v-on:click="show">WTF is Webpack ?</h3>
    <h3>
      <a target="_blank" rel="noopener" v-bind:style="{ color }" href="https://github.com/SaraVieira/webpack.wtf/blob/master/src/data/data.js">Add your moment</a>
    </h3>
  </div>
</template>
<script>
export default {
  name: 'Links',
  props: ['color', 'show']
}
</script>
<style lang="scss">
.links {
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;

  h3 {
    margin: 0;
    margin-bottom: 10px;

    a {
      text-decoration: none;
    }
  }
}
</style>
