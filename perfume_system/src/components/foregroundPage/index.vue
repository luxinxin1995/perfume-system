<template>
  <div class="container">
      <Head></Head>
      <router-view></router-view>
      <Footer>
      </Footer>
  </div>
</template>

<script>
import Head from './head'
import Footer from './footer'

export default {
  components: {
    Head,
    Footer
  }
};
</script>
<style scoped>

</style>

