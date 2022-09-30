<template>
  <div class="fileList" :class="theme">
      {{ beopis }}
    <div class="fileListHeader">
      <span class="name title">File Name</span>
      <span class="client title">Client</span>
      <span class="description title">Description</span>
    </div>
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
      <h2 class="description cell">
        {{ row.Description }}
      </h2>
      <a :href="row.Link"
        ><span class="material-symbols-outlined"> link </span>
      </a>
    </li>
    <div class="showPreviewButton" v-on:click="showHidePreview">
      <span class="material-symbols-outlined"> {{ chevron }} </span>
    </div>
    <div class="panelSidePadding"></div>
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
    beopis() {
      return ""
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
  position: relative;
  box-sizing: border-box;
  display: block;
  overflow: scroll;
  height: 100%;
  padding: 50px 20px 50px 50px;
  z-index: 4;
  background: rgb(44, 44, 44);
}

.fileList.light {
  background: rgb(255, 255, 255);
}

.fileList.light .cell {
  background: rgb(240, 240, 240);
  color: #141414;
}

.fileList.light .fileListItem:hover .cell {
  background: rgb(223, 223, 223);
  color: #141414;
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

.fileListItem a {
  color: rgb(255, 255, 255);
  background: #0061d5;
  border-radius: 4px;
  height: 33px;
  margin-left: 3px;
  overflow: hidden;
  transition: 0.1s;
  width: 0px;
  margin-right: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.fileListItem:hover a {
  width: 33px;
  margin-right: 40px;
}

.fileListItem {
  margin: 6px 0px 0px 0px;
  text-align: left;
  list-style-type: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: fit-content;
}

.cell {
  font-size: 15px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  min-width: 300px;
  background: rgb(34, 34, 34);
  border-radius: 4px;
  min-height: 33px;
  height: 100%;
  max-height: 33px;
  margin: 0px 3px 0px 3px;
  padding: 0px 10px;
  transition: 0.2s;
  line-height: 33px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fileListItem:hover .cell {
  background: #141414;
  /* max-height: 66px; */
}

.name.cell {
  max-width: 300px;
}

.client.cell {
  min-width: 200px;
  overflow: hidden;
}

.fileListItem Template {
  margin-top: 16;
}

.vr {
  max-width: 0.5px;
  min-height: 45px;
  margin-left: 30px;
  background: gray;
  color: gray;
}

.showPreviewButton {
  position: absolute;
  right: 0px;
  top: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 20px 0px 0px 20px;
  cursor: pointer;
  background: rgb(29, 29, 29);
  box-shadow: inset 12px 0px 10px -10px rgb(0, 0, 0, 0.1);
  z-index: 5;
}

.fileList.light .showPreviewButton {
  background: rgb(240, 240, 240);
}

.description.cell {
  width: 800px;
  overflow: hidden;
}

.panelSidePadding {
  position: absolute;
  right: 0px;
  width: 20px;
  top: 0px;
  height: 100%;
  background: inherit;
  z-index: 2;
}
</style>