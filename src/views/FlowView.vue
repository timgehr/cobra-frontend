<template>
  <div class="flow pageView" :class="preview">
    <div class="flowViewContainer" :class="theme">
      <div class="dropdown" :class="{ theme, open: dropdownOpen }" @click="dropdownOpen = !dropdownOpen">
        {{ activeProject }}
        <div class="dropdownChevron">
          <span class="material-symbols-outlined">expand_more</span>
        </div>
        <div class="dropdownItems" :class="{ theme, open: dropdownOpen }">
          <div class="dropdownItem"
            v-for="item in [
              'Salesforce Implementation',
              'RightAngle Implementation',
              'Financial Thingy who cares',
            ]"
            :key="item"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <FlowContainer />
      <div class="flowSection">
        <FileList :cycleName="'Deploy'" />
        <div class="previewInfoContainer">
          <BoxPreviewFlow />
          <div class="fileDescription" v-if="selectedFile">
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: space-between;
              "
            >
              <h1 style="margin: 0px 10px 0px 0px">{{ selectedFile.Name }}</h1>
              <a
                :href="selectedFile.Link"
                class="boxLink"
                target="_blank"
                rel="noopener noreferrer"
                >Open in Box
                <span class="material-symbols-outlined"> link </span>
              </a>
            </div>
            <div class="detailsRow">
              <TypeTag :type="selectedFile.Type"></TypeTag>
              <h3 style="margin: 0px 10px 0px 0px">
                {{ selectedFile.Client }}
              </h3>
            </div>
            <p class="fullDescription">{{ selectedFile.Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
// import FlowFileList from "@/components/FlowFileList.vue";
import store from "@/store";
import FlowContainer from "@/components/flows/FlowContainer.vue";
import FileList from "@/components/FlowFileList.vue";
import BoxPreviewFlow from "@/components/BoxPreviewFlow.vue";

export default {
  name: "StepView",
  props: ["cycleName"],
  data() {
    return {
      dropdownOpen: true,
    };
  },
  components: {
    FlowContainer,
    FileList,
    BoxPreviewFlow,
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
    activeProject() {
      return store.state.activeProject;
    },
  },
  methods: {
    showHidePreview: () => {
      store.commit("showPreview");
    },
    setActiveProject: (projectName) => {
      store.commit("setActiveProject", projectName)
    }
  },
  mounted() {
    store.commit("showPreview", true);
  },
};
</script>
  
<style>
.previewInfoContainer {
  margin-left: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.flowViewContainer {
  display: flex;
  flex-direction: column;
  /* margin: 0px 0px 0px 30px; */
  width: 100%;
  height: 100%;
  /* padding: 30px; */
  box-sizing: border-box;
  position: relative;
  right: 0;
  padding: 30px 2vw;
  align-items: center;
}

.flowViewContainer.light {
  background: rgb(240, 240, 240);
}

.flowViewContainer.dark {
  background: rgb(29, 29, 29);
}

.flowSection {
  display: flex;
  position: relative;
  width: 100%;
  transition: 0.5s;
  height: 100%;
  box-sizing: border-box;
  box-shadow: none;
}

.flow.pageView {
  height: 100vh;
  overflow: hidden;
}

.dropdown {
  width: 500px;
  min-height: 40px;
  height: 40px;
  border-radius: 4px;
  outline: solid 1px rgb(23, 23, 23);
  background: rgb(44, 44, 44);
  color: rgb(156, 156, 156);
  margin-bottom: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
}

.dropdownChevron {
  position: absolute;
  right: 0;
  background: rgb(37, 37, 37);
  width: 40px;
  height: 40px;
  border-radius: 0px 4px 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown.light {
  background-color: white;
  outline: solid 1px rgb(230, 230, 230);
  color: rgb(0, 0, 0);
}

.dropdown.light .dropdownChevron {
  background-color: rgb(242, 242, 242);
  color: rgb(0, 0, 0);
}

.dropdownItems.open {
  display: block;
  position: absolute;
  width: inherit;
  top: 41px;
  height: fit-content;
  z-index: 10;
  background: rgb(37, 37, 37);
  outline: solid 1px rgb(23, 23, 23);
  border-radius: 0px 0px 4px 4px;
}

.dropdownItems {
  display: none;
}

.dropdownItem{
  height: 40px;
  display: flex;
  text-align: left;
  padding: 0px 10px;
  line-height: 40px;
}

.dropdownItem:hover{
  background: rgb(45, 45, 45);
}

.dropdown.open{
  border-radius: 4px 4px 0px 0px;
}

.dropdown.open .dropdownChevron{
  border-radius: 0px 4px 0px 0px;
}
</style>
  