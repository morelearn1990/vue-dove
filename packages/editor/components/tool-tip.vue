<template>
  <div class="dove-tooltip" :style="{ top: top + 10 + 'px' }">
    <div class="item">
      <span @click="emit('Up')">
        <i class="iconfont icon-arrow-up"></i>
      </span>
      <span @click="emit('Down')">
        <i class="iconfont icon-arrow-down"></i>
      </span>
    </div>
    <div class="item">
      <span @click="emit('Copy')">
        <i class="iconfont icon-copy"></i>
      </span>
    </div>
    <div class="item">
      <span @click="emit('Delete')">
        <i class="iconfont icon-trash"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "dove-tooltip",
  props: {
    top: { type: Number, required: true },
  },
  methods: {
    emit(command) {
      this.$emit("tooltipCommand", command);
    },
  },
};
</script>
<style lang="less" scoped>
.dove-tooltip {
  position: absolute;
  left: 10px;
  z-index: 10;
  .item {
    margin-bottom: 10px;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px #d0d0d0;
    span {
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & ~ span {
        margin-top: 10px;
      }
    }
    i {
      font-size: 20px;
    }
  }
}
</style>
