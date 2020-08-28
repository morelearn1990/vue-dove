<template>
  <div class="dove-schema-boolean">
    <Title :title="schema['schema-title']" :des="schema['schema-description']" />
    <input type="checkbox" class="switch" :checked="schema['schema-value']" @change="onChange" />
  </div>
</template>
<script>
import Title from "./title";
export default {
  name: "dove-schema-boolean",
  components: { Title },
  props: {
    schema: { type: Object },
    path: { type: Array, required: true },
  },
  methods: {
    onChange(event) {
      this.$emit("change", this.path, event.target.checked);
    },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-boolean {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  margin-bottom: 15px;
}
input[type="checkbox"].switch {
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  width: 40px;
  height: 20px;
  background: #ccc;
  border-radius: 10px;
  transition: border-color 0.3s, background-color 0.3s;
  &::after {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0, 0, 2px, #999;
    transition: 0.4s;
    top: 2px;
    position: absolute;
    left: 2px;
  }
  &:checked {
    background: rgb(19, 206, 102);
  }
  &:checked::after {
    content: "";
    position: absolute;
    left: 55%;
    top: 2px;
  }
}
</style>
