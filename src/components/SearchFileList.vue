<template>
  <div class="fileList" :class="theme">
    <div class="fileListHeader">
      <span class="name title">File Name</span>
      <span class="client title">Client</span>
      <span class="description title">Description</span>
    </div>
    <FileListItems
      :key="row"
      v-for="row in tableData"
      :row="row"
    />
  </div>
</template>

<script>
import store from "../store";
import FileListItems from "./table/FileListItems.vue";

export default {
  props: ["cycleName", "filters"],
  components: {
    FileListItems
},
  methods: {
    setSelectedPreview: (row) => {
      store.commit("setSelectedFile", row);
      store.commit("showPreview", true);
    },
    showHidePreview: () => {
      store.commit("showPreview");
    },
  },
  computed: {
    tableData() {
      return store.state.filesData
        .filter(
          (i) =>
            (i.Name
              ? i.Name.toLowerCase().includes(this.filters.searchText.toLowerCase())
              : null) ||
            (i.Client
              ? i.Client.toLowerCase().includes(this.filters.searchText.toLowerCase())
              : null)
        )
        .filter((i) =>
          (this.filters.type.Example ? i.Type === "Example" : i.Type !== "Example") ||
          (this.filters.type.Template ? i.Type === "Template" : i.Type !== "Template")
        );
    },
    theme() {
      return this.$store.state.theme;
    },
    chevron() {
      return this.$store.state.preview ? "chevron_right" : "chevron_left";
    },
  },
};
</script>

<style scoped>


</style>