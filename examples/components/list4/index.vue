<template>
  <div class="dove-block-wrapper d-list4">
    <d-title :title="title" titleStyle="h1" position="center"></d-title>
    <div class="wrapper">
      <a v-for="(item, index) in list" :key="index" :href="item.url" class="item">
        <div class="content">
          <div class="img">
            <img :src="item.image" />
          </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.des }}</p>
        </div>
        <div class="bg"></div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-list4",
  props: {
    title: { type: String },
    list: { type: Array },
  },
};
</script>
