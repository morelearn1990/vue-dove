<template>
  <div class="dove-schema-color">
    <Title :title="schema['schema-title']" :des="schema['schema-description']" />
    <ColorPicker :value="schema['schema-value']" @change="onChange"></ColorPicker>
  </div>
</template>
<script>
import ColorPicker from "./color-picker";
import Title from "./title";
export default {
  name: "dove-schema-color",
  components: { ColorPicker, Title },
  props: {
    schema: { type: Object, required: true },
    path: { type: Array, required: true },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onChange(color) {
      this.$emit("change", this.path, color);
    },
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-color {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  margin-bottom: 15px;
}
</style>
