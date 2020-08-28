<template>
  <div class="dove-editor" ref="dove-editor">
    <SiderPanel @close="siderPanelClose">
      <SiderTemplate v-if="templating" @selectTemplate="selectTemplate" :templates="templates" />
      <SiderComponent v-else-if="showComponentSelector" @addComponent="addComponent" :components="components" />
      <SiderSchema v-else-if="showSchemaEditor" />
    </SiderPanel>
    <div class="body">
      <div>
        <div class="header">
          <ToolBar @command="toolbarCommand" :canUndo="canUndo" :canRedo="canRedo" :list="list" />
        </div>
        <div class="content">
          <div>
            <div class="panel-wrapper dove-page-wrapper" ref="panel-wrapper">
              <div>
                <ComponentWrapper
                  @componentPosition="addComponentIndex"
                  @componentClick="componentClick"
                  @componentMouseMove="componentMouseMove"
                  v-for="(item, index) in editorList"
                  :key="index"
                  :id="item.id"
                  :index="index"
                  :isHover="hoveredId === item.id"
                  :data="item"
                />
              </div>
            </div>
            <div class="dove-indicator">
              <ToolTip v-if="hoveredId" :top="hoveredPosition.top" @tooltipCommand="tooltipCommand" />
              <div v-if="hoveredId" class="item hovered" :style="{ top: hoveredPosition.top + 'px', height: hoveredPosition.height + 'px' }"></div>
              <div v-if="selectedId" class="item selected" :style="{ top: selectedPosition.top + 'px', height: selectedPosition.height + 'px' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SiderSchema from "./components/sider-schema";
import SiderComponent from "./components/sider-component";
import SiderTemplate from "./components/sider-template";
import SiderPanel from "./components/sider-panel";
import ComponentWrapper from "./components/component-wrapper";
import ToolBar from "./components/tool-bar";
import ToolTip from "./components/tool-tip";

import store from "./store";
import eventBus from "./eventBus";

import { fullScreen, exitFullScreen, getElementTop, getElementReact, uuid } from "./util";

