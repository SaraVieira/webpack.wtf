<template>
    <div class="moment">
      <h1>{{moment.moment}}</h1>
      <a target="_blank" rel="noopener" :href="moment.by" v-bind:style="{ color: linkColor }">{{(moment.by || '').split('twitter.com/')[1]}}</a>
  </div>
</template>
<script>
export default {
  name: 'Moment',
  props: ['moment', 'linkColor']
}
</script>
<style lang="scss">
.links {
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 30px;
  }
}
</style>
