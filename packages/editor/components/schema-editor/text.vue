<template>
  <div class="dove-schema-text">
    <Title :title="schema['schema-title']" :des="schema['schema-description']" />
    <input :value="schema['schema-value']" @input="onChange" />
  </div>
</template>
<script>
import Title from "./title";
export default {
  name: "dove-schema-text",
  components: { Title },
  props: {
    schema: { type: Object, required: true },
    path: { type: Array, required: true },
  },
  methods: {
    onChange(event) {
      this.$emit("change", this.path, event.target.value);
    },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-text {
  box-sizing: border-box;
  margin-bottom: 15px;
  input {
    box-sizing: border-box;
    width: 100%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #5a5a5a;
    font-size: 16px;
  }
}
</style>
