<template>
  <div class="dove-color-picker">
    <div class="color" :style="{ 'background-color': value }" @click="toggleShow"></div>
    <div class="chrome-wrapper" @click="close" v-portal="show">
      <ColorPicker :value="value" @input="onChange" @close="toggleShow" :position="position"></ColorPicker>
    </div>
  </div>
</template>
<script>
import ColorPicker from "./chrome";
import portal from "./protal";
export default {
  name: "dove-color-picker",
  components: { ColorPicker },
  directives: { portal },
  props: {
    value: { type: String, required: true },
  },
  data() {
    return {
      show: false,
      position: null,
    };
  },
  methods: {
    close(e) {
      if (this.show && e.target.className == "chrome-wrapper") {
        this.show = !this.show;
      }
    },
    onChange(color) {
      const rgba = `rgba(${color.rgba.r},${color.rgba.g},${color.rgba.b},${color.rgba.a})`;
      this.$emit("change", rgba);
    },
    toggleShow(e) {
      if (e) {
        event.stopPropagation();
        e.preventDefault();
        const { top, left, height, width } = e.target.getBoundingClientRect();
        this.position = { top: top + height + 5 + "px", left: left + width + 5 + "px" };
      }
      this.show = !this.show;
    },
  },
};
</script>
<style lang="less" scoped>
.color {
  width: 20px;
  height: 20px;
  border: 1px solid #d6d6d6;
  border-radius: 3px;
}
.chrome-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
}
.dove-color-picker {
  .chrome-wrapper {
    display: none;
  }
}
</style>
