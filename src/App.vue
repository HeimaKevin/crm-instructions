<template>
  <div id="app">
    <h1 class="title">CRM FISSION規格表</h1>
    <comparison />
  </div>
</template>

<script>
import Comparison from './components/Comparison'

export default {
  name: 'App',
  components: { Comparison },
}
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  padding: 40px 20px;
  background: url('../src/assets/bg-image.png') no-repeat center center;
  background-size: cover;
  .title {
    margin-bottom: 16px;
    text-align: center;
    font-weight: bold;
    text-shadow: 1px 1px 4px rgba(#fff, 0.5);
  }
}
</style>
