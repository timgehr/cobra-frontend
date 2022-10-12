<template>
  <div class="preview-container" :class="theme">
    <div class="boxPreview" :class="{noPreview: (fileSrc === '')}"></div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  watch: {
    fileSrc(newValue) {
      if (store.state.selectedFile !== null) { // eslint-disable-line
        var preview = new Box.Preview(); // eslint-disable-line
        preview.show(newValue, "oumR6QOEYbmBtswl9ShapbFTFNQ1bauY", { // eslint-disable-line
          container: ".boxPreview", // eslint-disable-line
          showDownload: true, // eslint-disable-line
        }); // eslint-disable-line
      }
    },
  },
  computed: {
    fileSrc() {
      if (store.state.selectedFile !== null) {
        let originalSrc = store.state.selectedFile.Link.split("file/");
        return originalSrc[1];
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
  background: rgb(29, 29, 29);
  height: 100%;
  width: 100%;
  padding: 30px 30px;
  box-sizing: border-box;
}
.preview-container h4 {
  font-weight: 400;
  margin-top: 0px;
}

.preview-container.light {
  background: rgba(44, 44, 44, 0);
}

.previewNameContainer {
  display: flex;
  justify-content: center;
  color: rgb(112, 112, 112);
  margin-bottom: 20px;
}

.preview-container.light .previewNameContainer {
  color: rgb(185, 185, 185);
}

.previewNameContainer h4 {
  margin: 0px 10px;
}

.previewFileName {
  color: white;
}
.preview-container.light .previewFileName {
  color: black;
}

.boxPreview {
  max-height: 100%;
  height: 100%;
  box-shadow: 0px 0px 8px 0px #00000029;
}

.boxPreview.noPreview{
  box-shadow: none;
}
</style>