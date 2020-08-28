<template>
  <div class="dove-component-wrapper" @mousemove="mousemove" @click="click" :id="id">
    <component :is="data.componentName" v-bind="schemaProps"></component>
    <div v-if="isHover" class="add top" @click.stop="add('pre')">
      <i class="iconfont icon-add"></i>
    </div>
    <div v-if="isHover" class="add bottom" @click.stop="add('next')">
      <i class="iconfont icon-add"></i>
    </div>
  </div>
</template>
<script>
import { mapSchemaValue } from "../schema";
export default {
  name: "dove-component-wrapper",
  props: {
    id: { type: String, required: true },
    index: { type: Number, required: true },
    data: { type: Object, required: true },
    isHover: { type: Boolean, required: true },
  },
  computed: {
    schemaProps() {
      if (this.data.schema) {
        const props = mapSchemaValue(this.data.schema);
        return props;
      } else {
        return {};
      }
    },
  },
  methods: {
    mousemove() {
      // 显示快捷操作和背景，当前组件显示在前和在后的增加按钮
      this.$emit("componentMouseMove", this.id);
    },
    click() {
      // 显示快捷操作和背景，当前组件显示在前和在后的增加按钮
      this.$emit("componentClick", this.id, this.index);
    },
    add(position) {
      const positionNum = position == "next" ? 1 : 0;
      this.$emit("componentPosition", this.index + positionNum);
    },
  },
};
</script>
<style lang="less" scoped>
.dove-component-wrapper {
  position: relative;
  width: 100%;
  .add {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px #ddd;
    position: absolute;
    left: calc(50% - 20px);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    &.bottom {
      bottom: -20px;
    }
    &.top {
      top: -20px;
    }
    i {
      font-size: 30px;
      color: #888;
    }
  }
}
</style>
