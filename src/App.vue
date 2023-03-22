<template>
  <div>
    <!-- 顶栏 -->
    <NavTop></NavTop>
    <!-- 工具栏 -->
    <Main></Main>
    <!-- 商品栏 -->
    <div class="hj">
      <router-view></router-view>
    </div>
    <!-- 底栏 -->
    <NavBar></NavBar>
  </div>
</template>

<script>
// 顶栏
import NavTop from './components/NavTop.vue';
// 工具
import Main from './components/Main.vue';
// 商品栏
import ShopShow from './components/ShopShow.vue';
// 底栏
import NavBar from './components/NavBar.vue';
//shouye
// import As from './components/As.vue'

export default {
  components: {
    Main,
    NavBar,
    NavTop,
    ShopShow,
    // As
  },
  created() {
      if (this.$router.path !== "/"){
        this.$router.replace("/")
      };

     
        
       
    }


}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}
.hj{
  margin-bottom: .96rem;
}
</style>