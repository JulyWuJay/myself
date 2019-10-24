<template>
  <div class="hello">
    <input type="text" v-model="inputValue"><span>{{inputValue}}</span>
    <br>
    <span v-for="item in showItems" v-bind:key="item">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputValue: '',
      items: ['你好', '我好', '你是', '我是'],
      showItems: [],
      timer: null
    }
  },
  components: {

  },
  computed: {
    // 计算属性
  },
  watch: {
    inputValue (current, old) {
      console.log(current)
      console.log(old)
      if (!this.timer) {
        this.timer = setTimeout(this.findValue(current), 1000)
        this.timer()
        this.timer = null
      }
      // this.findValue(current)
      // this.throttle(this.findValue(current))
    }
  },
  methods: {
    findValue (value) {
      this.showItems = []
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].indexOf(value) !== -1) {
          this.showItems.push(this.items[i])
        }
      }
    }
  }
  // created: function () {
  //   // 实例被创建之后的代码
  //   console.log('created')

  // },
  // mounted: function () {
  //   console.log('mounted')
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
