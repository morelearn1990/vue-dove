<template>
  <div id="app">
    <dove-editor v-model="value" @change="onChange" :components="componentList" :templates="templateList" />
  </div>
</template>

<script>
import schema from "./schema";
import componentList from "../packages/components/schema";
import templateList from "../packages/template/index";
export default {
  name: "App",
  data() {
    return {
      value: schema,
      componentList,
      templateList,
    };
  },
  watch: {
    value() {
      console.log("watch value", this.value);
    },
  },
  methods: {
    onChange(schema) {
      console.log("onChange schema", JSON.stringify(schema));
    },
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
