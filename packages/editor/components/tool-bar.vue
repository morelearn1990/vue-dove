<template>
  <div class="components-contrl-bar">
    <div class="button-item" :class="{ disabled: !canUndo }" @click="emit('EditorUndo')">
      <i class="iconfont icon-undo"></i>
      <span>撤销</span>
    </div>
    <div class="button-item" :class="{ disabled: !canRedo }" @click="emit('EditorRedo')">
      <i class="iconfont icon-redo"></i>
      <span>重做</span>
    </div>
    <div class="button-item" @click="emit('Template')">
      <i class="iconfont icon-template"></i>
      <span>模板</span>
    </div>
    <div class="button-item" @click="emit('FullScreen')">
      <i class="iconfont icon-fullscreen"></i>
      <span>全屏</span>
    </div>
    <div class="button-item" @click="togglePreview">
      <i class="iconfont icon-preview"></i>
      <span>预览</span>
    </div>
    <div class="button-item" @click="emit('SaveTemplate')">
      <i class="iconfont icon-save"></i>
      <span>保存模板</span>
    </div>
    <div class="button-item" @click="emit('Publish')">
      <i class="iconfont icon-publish"></i>
      <span>发布</span>
    </div>
    <div v-protal="preview" :class="preview ? 'preview' : ''">
      <div v-if="preview" @click.stop="togglePreview" class="preview-close">
        <i class="iconfont icon-close"></i>
      </div>
      <dove-viewer :value="list" v-if="preview" />
    </div>
  </div>
</template>

<script>
import DoveViewer from "../../viewer";
import protal from "../protal";
export default {
  components: { DoveViewer },
  directives: { protal },
  props: {
    scale: {
      type: Number,
      default: 1,
    },
    canUndo: { type: Boolean, default: false },
    canRedo: { type: Boolean, default: false },
    list: { type: Array },
  },
  data() {
    return { preview: false };
  },
  methods: {
    emit(command) {
      this.$emit("command", command);
    },
    togglePreview() {
      this.preview = !this.preview;
    },
  },
};
</script>

<style lang="less" scoped>
.components-contrl-bar {
  z-index: 3;
  padding: 2px 12px;
  display: inline-flex;
  align-items: center;
  .button-item {
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    text-align: center;
    vertical-align: bottom;
    font-size: 14px;
    transition: transform 100ms;
    user-select: none;
    .scale-input {
      display: inline-block;
      position: relative;
      padding: 7px 0;
      width: 46px;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      white-space: nowrap;
      border-radius: 17px;
      margin: 0 4px;
    }
    > span {
      display: block;
    }
    &.scale-wrappper {
      width: 110px;
      margin-right: 10px;
      &:hover {
        transform: none;
      }
      > .scale-btn {
        display: inline-block;
        vertical-align: middle;
        padding: 6px 2px;
        font-size: 20px;
      }
    }
    &:hover {
      transform: scale(1.02);
      font-weight: bold;
    }
    &.disabled {
      cursor: not-allowed;
      color: gray !important;
    }
    & > i {
      font-size: 18px;
      display: inline-block;
      transition: all 0.28s;
    }
    & > p {
      font-size: 14px;
    }
  }
}
.preview {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
  overflow: auto;
}
.preview-close {
  position: absolute;
  padding: 5px;
  border-radius: 10px;
  top: 10px;
  right: 10px;
  background-color: gray;
  i {
    color: #fff;
    font-size: 20px;
  }
}
</style>
