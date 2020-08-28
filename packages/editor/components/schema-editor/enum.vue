<template>
  <div class="dove-schema-enum">
    <Title :title="schema['schema-title']" :des="schema['schema-description']" />
    <div class="select-wrapper">
      <select class="select" :value="schema['schema-value']" @change="onChange">
        <option v-for="(option, index) in optionList" :key="index" :value="option.value" :label="option.label"></option>
      </select>
    </div>
  </div>
</template>
<script>
import Title from "./title";
import eventBus from "../../eventBus";
export default {
  name: "dove-schema-enum",
  components: { Title },
  props: {
    schema: { type: Object, required: true },
    path: { type: Array, required: true },
  },
  data() {
    return {
      optionList: [],
    };
  },
  mounted() {
    const options = this.schema["schema-option"];
    if (options instanceof Array) {
      this.optionList = options;
    } else if (typeof options == "string") {
      // 进行urlget请求
      eventBus.$emit("request", {
        from: "enum",
        option: options,
        callback: this.requestCallback,
      });
    }
  },
  methods: {
    onChange(event) {
      this.$emit("change", this.path, event.target.value);
    },
    requestCallback: (options) => {
      this.optionList = options;
    },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-enum {
  margin-bottom: 15px;
  select {
    width: 100%;
    border-radius: 3px;
    border: 1px solid #d6d6d6;
    padding: 5px;
    color: #5a5a5a;
    &:focus,
    &:active {
      border: 1px solid #d6d6d6;
      outline: none;
    }
  }
}
</style>
