<template>
  <div :class="{ 'dove-schema-array': true, arrayEditing: editIndex !== null }">
    <Title :title="title" :des="des" />
    <SlickList lockAxis="y" axis="y" :value="list" @input="listSort" class="ul" helperClass="sort-helper" :shouldCancelStart="shouldCancelSort">
      <SlickItem v-for="(item, index) in list" :index="index" :key="index" :item="item" class="li">
        <div :class="{ 'sort-item': true, editing: index === editIndex }">
          <div class="title" @click="editing(index)">
            <span class="item drag">
              <i class="iconfont icon-drag item-icon"></i>
            </span>
            <span class="item text">{{ `${index + 1}.${itemTitle(item)}` }}</span>
            <span class="item edit hover" @click.stop="editing(index)">
              <i class="iconfont icon-edit"></i>
            </span>
            <span class="item hover" @click.stop="add(index)">
              <i class="iconfont icon-copy"></i>
            </span>
            <span class="item hover" @click.stop="trash(index)">
              <i class="iconfont icon-trash"></i>
            </span>
          </div>
          <div class="content" v-if="index === editIndex">
            <component :path="[...path, index]" :key="[...path, index].join('')" :schema="item" :is="`dove-schema-${item['schema-type'] || 'object'}`" @change="childChange"></component>
          </div>
        </div>
      </SlickItem>
    </SlickList>
    <div class="add" @click="add()">
      <i class="iconfont icon-add"></i>
      <span>新增列表项</span>
    </div>
  </div>
</template>
<script>
import { SlickList, SlickItem } from "vue-slicksort";
import cloneDeep from "lodash/cloneDeep";
import Title from "./title";
export default {
  name: "dove-schema-array",
  components: {
    SlickList,
    SlickItem,
    Title,
  },
  props: {
    schema: { type: Object },
    path: { type: Array, required: true },
  },
  data() {
    return {
      editIndex: null,
    };
  },
  computed: {
    show() {
      return this.schema["schema-show"];
    },
    list() {
      return this.schema["schema-value"];
    },
    des() {
      const max = this.schema["schema-max"];
      const min = this.schema["schema-min"];
      let str = "";
      str += max ? `最多为 ${max} 个` : "";
      str += max && min ? ", " : "";
      str += min ? `最少为 ${max} 个` : "";
      return str;
    },
    title() {
      return this.schema["schema-title"];
    },
  },
  methods: {
    shouldCancelSort(e) {
      const shouldCancelSort = !(typeof this.editIndex !== "number" && e.target.className === "iconfont icon-drag item-icon");
      return shouldCancelSort;
    },
    listSort(list) {
      const { path } = this;
      this.$emit("change", path, list);
    },
    itemTitle(item) {
      if (item["schema-type"] === "text" || item["schema-type"] === "textarea") {
        return item["schema-value"];
      } else {
        const show = this.show;
        return `${item[show] && item[show]["schema-value"] ? item[show]["schema-value"] : ""}`;
      }
    },
    childChange(path, value) {
      this.$emit("change", path, value);
    },
    editing(index) {
      this.editIndex = this.editIndex === index ? null : index;
    },
    add(index) {
      const { path, list } = this;
      if (list.length >= this.schema["schema-max"]) return;
      if (index === undefined) {
        index = list.length - 1;
      }
      const newItem = cloneDeep(list[index]);
      const newList = [...list];
      newList.splice(index, 0, newItem);
      this.editIndex = index + 1;
      this.$emit("change", path, newList);
    },
    trash(index) {
      const min = this.schema["schema-min"] || 1;
      if (this.list.length <= min) return;
      const newList = [...this.list];
      newList.splice(index, 1);
      this.$emit("change", this.path, newList);
    },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-array {
  margin-bottom: 15px;
  &.arrayEditing {
    > .ul {
      > .li {
        > .sort-item {
          > .title {
            > .drag {
              color: #aaa;
              cursor: not-allowed;
            }
          }
        }
      }
    }
  }
}
.title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 300;
  padding: 10px 0;
  .hover {
    visibility: hidden;
  }
  &:hover {
    .hover {
      visibility: visible;
    }
  }
  .item {
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 14px;
    &.text {
      flex-grow: 1;
      flex-shrink: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    i {
      font-size: 16px;
      padding: 5px 5px 5px 0;
    }
  }
}
.ul {
  border-top: 1px solid #eee;
}
.li {
  border-bottom: 1px solid #eee;
}
.sort-item {
  background-color: #fff;
  &:hover {
    background-color: #f0f0f0;
  }
  &.editing {
    background-color: #f9f9f9;
    padding-bottom: 1px;
    > .title {
      padding-bottom: 0;
      .hover {
        visibility: visible;
      }
    }
  }
}
.content {
  padding: 0 10px;
}
.add {
  color: #1890ff;
  font-weight: 300;
  padding: 5px;
  font-size: 12px;
}
.drag {
  padding-left: 0;
  cursor: grab;
}
</style>
<style lang="less">
.sort-helper {
  cursor: grab;
  z-index: 999;
  .sort-item {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
}
</style>
