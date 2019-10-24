<template>
    <button @click="plus">{{count}}</button>
</template>

<script>
export default {
  name: 'buttonCount',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    plus: function () {
      this.count++
    }
  }
}
</script>

<style scoped>

</style>
