<template>
  <div class="dove-block-wrapper d-paragraph1">
    <h2>{{ title }}</h2>
    <div class="wrapper" v-html="content"></div>
  </div>
</template>
<script>
export default {
  name: "d-paragraph1",
  props: {
    title: { type: String },
    content: { type: String },
  },
};
</script>
