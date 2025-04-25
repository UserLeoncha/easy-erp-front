<template>
  <div id="app">
    <!-- 导航栏 -->
    <el-menu :default-active="activeMenu" mode="horizontal" @select="handleMenuSelect">
      <el-menu-item index="home">主页</el-menu-item>
      <el-menu-item index="about">关于我们</el-menu-item>
      <el-menu-item index="products">产品列表</el-menu-item>
      <el-menu-item index="sales">销售记录</el-menu-item>
    </el-menu>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const router = useRouter();
    const activeMenu = ref('home');

    const handleMenuSelect = (key) => {
      activeMenu.value = key;
      if (key === 'home') {
        router.push('/');
      } else if (key === 'about') {
        router.push('/about');
      } else if (key === 'products') {
        router.push('/products');
      } else if (key === 'sales') {
        router.push('/salelist');
      }
    };

    return {
      activeMenu,
      handleMenuSelect
    };
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-menu {
  margin-bottom: 20px;
}
</style>