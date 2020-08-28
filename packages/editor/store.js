import Vue from "vue";
import { uuid } from "./util";
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
class Store {
  state = {
    // 全屏
    fullScreen: false,
    // 队列，撤销和重做的逻辑
    historyCache: [],
    historyCurrentIndex: -1,
    list: [],
    // 选择模板逻辑
    templating: false,
    // 新增模块逻辑
    addIndex: null,
    // 画板父级元素
    panelWrapperElement: null,
    // 鼠标移动，显示快捷操作和背景
    hoveredId: "",
    hoveredElement: null,
    hoveredPosition: {
      top: 0,
      height: 0,
    },
    // 选择区块，显示选择背景和编辑框
    selectedId: null,
    selectedElement: null,
    selectedPosition: {
      top: 0,
      height: 0,
    },
  };
  // 历史记录
  addHistoryCache() {
    if (this.state.historyCurrentIndex + 1 < this.state.historyCache.length) {
      this.state.historyCache.splice(this.state.historyCurrentIndex + 1);
    }
    this.state.historyCache.push({
      list: cloneDeep(this.state.list),
    });
    // 限制undo 纪录步数，最多支持100步操作undo
    this.state.historyCache.splice(100);
    this.state.historyCurrentIndex++;
    // console.log("state", this.state);
  }
  addHistoryCachePre() {
    if (this.state.historyCache.length <= 0) {
      this.addHistoryCache();
    }
  }
  editorUndo = () => {
    if (this.state.historyCurrentIndex <= 0) return;
    this.state.historyCurrentIndex -= 1;
    this.relapceEditorState();
  };
  editorRedo = () => {
    if (this.state.historyCurrentIndex >= this.state.historyCache.length - 1) return;
    this.state.historyCurrentIndex += 1;
    this.relapceEditorState();
  };
  relapceEditorState() {
    const { historyCache, historyCurrentIndex } = this.state;
    const data = historyCache[historyCurrentIndex];
    this.state.list = cloneDeep(data.list);
  }
  // schema 编辑
  schemeValueChange(paths, value) {
    this.addHistoryCachePre();
    const selectedId = paths.shift();
    const index = this.state.list.findIndex((item) => item.id === selectedId);
    const componentObject = cloneDeep(this.state.list[index]);
    let pathed = "";
    paths.forEach((path) => {
      let transPath = `[${path}]`;
      if (typeof path === "number") {
        transPath = `["schema-value"][${path}]`;
      }
      pathed += transPath;
    });
    pathed += '["schema-value"]';
    set(componentObject.schema, pathed, value);
    Vue.set(this.state.list, index, componentObject);
    this.addHistoryCache();
  }
  // 增删改查
  addComponentIndex = (index) => {
    this.state.addIndex = index;
    this.state.hoveredId = null;
    this.state.selectedId = null;
  };
  addComponent = (components) => {
    this.addHistoryCachePre();
    const item = cloneDeep(components);
    item.id = uuid(8, 16);
    this.state.list.splice(this.state.addIndex || 0, 0, item);
    Vue.nextTick(() => {
      this.changeSelect(item.id);
    });
    this.addHistoryCache();
  };
  copyComponent = () => {
    const { hoveredId, list } = this.state;
    const hoveredIndex = list.findIndex((item) => item.id == hoveredId);
    if (hoveredIndex < 0) return;
    this.addHistoryCachePre();
    const hoverenItem = list[hoveredIndex];
    const item = cloneDeep(hoverenItem);
    item.id = uuid(8, 16);
    this.state.list.splice(hoveredIndex, 0, item);
    this.addHistoryCache();
  };
  upComponent = () => {
    const { hoveredId, list } = this.state;
    const hoveredIndex = list.findIndex((item) => item.id == hoveredId);
    if (hoveredIndex <= 0) return;
    this.addHistoryCachePre();
    const itemNext = list[hoveredIndex];
    const itemPre = list[hoveredIndex - 1];
    this.state.list.splice(hoveredIndex - 1, 1, itemNext);
    this.state.list.splice(hoveredIndex, 1, itemPre);
    this.addHistoryCache();
  };
  downComponent = () => {
    const { hoveredId, list } = this.state;
    const hoveredIndex = list.findIndex((item) => item.id == hoveredId);
    if (hoveredIndex >= list.length - 1) return;
    this.addHistoryCachePre();
    const itemPre = list[hoveredIndex];
    const itemNext = list[hoveredIndex + 1];
    this.state.list.splice(hoveredIndex + 1, 1, itemPre);
    this.state.list.splice(hoveredIndex, 1, itemNext);
    this.addHistoryCache();
  };
  deleteComponent = () => {
    const { hoveredId, list } = this.state;
    const hoveredIndex = list.findIndex((item) => item.id == hoveredId);
    if (hoveredIndex == -1) return;
    this.addHistoryCachePre();
    this.state.list.splice(hoveredIndex, 1);
    this.state.hoveredId = null;
    if (this.state.selectedId === hoveredId) {
      this.state.selectedId = null;
    }
    this.addHistoryCache();
  };
  selectTemplate(template) {
    this.state.list = cloneDeep(template);
    this.state.templating = false;
  }
  modifyPanelWrapper = (element) => {
    this.state.panelWrapperElement = element;
  };
  // 鼠标移动和选择事件
  changeHover = (id) => {
    if (typeof this.state.addIndex == "number") {
      return;
    }
    this.state.hoveredId = id;
    this.state.hoveredElement = document.getElementById(id);
  };
  changeSelect = (id) => {
    this.state.addIndex = null;
    this.state.selectedId = id;
    this.state.selectedElement = document.getElementById(id);
  };
}

const store = new Store();
export default store;
