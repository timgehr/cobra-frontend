<template>
  <div
    v-if="row.Type === 'Template'"
    @click="showHideExamples(row.Parent)"
    class="ShowHideExamples"
  >
    <span class="material-symbols-outlined">
      {{ !showExamples.includes(row.Parent) ? "expand_more" : "expand_less" }}
    </span>
  </div>
  <div class="fileListItem" @click="setSelectedPreview(row)" :class="row.Type">
    <div
      v-if="row.Type === 'Example' && !showExamples.includes(row.Parent)"
      class="littleConnector"
    ></div>
    <TypeTag :type="row.Type"></TypeTag>
    <div class="name cell" :class="theme">
      <h2 class="nameCellName">{{ row.Name }}</h2>
      <h2 class="nameCellClient" v-if="row.Client">·</h2>
      <h2 class="nameCellClient">{{ row.Client }}</h2>
    </div>
    <!-- <h2 v-if="row.Type === 'Example'" class="client cell">
        {{ row.Client }}
      </h2> -->
    <h2 class="description cell" :class="theme" v-if="!showPreview">
      {{ row.Description }}
    </h2>
    <a
      :href="row.Link"
      class="boxLink"
      target="_blank"
      rel="noopener noreferrer"
      ><span class="material-symbols-outlined"> link </span>
    </a>
  </div>
</template>

<script>
import store from "@/store";
import TypeTag from "./TypeTag.vue";
export default {
  props: ["row"],
  data() {
    return {
      showExamples: [],
    };
  },
  components: {
    TypeTag,
  },
  computed: {
    showPreview() {
      return this.$store.state.preview;
    },
    theme() {
      return store.state.theme;
    },
  },
  methods: {
    setSelectedPreview: (row) => {
      store.commit("setSelectedFile", row);
      store.commit("showPreview", true);
    },
    showHideExamples(rel) {
      console.log(rel);
      if (this.showExamples.includes(rel)) {
        this.showExamples.pop(rel);
      } else {
        this.showExamples.push(rel);
      }
    },
  },
};
</script>

<style>
.cell.light {
  background: rgb(240, 240, 240);
  color: #141414;
}

.littleConnector {
  position: absolute;
  background: rgb(150, 150, 150);
  height: 14px;
  width: 1px;
  top: -10px;
  left: 26px;
}

.boxLink {
  color: rgb(255, 255, 255);
  background: #0061d5;
  border-radius: 4px;
  height: 33px;
  margin-left: 3px;
  overflow: hidden;
  transition: 0.1s;
  min-width: 0px;
  max-width: 0px;
  margin-right: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.fileListItem:hover .boxLink {
  min-width: 33px;
  max-width: 33px;
  margin-right: 10px;
}

.fileListItem {
  margin: 6px 0px 0px 0px;
  text-align: left;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: fit-content;
  position: relative;
  max-width: 100%;
}

.nameCellName {
  font-size: 15px;
  margin: 0px 0px;
}

.nameCellClient {
  font-size: 15px;
  margin: 0px 0px;
  margin-left: 10px;
  color: rgba(128, 128, 128, 0.548);
}

.cell {
  min-height: 33px;
  height: 100%;
  max-height: 33px;
  max-width: 100%;
  flex-grow: 1;

  font-size: 15px;
  color: rgb(255, 255, 255);
  text-decoration: none;
  line-height: 33px;

  background: rgb(34, 34, 34);
  border-radius: 4px;
  margin: 0px 3px 0px 3px;
  padding: 0px 10px;
  transition: 0.2s;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.name.cell {
  display: flex;
  width: 100%;
}

.description.cell {
  width: 100%;
  flex-grow: 2;
  overflow: hidden;
}

.fileListItem:hover .cell {
  background: #141414;
  /* max-height: 66px; */
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

.panelSidePadding {
  position: absolute;
  right: 0px;
  width: 20px;
  top: 0px;
  height: 100%;
  background: inherit;
  z-index: 2;
}

.fileListItem.Template {
  margin-top: 20px;
}

.fileListItem.Template .cell {
  background: rgba(91, 132, 207, 0.2);
}

.fileListItem.Template:hover .cell {
  background: rgba(91, 132, 207, 0.3);
}

.fileList.light .fileListItem.Template:hover .cell {
  background: rgba(91, 132, 207, 0.3);
}

.fileListItem.Example .cell {
  background: rgb(183, 140, 45, 0.2);
}

.fileListItem.Example:hover .cell {
  background: rgb(183, 140, 45, 0.3);
}

.fileList.light .fileListItem.Example:hover .cell {
  background: rgb(183, 140, 45, 0.3);
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