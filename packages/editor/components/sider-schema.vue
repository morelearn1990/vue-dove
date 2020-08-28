<template>
  <div>
    <component v-if="schema" :is="`dove-schema-${schema['schema-type'] || 'object'}`" @change="schemeValueChange" :schema="schema" :path="[selectedId]"></component>
  </div>
</template>
<script>
import { register_components } from "./schema-editor";
import store from "../store";
export default {
  name: "dove-sider-schema",
  components: { ...register_components },
  data() {
    return store.state;
  },
  computed: {
    schema() {
      const { list, selectedId } = this;
      const componentObject = list.find((item) => item.id === selectedId);
      return componentObject ? componentObject.schema : null;
    },
  },
  methods: {
    schemeValueChange(path, value) {
      store.schemeValueChange(path, value);
    },
  },
};
</script>
<style lang="less" scoped></style>
