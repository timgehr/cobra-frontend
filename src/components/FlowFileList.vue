<template>
  <div class="flowFileList" :class="theme">
    <FileListItems
      :key="row"
      v-for="row in tableData"
      :row="row"
    />
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
.flowFileList {
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
  border-radius: 4px;
  width: 100%;
}

.flowFileList::-webkit-scrollbar {
  display: none;
}

.flowFileList.light {
  background: rgb(255, 255, 255);
}

</style>