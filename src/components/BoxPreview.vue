<template>
  <div class="preview-container" :class="theme">
    <div class="previewNameContainer">
      <h4>{{ fileSdlcStage }}</h4>><h4 class="previewFileName"> {{ fileName }}</h4>
    </div>
    <iframe
      class="preview"
      :src="fileSrc"
      frameborder="0"
      allowfullscreen
      webkitallowfullscreen
      msallowfullscreen
    ></iframe>
  </div>
</template>

<script>
import store from "@/store";
export default {
  computed: {
    fileSrc() {
      if (store.state.selectedFile !== null) {
        let originalSrc = store.state.selectedFile.Link.split(".com/");
        return originalSrc[0].concat(".com/embed/" + originalSrc[1]);
      } else {
        return "";
      }
    },
    fileName() {
      if (store.state.selectedFile !== null) {
        return store.state.selectedFile.Name;
      } else {
        return "File Preview";
      }
    },
    fileSdlcStage() {
      if (store.state.selectedFile !== null) {
        return store.state.selectedFile.Stage;
      } else {
        return "";
      }
    },
    theme() {
      return this.$store.state.theme;
    },
  },
};
</script>

<style>
.preview-container {
  background: rgb(44, 44, 44);
  height: 100%;
  width: 100%;
  padding: 20px 5px;
  box-sizing: border-box;
}
.preview-container h4 {
  font-weight: 400;
  margin-top: 0px;
}
.preview {
  height: 700px;
  width: 100%;
}

.preview-container.light {
  background: rgba(44, 44, 44, 0);
}

.previewNameContainer{
  display: flex;
  justify-content: center;
  color: rgb(112, 112, 112);
  margin-bottom: 20px;
}

.preview-container.light .previewNameContainer{
  color: rgb(185, 185, 185);
}

.previewNameContainer h4{
  margin: 0px 10px;
}

.previewFileName{
  color: white;
}
.preview-container.light .previewFileName{
  color: black;
}
</style>