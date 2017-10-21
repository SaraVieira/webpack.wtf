<template>
  <div @keyup.enter="randomMoment" class="hello" v-bind:style="{ background, color }">
    <section class="main">
      <h1>{{moment.moment}}</h1>
      <a target="_blank" :href="moment.by" v-bind:style="{ color: linkColor }">{{(moment.by || '').split('twitter.com/')[1]}}</a>
      <modal height="auto" name="hello-world" class="modal">
        <p>
          Webpack is fucking magic, you type a configuration and awesome shit appears in your screen. The problem is that none of us actually know how to write that configuration.
        </p>
        <h3> Want to learn Webpack ?</h3>
        <a target="_blank" href="https://webpack.academy/">Webpack Academy</a>
        <a target="_blank" href="https://webpack.js.org/concepts/">Le Docs</a>
      </modal>
      <h3 class="link" v-on:click="show">WTF is Webpack ?</h3>
    </section>
  </div>
</template>

<script>
import colorable from 'colorable'
import moments from '../data/data'
export default {
  name: 'Hello',
  data: function () {
    return {
      msg: 'Hello Vue',
      background: '',
      moments,
      moment: {},
      color: '',
      linkColor: '',
      colors: {
        aqua: '#7fdbff',
        blue: '#0074d9',
        lime: '#01ff70',
        navy: '#001f3f',
        teal: '#39cccc',
        olive: '#3d9970',
        green: '#2ecc40',
        red: '#ff4136',
        maroon: '#85144b',
        orange: '#ff851b',
        purple: '#b10dc9',
        yellow: '#ffdc00',
        gray: '#aaaaaa',
        white: '#ffffff',
        black: '#111111',
        silver: '#dddddd'
      }
    }
  },
  methods: {
    show () {
      this.$modal.show('hello-world')
    },
    hide () {
      this.$modal.hide('hello-world')
    },
    randomMoment () {
      const allColors = colorable(this.colors, { compact: true, threshold: 0 })
      const colors = allColors[Math.floor(Math.random() * allColors.length)]
      const combination = colors.combinations.filter(a => a.accessibility.aa)

      this.moment = this.moments[Math.floor(Math.random() * this.moments.length)]
      this.background = colors.hex
      this.color = combination[Math.floor(Math.random() * combination.length)].hex
      this.linkColor = combination[Math.floor(Math.random() * combination.length)].hex
    }
  },
  mounted: function () {
    this.randomMoment()
  },
  created: function () {
    window.addEventListener('keyup', (evt) => {
      if (evt.code === 'Space') {
        this.randomMoment()
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .link {
    cursor: pointer;
    position: fixed;
    bottom: 10px;
    right: 10px;
  }

  h1 {
    font-size: 30px;
  }

  .main {
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .v--modal {
    padding: 30px;
    border-radius: 2px;

    a {
      display: block;
      color: #3d9970;
    }

    p, h3 {
      color: #111111;
    }
  }
}
</style>
