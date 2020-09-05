<template>
  <div class="dove-block-wrapper d-list1">
    <d-title :title="title" titleStyle="h1" position="center"></d-title>
    <div class="wrapper">
      <div v-for="(item, index) in list" :key="index" class="item">
        <h2>{{ item.title }}</h2>
        <div></div>
        <p>{{ item.des }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-list1",
  props: {
    title: { type: String },
    list: { type: Array },
  },
};
</script>
