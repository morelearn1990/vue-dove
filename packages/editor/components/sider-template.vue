<template>
  <div class="dove-sider-template">
    <div class="classify">
      <div @click="switchClassify(null)" :class="show === null ? 'show' : ''">
        <span>所有</span>
      </div>
      <div v-for="(classify, index) in templateClassify" :key="index" @click="switchClassify(classify.key)" :class="show === classify.key ? 'show' : ''">
        <span>{{ classify.name }}</span>
      </div>
    </div>
    <div class="list">
      <div v-for="(template, index) in templateList" :key="index" @click="selectTemplate(template)">
        <img :src="template.image" class="thumbnail" />
        <div class="origin">
          <img :src="template.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dove-sider-template",
  props: {
    templates: { type: Object, default: () => ({}) },
  },
  data() {
    return { show: null };
  },
  computed: {
    templateClassify() {
      const { templates } = this;
      return Object.keys(templates).reduce((pre, key) => {
        return pre.concat([
          {
            key: key,
            name: templates[key].name,
          },
        ]);
      }, []);
    },
    templateList() {
      const { show, templates } = this;
      let list;
      if (show) {
        list = templates[show].children;
      }
      if (!show || !list) {
        list = Object.keys(templates).reduce((pre, key) => {
          return pre.concat(templates[key].children);
        }, []);
      }
      return list;
    },
  },
  methods: {
    switchClassify(key) {
      this.show = key;
    },
    selectTemplate(template) {
      this.$emit("selectTemplate", template.schema);
    },
  },
};
</script>
<style lang="less" scoped>
.dove-sider-template {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  height: 100%;
  .classify {
    flex-grow: 0;
    flex-shrink: 0;
    padding: 5px 10px 5px 0;
    > div {
      margin-bottom: 10px;
      border-radius: 3px;
      padding: 5px 10px;
      text-align: center;
      cursor: pointer;
      &.show {
        background-color: #1890ff;
        color: #fff;
      }
    }
  }
  .list {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto;
    > div {
      padding: 10px 0;
      position: relative;
      border-bottom: 3px solid #e7ebe9;
      &:hover {
        .origin {
          width: 600px;
          display: block;
          position: fixed;
          left: 420px;
          z-index: 99;
          top: 10px;
        }
      }

      .thumbnail {
        width: 100%;
      }

      .origin {
        display: none;
        box-shadow: 0 0 10px #ccc;
        border: 1px solid #ccc;
        > img {
          width: 100%;
        }
      }
    }
  }
}
</style>
