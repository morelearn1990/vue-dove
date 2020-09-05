<template>
  <div class="dove-block-wrapper d-list6">
    <d-title :title="title" titleStyle="h1" position="center"></d-title>
    <div class="wrapper">
      <div v-for="(item, index) in list" :key="index" class="item">
        <div class="title">
          <h2>{{ item.title }}</h2>
          <a :href="item.url">查看更多 >></a>
          <div class="img">
            <img :src="item.image" />
          </div>
        </div>
        <ul class="content">
          <li v-for="(content, index) in item.list" :key="index">{{ content }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-list6",
  props: {
    title: { type: String },
    list: { type: Array },
  },
};
</script>
