<template>
  <div class="dove-block-wrapper d-list2">
    <d-title :title="title" titleStyle="h1" position="center"></d-title>
    <div class="wrapper">
      <div v-for="(item, index) in list" :key="index" class="item">
        <div class="image">
          <img :src="item.image" />
        </div>
        <div class="content">
          <h2>{{ item.title }}</h2>
          <ul>
            <li v-for="text in item.list" :key="text">{{ text }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-list2",
  props: {
    title: { type: String },
    list: { type: Array },
  },
};
</script>
