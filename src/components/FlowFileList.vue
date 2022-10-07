<template>
    <div class="fileList" :class="theme">
      <li
        class="fileListItem {{row.Type}}"
        tabindex="1"
        :key="row"
        v-for="row in tableData"
        @click="goToSelectedFile(row)"
        :ref="row"
      >
        <TypeTag :type="row.Type"></TypeTag>
        <h2 class="name cell">{{ row.Name }}</h2>
        <h2 class="client cell">{{ row.Client }}</h2>
        <a :href="row.Link" class="boxLink"
          ><span class="material-symbols-outlined"> link </span>
        </a>
      </li>
    </div>
  </template>
  
  <script>
  import store from "../store";
  import TypeTag from "./table/TypeTag.vue";
  
  export default {
    props: ["cycleName", "filters"],
    components: {
      TypeTag,
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
        //   .filter(
        //     (i) =>
        //       (i.Name
        //         ? i.Name.toLowerCase().includes(this.filters.searchText.toLowerCase())
        //         : null) ||
        //       (i.Client
        //         ? i.Client.toLowerCase().includes(this.filters.searchText.toLowerCase())
        //         : null)
        //   )
        //   .filter((i) =>
        //     (this.filters.type.Example ? i.Type === "Example" : i.Type !== "Example") ||
        //     (this.filters.type.Template ? i.Type === "Template" : i.Type !== "Template")
        //   );
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
  
  <style>
  </style>