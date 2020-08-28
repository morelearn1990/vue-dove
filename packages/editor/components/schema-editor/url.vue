<template>
  <div class="dove-schema-url">
    <Title :title="schema['schema-title']" :des="schema['schema-description']" />
    <input :value="value" @input="onChange" />
  </div>
</template>
<script>
import Title from "./title";
export default {
  name: "dove-schema-url",
  components: { Title },
  props: {
    schema: { type: Object, required: true },
    path: { type: Array, required: true },
  },
  computed: {
    value() {
      return decodeURI(this.schema["schema-value"]);
    },
  },
  methods: {
    onChange(event) {
      this.$emit("change", this.path, encodeURI(event.target.value));
    },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-url {
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
