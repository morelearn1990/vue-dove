<template>
  <div class="d-add">
    <div>
      添加至此处
    </div>
  </div>
</template>
<script>
export default {
  name: "d-add",
};
</script>
<style lang="less" scoped>
.d-add {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #f9f9f9;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #888;
  }
}
</style>
