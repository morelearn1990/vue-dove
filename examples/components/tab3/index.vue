<template>
  <div class="dove-block-wrapper d-tab3">
    <d-title :title="title" titleStyle="h1" position="center"></d-title>
    <div class="wrapper">
      <div class="tab">
        <div v-for="(item, index) in list" :key="index" :class="index == show ? 'show' : ''" @click="toggleShow(index)">
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="content">
        <h2>{{ showItem.title }}</h2>
        <p class="des">{{ showItem.des }}</p>
        <img :src="showItem.image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-tab3",
  props: {
    title: { type: String },
    des: { type: String },
    list: { type: Array },
  },
  data() {
    return { show: 0 };
  },
  watch: {
    list() {
      this.boundary();
    },
    show() {
      this.boundary();
    },
  },
  computed: {
    showItem() {
      return this.list[this.show];
    },
  },
  methods: {
    toggleShow(index) {
      this.show = index;
    },
    boundary() {
      const { list, show } = this;
      if (show >= list.length) {
        this.show = list.length - 1;
      }
    },
  },
};
</script>
