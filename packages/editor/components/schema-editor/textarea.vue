<template>
  <div class="dove-schema-textarea">
    <Title :title="schema['schema-title']" :des="schema['schema-description']" />
    <textarea :value="schema['schema-value']" rows="4" type="" @input="onChange" />
  </div>
</template>
<script>
import Title from "./title";
export default {
  name: "dove-schema-textarea",
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
.dove-schema-textarea {
  box-sizing: border-box;
  margin-bottom: 15px;
  textarea {
    width: 100%;
    resize: vertical;
    padding: 6px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #5a5a5a;
    font-size: 16px;
  }
}
</style>
