<template>
  <div class="dove-block-wrapper d-paragraph2">
    <h2>{{ title }}</h2>
    <div class="wrapper">
      <p v-for="(content, index) in list" :key="index">（{{ index + 1 }}）{{ content }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-paragraph2",
  props: {
    title: { type: String },
    list: { type: Array },
  },
};
</script>
