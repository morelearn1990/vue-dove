<template>
  <div class="dove-schema-object">
    <Title :title="schema['schema-title']" :des="schema['schema-description']" />
    <div>
      <component
        v-for="child in keys"
        :key="[...path, child].join('')"
        :path="[...path, child]"
        :schema="schema[child]"
        :is="`dove-schema-${schema[child]['schema-type']}`"
        @change="childChange"
      ></component>
    </div>
  </div>
</template>
<script>
import Title from "./title";
export default {
  name: "dove-schema-object",
  components: { Title },
  props: {
    schema: { type: Object, required: true },
    path: { type: Array, required: true },
  },
  computed: {
    keys() {
      return Object.keys(this.schema).filter((key) => !/^schema-/.test(key));
    },
  },
  methods: {
    childChange(path, value) {
      this.$emit("change", path, value);
    },
    splitPath(path) {
      return path.join("");
    },
  },
};
</script>
<style lang="less" scoped></style>
