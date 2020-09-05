<template>
  <div class="dove-block-wrapper d-list5">
    <d-title :title="title" titleStyle="h1" position="center"></d-title>
    <div class="wrapper">
      <div v-for="(item, index) in list" :key="index" class="item">
        <div class="content">
          <h2>{{ item.title }}</h2>
          <p>{{ item.des }}</p>
        </div>
        <div class="bg"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-list5",
  props: {
    title: { type: String },
    list: { type: Array },
  },
};
</script>
