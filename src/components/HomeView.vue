<template>
  <div class="home-page">
    <!-- 主体内容区域 -->
    <el-main>
      <el-carousel :interval="4000" arrow="always">
        <el-carousel-item v-for="(item, index) in carouselItems" :key="index">
          <img :src="item.imgUrl" alt="轮播图">
        </el-carousel-item>
      </el-carousel>
      <el-row :gutter="20" class="feature-section">
        <el-col :span="8" v-for="(feature, index) in features" :key="index">
          <el-card class="feature-card">
            <i :class="feature.icon" class="feature-icon"></i>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <!-- 底部区域 -->
    <el-footer>
      <p>版权所有 © 2024 - 公司名称</p>
    </el-footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 轮播图数据
const carouselItems = ref([
  {
    imgUrl: 'https://picsum.photos/1200/400?random=1',
    title: '轮播图 1 标题',
    description: '这是轮播图 1 的描述'
  },
  {
    imgUrl: 'https://picsum.photos/1200/400?random=2',
    title: '轮播图 2 标题',
    description: '这是轮播图 2 的描述'
  },
  {
    imgUrl: 'https://picsum.photos/1200/400?random=3',
    title: '轮播图 3 标题',
    description: '这是轮播图 3 的描述'
  }
]);

// 特色功能数据
const features = ref([
  {
    icon: 'el-icon-s-help',
    title: '功能 1',
    description: '我们提供强大的功能 1，帮助用户解决实际问题。'
  },
  {
    icon: 'el-icon-s-data',
    title: '功能 2',
    description: '功能 2 让数据处理更加高效便捷。'
  },
  {
    icon: 'el-icon-s-tools',
    title: '功能 3',
    description: '通过功能 3，用户可以轻松实现复杂操作。'
  }
]);
</script>

<style scoped>
.home-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.el-main {
  flex: 1;
  background-color: #f9f9f9;
}

.el-carousel-item img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.feature-section {
  padding: 20px;
}

.feature-card {
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 48px;
  color: #1989fa;
  margin-bottom: 15px;
}

.el-footer {
  background-color: #333;
  color: white;
  text-align: center;
  line-height: 60px;
}
</style>