export default {
  name: "dove-editor",
  components: {
    SiderSchema,
    SiderComponent,
    SiderTemplate,
    SiderPanel,
    ComponentWrapper,
    ToolBar,
    ToolTip,
  },
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    components: { type: Object },
    templates: { type: Object },
    request: {
      type: Function,
      default: () => {},
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return store.state;
  },
  created() {
    // 逻辑待定,初始化值发生改变后是否要更新
    this.list = this.value;
    // 事件监听
    eventBus.$on("request", (params) => {
      this.request && this.request(params);
    });
    this.$once("hook:beforeDestroy", () => {
      eventBus.$off("request");
    });
  },
  mounted() {
    store.modifyPanelWrapper(this.$refs["panel-wrapper"]);
  },
  watch: {
    value() {
      // 逻辑待定,初始化值发生改变后是否要更新
      this.list = this.value;
    },
    list: function () {
      // list发生变化后，hover的位置也需要更新
      this.updateSelected();
      this.updateHovered();
      this.$emit("change", this.list);
    },
    selectedId: function () {
      this.updateSelected();
    },
    hoveredId: function () {
      this.updateHovered();
    },
  },
  computed: {
    canUndo() {
      return this.historyCurrentIndex > 0;
    },
    canRedo() {
      return this.historyCache.length > this.historyCurrentIndex + 1;
    },
    showTemplateSelector() {
      const { templating } = this;
      return templating;
    },
    showComponentSelector() {
      const { addIndex, editorList } = this;
      return typeof addIndex === "number" || editorList.length <= 0;
    },
    showSchemaEditor() {
      const { selectedId, list } = this;
      return selectedId && list.findIndex((el) => el.id == selectedId) > -1;
    },
    editorList() {
      const addIndex = this.addIndex;
      if (typeof addIndex !== "number") return this.list;
      const editorList = [...this.list];
      editorList.splice(addIndex, 0, { componentName: "d-add", id: uuid(8, 16) });
      return editorList;
    },
  },
  methods: {
    // 更新事件
    updateHovered() {
      const { panelWrapperElement, hoveredId } = this;
      if (!hoveredId) return;
      this.$nextTick(() => {
        const hoveredElement = document.getElementById(hoveredId);
        if (!hoveredElement) return;
        this.hoveredPosition.top = getElementTop(panelWrapperElement, hoveredElement);
        this.hoveredPosition.height = getElementReact(hoveredElement).height;
      });
    },
    updateSelected() {
      const { panelWrapperElement, selectedId } = this;
      if (!selectedId) return;
      this.$nextTick(() => {
        const selectedElement = document.getElementById(selectedId);
        if (!selectedElement) return;
        this.selectedPosition.top = getElementTop(panelWrapperElement, selectedElement);
        this.selectedPosition.height = getElementReact(selectedElement).height;
      });
    },
    // toolbar事件
    toolbarCommand(command) {
      this[`toolbar${command}`] && this[`toolbar${command}`]();
    },
    toolbarTemplate() {
      this.templating = true;
    },
    toolbarSaveTemplate() {
      this.$emit("saveTemplate", this.list);
    },
    toolbarPublish() {
      this.$emit("publish", this.list);
    },
    fullscreenchange() {
      this.fullScreen = false;
      this.$refs["dove-editor"].removeEventListener("fullscreenchange", this.fullscreenchange.bind(this));
    },
    toolbarFullScreen() {
      if (this.fullScreen) {
        exitFullScreen();
      } else {
        fullScreen(this.$refs["dove-editor"]);
        this.$refs["dove-editor"].addEventListener("fullscreenchange", this.fullscreenchange.bind(this));
      }
      this.fullScreen = !this.fullScreen;
    },
    toolbarEditorUndo() {
      if (!this.canUndo) return;
      store.editorUndo();
    },
    toolbarEditorRedo() {
      if (!this.canRedo) return;
      store.editorRedo();
    },
    // tooltip事件
    tooltipCommand(command) {
      this[`tooltip${command}`] && this[`tooltip${command}`]();
    },
    tooltipUp() {
      store.upComponent();
    },
    tooltipDown() {
      store.downComponent();
    },
    tooltipCopy() {
      store.copyComponent();
    },
    tooltipDelete() {
      store.deleteComponent();
    },
    // componentwrapper 事件，鼠标移动到组件上时，显示背景和快捷操作
    componentMouseMove(id) {
      if (this.hoveredId == id || this.addIndex) return;
      store.changeHover(id);
    },
    componentClick(id, index) {
      if (this.selectedId == id || index == this.addIndex) return;
      store.changeSelect(id);
    },
    addComponentIndex(index) {
      store.addComponentIndex(index);
    },
    addComponent(component) {
      store.addComponent(component);
    },
    selectTemplate(template) {
      store.selectTemplate(template);
    },
    // 侧边栏事件
    siderPanelClose() {
      this.addIndex = null;
      this.selectedId = null;
      this.templating = null;
    },
  },
};
</script>
<style lang="less" scoped>
.dove-editor {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  .sider {
    width: 250px;
    padding: 5px 60px 5px 5px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .body {
    flex-grow: 1;
    flex-shrink: 1;
    background-color: #fafafa;
    padding-top: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    overflow: hidden;
    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .header {
      width: calc(100% - 80px);
      margin-right: 20px;
      height: 60px;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    }
    .content {
      position: relative;
      width: 100%;
      flex-grow: 1;
      flex-shrink: 1;
      box-sizing: border-box;
      overflow: auto;
      > div {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
      .panel-wrapper {
        width: calc(100% - 80px);
        margin-right: 20px;
        margin-bottom: 30px;
        position: relative;
        z-index: 10;
        background-color: #fff;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
.dove-indicator {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .item {
    position: absolute;
    width: calc(100% + 80px);
    left: -80px;
    z-index: 5;
  }
  .hovered {
    background-color: #f0f0f0;
  }
  .selected {
    background-color: #e9e9e9;
  }
}
</style>
