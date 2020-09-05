<template>
  <div class="dove-block-wrapper d-paragraph4">
    <d-title :title="title" titleStyle="h1" position="center"></d-title>
    <div class="wrapper">
      <p v-for="(content, index) in list" :key="index" class="title">{{ content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-paragraph4",
  props: {
    title: { type: String },
    list: { type: Array },
  },
};
</script>
