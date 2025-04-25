<template>
  <div class="about-container">
    <!-- 标题区域 -->
    <el-card class="title-card">
      <template #header>
        <h1>关于我们</h1>
      </template>
      <p>探索我们背后的故事与愿景</p>
    </el-card>
    <!-- 团队介绍区域 -->
    <el-card class="team-card">
      <template #header>
        <h2>我们的团队</h2>
      </template>
      <p>我们汇聚了一群充满热情与专业技能的伙伴，致力于为用户提供卓越的产品与服务。</p>
      <el-row :gutter="20">
        <el-col :span="8" v-for="(member, index) in teamMembers" :key="index">
          <el-card class="member-card">
            <img :src="member.avatar" alt="Team Member">
            <h3>{{ member.name }}</h3>
            <p>{{ member.position }}</p>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <!-- 使命与愿景区域 -->
    <el-card class="mission-card">
      <template #header>
        <h2>使命与愿景</h2>
      </template>
      <p>我们的使命是通过创新科技改善人们的生活，愿景是成为行业内的领军者。</p>
    </el-card>
    <!-- 联系我们按钮 -->
    <el-button type="primary" size="large" @click="handleContactUs">联系我们</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 模拟团队成员数据
const teamMembers = ref([
  {
    name: '张三',
    position: '前端开发工程师',
    avatar: 'https://picsum.photos/200/200?random=1'
  },
  {
    name: '李四',
    position: '后端开发工程师',
    avatar: 'https://picsum.photos/200/200?random=2'
  },
  {
    name: '王五',
    position: '设计师',
    avatar: 'https://picsum.photos/200/200?random=3'
  }
]);

const handleContactUs = () => {
  // 这里可以添加跳转到联系我们页面或打开联系表单的逻辑
  alert('您可以通过以下方式联系我们：contact@example.com');
};
</script>

<style scoped>
.about-container {
  padding: 20px;
}

.title-card,
.team-card,
.mission-card {
  margin-bottom: 20px;
}

.member-card {
  text-align: center;
  padding: 20px;
}

.member-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>