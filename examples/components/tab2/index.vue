<template>
  <div class="dove-block-wrapper d-tab2">
    <d-title :title="title" titleStyle="h1" position="center"></d-title>
    <p class="des">{{ des }}</p>
    <div class="tab">
      <div v-for="(item, index) in list" :key="index" :class="index == show ? 'show' : ''" @click="toggleShow(index)">
        <div class="drop-shadow">
          <img :src="item.icon" />
        </div>
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="content">
      <div>
        <div v-for="(content, index) in showItem.list" :key="index">
          <h2>{{ content.title }}</h2>
          <p class="des">{{ content.des }}</p>
        </div>
      </div>
      <div>
        <img :src="showItem.image" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "d-tab2",
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
