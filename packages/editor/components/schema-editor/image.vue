<template>
  <div class="dove-schema-image">
    <div class="title">
      <Title :title="schema['schema-title']" :des="schema['schema-description']" />
      <label class="select" :for="uuid">
        <i class="iconfont icon-add"></i>
        选择图片
        <input type="file" :id="uuid" @change="fileChange" accept="image/*" />
      </label>
    </div>
    <div class="content">
      <img :src="schema['schema-value']" class="img" />
      <span>{{ fileName }}</span>
    </div>
  </div>
</template>
<script>
import Title from "./title";
import { uuid } from "../../util";
import eventBus from "../../eventBus";
export default {
  name: "dove-schema-image",
  components: { Title },
  props: {
    schema: { type: Object, required: true },
    path: { type: Array, required: true },
  },
  data() {
    return { uuid: uuid() };
  },
  computed: {
    fileName() {
      const value = this.schema["schema-value"] || "";
      const arr = value.split("/");
      return arr.pop();
    },
  },
  methods: {
    fileChange(e) {
      eventBus.$emit("request", {
        from: "image",
        files: e.target.files,
        callBack: this.requestCallBack,
      });
    },
    requestCallBack: (res) => {
      this.$emit("change", this.path, res);
    },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-image {
  margin-bottom: 15px;
}
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
}
.select {
  flex-grow: 0;
  flex-shrink: 0;
  color: #1890ff;
  font-weight: 300;
  padding: 5px;
  font-size: 12px;
  position: relative;
  > input {
    opacity: 0;
    position: absolute;
  }
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #d6d6d6;
  padding: 5px;
  .img {
    width: 50px;
    height: 50px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  > span {
    color: #999;
    margin-left: 10px;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
