<template>
  <div class="dove-block-wrapper d-imagetext1" :style="{ flexDirection: direction ? 'row' : 'row-reverse' }">
    <div class="img">
      <img :src="image" alt="" />
    </div>
    <div class="content">
      <h2>{{ title }}</h2>
      <p>{{ des }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-imagetext1",
  props: {
    title: { type: String },
    direction: { type: Boolean, default: true },
    des: { type: String },
    image: { type: String },
  },
};
</script>
