<template>
    <div class="links">
    <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Webpack%20WTF%20Moments%20via%20@NikkitaFTW%20%20&amp;url=https%3A%2F%2Fwebpack.wtf%2F" target="_blank" aria-label="Twitter">
      <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg></div>Twitter</div>
    </a>
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

  .resp-sharing-button__link,
  .resp-sharing-button__icon {
    display: inline-block
  }

  .resp-sharing-button__link {
    text-decoration: none;
    color: #fff;
    margin: 0.5em
  }

  .resp-sharing-button {
    border-radius: 5px;
    transition: 25ms ease-out;
    padding: 0.5em 0.75em;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    line-height: initial;
  }

  .resp-sharing-button__icon svg {
    width: 1em;
    height: 1em;
    margin-right: 0.4em;
    vertical-align: top
  }

  .resp-sharing-button--small svg {
    margin: 0;
    vertical-align: middle
  }

  /* Non solid icons get a stroke */
  .resp-sharing-button__icon {
    stroke: #fff;
    fill: none
  }

  /* Solid icons get a fill */
  .resp-sharing-button__icon--solid,
  .resp-sharing-button__icon--solidcircle {
    fill: #fff;
    stroke: none
  }

  .resp-sharing-button--twitter {
    background-color: #55acee
  }

  .resp-sharing-button--twitter:hover,
  .resp-sharing-button--twitter:active {
    background-color: #2795e9;
    border-color: #2795e9;
  }

  h3 {
    margin: 0;
    margin-bottom: 10px;

    a {
      text-decoration: none;
    }
  }
}
</style>
