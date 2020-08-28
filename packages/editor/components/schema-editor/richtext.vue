<template>
  <div class="dove-schema-richtext">
    <Title :title="schema['schema-title']" :des="schema['schema-description']" />
    <textarea :id="`dove-schema-richtext-${id}`" :name="`dove-schema-richtext-${id}`" rows="10"></textarea>
  </div>
</template>
<script>
import Title from "./title";
import { Jodit } from "jodit";
import { uuid } from "../../util";
export default {
  name: "dove-schema-richtext",
  components: { Title },
  props: {
    schema: { type: Object, required: true },
    path: { type: Array, required: true },
  },
  data() {
    return { id: uuid(8, 16), jodit: null };
  },
  watch: {
    schema() {
      this.jodit.events.off("change");
      this.jodit.value = this.schema["schema-value"];
      this.jodit.events.on("change", (event) => this.onChange(event));
    },
  },
  mounted() {
    this.jodit = new Jodit(`#dove-schema-richtext-${this.id}`, {
      uploader: {
        insertImageAsBase64URI: true,
      },
      language: "zh_cn",
      defaultActionOnPaste: "insert_clear_html",
      toolbarButtonSize: "small",
      buttonsSM:
        "source,undo,redo,eraser,bold,strikethrough,underline,italic,paragraph,font,fontsize,brush,superscript,subscript,ul,ol,outdent,indent,align,link,image,file,video,table,selectall,cut,copy,paste,copyformat,hr,fullsize,preview",
    });
    this.jodit.value = this.schema["schema-value"];
    this.jodit.events.on("change", (event) => this.onChange(event));
  },
  methods: {
    onChange(value) {
      this.$emit("change", this.path, value);
    },
  },
};
</script>
<style lang="less" scoped>
.dove-schema-richtext {
  box-sizing: border-box;
  margin-bottom: 15px;
  textarea {
    width: 100%;
    resize: vertical;
    padding: 6px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #5a5a5a;
    font-size: 16px;
  }
}
</style>
