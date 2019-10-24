<template>
  <div>
    <button @click="buttonIn">buttonIn</button>
    <p>{{inNum}}</p>
  </div>

</template>

<script>
export default {
  name: 'buttonIn',
  props: ['num'],
  data () {
    return {
      inNum: 0
    }
  },
  methods: {
    buttonIn: function () {
      this.num++
      this.inNum = this.num * 2
    }
  },
  watch: {
    num: function (oldNum, newNum) {
      console.log(oldNum)
      console.log(newNum)
    }
  }
}
</script>

<style scoped>

</style>
