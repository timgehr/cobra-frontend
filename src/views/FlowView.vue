<template>
    <div class="flow pageView" :class="preview">
      <div class="flow fileListContainer">
        <FlowFileList :cycleName="cycleName" />
      </div>
      <div class="flowContainer" :class="theme">
        File preview
      </div>
    </div>
  </template>
  
  <script>
  import FlowFileList from "@/components/FlowFileList.vue";
  import store from "@/store";
  
  export default {
    name: "StepView",
    props: ["cycleName"],
    components: {
      FlowFileList,
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
  .flowContainer {
    display: flex;
    flex-direction: column;
    margin: 0px 0px 0px 30px;
    width: 50%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    background: rgb(240, 240, 240);
    position: relative;
    right: 0;
  }
  
  .flow.fileListContainer {
    position: relative;
    width: 50%;
    transition: 0.5s;
    height: 100%;
    box-shadow: 12px 0px 10px -10px rgba(0, 0, 0, 0.1);
  }
  
  .previewContainer.dark {
    background: rgb(29, 29, 29);
  }
  
  .flow.pageView {
    height: 100vh;
    overflow: hidden;

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
  