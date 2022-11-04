<template>
  <div class="fileList" :class="theme">
    <!-- <div class="fileListHeader">
      <span class="name title">File Name</span>
      <span class="client title">Client</span>
      <span class="description title">Description</span>
    </div> -->
    <FileListItems
      :key="row"
      v-for="row in tableData"
      :row="row"
    />
    <div class="showPreviewButton" v-on:click="showHidePreview">
      <span class="material-symbols-outlined"> {{ chevron }} </span>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import FileListItems from "./table/FileListItems.vue";
export default {
  props: ["cycleName"],
  components: {
    FileListItems,
  },
  methods: {
    showHidePreview: () => {
      store.commit("showPreview");
    },
  },
  computed: {
    tableData() {
      return store.state.filesData
        .filter((i) => i.Area === "SDLC" && i.Stage === this.cycleName)
        .sort((a, b) => {
          return a.Parent - b.Parent;
        });
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
.fileListHeader {
  margin: 6px 0px 0px 65px;
  text-align: left;
  list-style-type: none;
  display: flex;
  align-items: center;
}

.fileList {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  position: relative;
  box-sizing: border-box;
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  padding: 50px 0px 50px 20px;
  z-index: 4;
  background: rgb(44, 44, 44);
}

.fileList::-webkit-scrollbar {
  display: none;
}

.fileList.light {
  background: rgb(255, 255, 255);
}

.fileListHeader .title {
  min-width: 300px;
  margin: 0px 3px 0px 3px;
  padding: 0px 10px;
  color: rgb(179, 179, 179);
}
.client.title {
  min-width: 200px;
}

.fileListItem.Template {
  margin-top: 20px;
}

.ShowHideExamples {
  z-index: 100;
  position: absolute;
  left: -30px;
  top: 5px;
  cursor: pointer;
  user-select: none;
}
</style>