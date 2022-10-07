<template>
  <div class="pageView" :class="preview">
    <div class="fileListContainer">
      <FileList :cycleName="cycleName" />
    </div>
    <div class="previewContainer" :class="theme">
      <BoxPreview />
      <div class="fileDescription" v-if="selectedFile">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <h1 style="margin: 0px 10px 0px 0px">{{ selectedFile.Name }}</h1>
          <a :href="selectedFile.Link" class="boxLink" target="_blank" rel="noopener noreferrer"
            >Open in Box <span class="material-symbols-outlined"> link </span>
          </a>
        </div>
        <div class="detailsRow">
          <TypeTag :type="selectedFile.Type"></TypeTag>
          <h3 style="margin: 0px 10px 0px 0px">{{ selectedFile.Client }}</h3>
        </div>
        <p class="fullDescription">{{ selectedFile.Description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import FileList from "@/components/FileList.vue";
import BoxPreview from "@/components/BoxPreview1.vue";
import store from "@/store";
import TypeTag from "@/components/table/TypeTag.vue";

export default {
  name: "StepView",
  props: ["cycleName"],
  components: {
    FileList,
    BoxPreview,
    TypeTag,
  },
  computed: {
    previewFileDescription() {
      try {
        return store.state.selectedFile.Description;
      } catch {
        return "";
      }
    },
    selectedFile() {
      return store.state.selectedFile;
    },
    theme() {
      return store.state.theme;
    },
    preview() {
      if (!store.state.preview) return "noPreview";
      else return "";
    },
  },
  methods: {
    showHidePreview: () => {
      store.commit("showPreview")
    },
  },
};
</script>

<style>
.previewContainer {
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 30px;
  width: 57.2%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: rgb(240, 240, 240);
  position: absolute;
  right: 0;
}

.pageView.noPreview .fileListContainer {
  width: 100%;
}

.fileListContainer {
  position: absolute;
  left: 0;
  width: 42.8%;
  transition: 0.5s;
  z-index: 3;
  height: 100%;
  box-shadow: 12px 0px 10px -10px rgba(0, 0, 0, 0.1);
}

.previewContainer.dark {
  background: rgb(29, 29, 29);
}

.pageView {
  height: 100%;
  width: 100%;
  position: relative;
}

.fileDescription {
  box-sizing: border-box;
  background: none;
  height: fit-content;
  width: 100%;
  padding: 20px;
  text-align: left;
  font-weight: 300;
  font-size: 1rem;
}

.fileDescription h3 {
  font-size: medium;
  color: rgb(150, 150, 150);
  font-weight: 400;
  overflow: hidden;
}

.previewContainer.light .fileDescription {
  background: rgba(44, 44, 44, 0);
}

.fileDescription .boxLink{
  min-width: 130px;
  padding: 0px 5px;
  justify-content: space-around;
}

.fileDescription .boxLink:hover{
  filter: brightness(1.1);
}

.detailsRow{
  margin-top: 10px;
  display: flex;
  align-items: center
}

.fullDescription{
  overflow: clip;
}
</style>
