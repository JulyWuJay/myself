<template>
<div>
  这里是中国 去
  <router-link to="/china/beijing">北京</router-link>
  <button @click="toBeijing">点击按钮去北京</button>
  <div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'china',
  methods: {
    toBeijing () {
      this.$router.push('/china/beijing')
    }
  }
}
</script>

<style scoped>

</style>
