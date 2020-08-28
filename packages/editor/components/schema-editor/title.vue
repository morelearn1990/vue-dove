<template>
  <div class="dove-schema-title">
    <span>{{ title }}</span>
    <span class="des">{{ des && `（${des}）` }}</span>
  </div>
</template>
<script>
export default {
  name: "dove-schema-title",
  props: {
    title: { type: String },
    des: { type: String },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-title {
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  color: #4b4b4b;
  margin: 5px 0;
  .des {
    color: #7f7f7f;
  }
}
.dove-schema-object {
  > .dove-schema-title {
    color: #2a2a2a;
    font-size: 16px;
    font-weight: 400;
  }
}
.dove-schema-boolean,
.dove-schema-color,
.dove-schema-image {
  .dove-schema-title {
    margin: 5px 0;
  }
}
</style>
