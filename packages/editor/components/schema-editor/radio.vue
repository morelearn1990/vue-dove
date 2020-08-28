<template>
  <div class="dove-schema-radio">
    <Title :title="schema['schema-title']" :des="schema['schema-description']" />
    <div class="radio-wrapper">
      <label v-for="option in options" :key="option.value" :class="{ label: true, selected: checked == option.value }">
        <input :name="name" type="radio" class="input" @change="onChange" :value="option.value" />
        <span v-if="option.icon">
          <i :class="`icon ${option.icon}`"></i>
        </span>
        <span v-else>{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>
<script>
import Title from "./title";
import { uuid } from "../../util";
export default {
  name: "dove-schema-radio",
  components: { Title },
  props: {
    schema: { type: Object },
    path: { type: Array, required: true },
  },
  computed: {
    name() {
      return uuid(8, 16);
    },
    options() {
      return this.schema["schema-option"] || [];
    },
    checked() {
      return this.schema["schema-value"];
    },
  },
  methods: {
    onChange(event) {
      // console.log("event", event);
      this.$emit("change", this.path, event.target.value);
    },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-radio {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  margin-bottom: 15px;
  .label {
    border: 1px solid #dcdee2;
    border-left: 0;
    position: relative;
    padding: 5px 8px;
    display: inline-block;
    &.selected {
      border-color: #2d8cf0;
      box-shadow: -1px 0 0 0 #2d8cf0;
    }
    &:first-child {
      border-radius: 5px 0 0 5px;
      border-left: 1px solid #dcdee2;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
    .icon {
      font-size: 16px;
    }
    .input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
}
</style>
