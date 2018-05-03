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
  },
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  mounted() {
  },
  //监听路由的路径，可以通过不同的路径去选择不同的切换效果  
  watch: {
    '$route'(to, from) {
      if (to.path == '/') {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    }
  }
};
</script>
<style scoped>
.container {
  overflow-x: hidden;
  padding-top: 100px;
}
</style>

