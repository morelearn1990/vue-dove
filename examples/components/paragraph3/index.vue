<template>
  <div class="dove-block-wrapper d-paragraph3">
    <h2>{{ title }}</h2>
    <div class="wrapper">
      <div v-for="(item, index) in list" :key="index">
        <p>（{{ index + 1 }}）</p>
        <div>
          <p class="title">{{ item.title }}</p>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-paragraph3",
  props: {
    title: { type: String },
    list: { type: Array },
  },
};
</script>
