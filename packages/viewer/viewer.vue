<template>
  <div class="dove-page-wrapper">
    <div v-for="item in value" :key="item.id" :data="item">
      <component :is="item.componentName" v-bind="mapSchemaValue(item.schema)" />
    </div>
  </div>
</template>

<script>
import { mapSchemaValue } from "../editor/schema";

export default {
  name: "dove-viewer",
  components: {},
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    mapSchemaValue(schema) {
      return mapSchemaValue(schema);
    },
  },
};
</script>
