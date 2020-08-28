<script>
export default {
  name: "dove-sider-panel",
  methods: {
    close() {
      this.$emit("close");
    },
  },
  render() {
    const isShow = !!this.$slots.default;
    return (
      <div class={`dove-sider-panel ${isShow ? "show" : ""}`}>
        <div class="close" onClick={this.close}>
          <i class="iconfont icon-close"></i>
        </div>
        <div class="content">{this.$slots.default}</div>
      </div>
    );
  },
};
</script>
<style lang="less" scoped>
.dove-sider-panel {
  flex-grow: 0;
  flex-shrink: 0;
  display: none;
  width: 0;
  position: relative;
  padding: 20px 10px 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #eee;
  overflow: hidden;
  &.show {
    display: block;
    width: 400px;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
  }
  .content {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
