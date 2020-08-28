<template>
  <div class="dove-block-wrapper d-imagetext2" :style="{ flexDirection: direction ? 'row' : 'row-reverse' }">
    <div class="img">
      <img :src="image" alt="" />
    </div>
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ des }}</p>
      <div class="ul">
        <div v-for="(item, index) in list" :key="index" class="li">
          <img :src="item.image" alt="" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.des }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-imagetext2",
  props: {
    title: { type: String },
    direction: { type: Boolean, default: true },
    des: { type: String },
    image: { type: String },
    list: { type: Array },
  },
};
</script>
