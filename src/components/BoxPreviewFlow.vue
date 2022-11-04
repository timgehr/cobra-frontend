<template>
  <div class="preview-container" :class="theme">
    <div class="boxPreview" :class="{ noPreview: fileSrc === '' }"></div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  watch: {
    fileSrc(newValue) {
      if (store.state.selectedFile !== null) {
        // eslint-disable-line
        var preview = new Box.Preview(); // eslint-disable-line
        preview.show(newValue, "oumR6QOEYbmBtswl9ShapbFTFNQ1bauY", {
          // eslint-disable-line
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

<style scoped>
.preview-container {
  padding: 0px;
  height: 100%;
}

.boxPreview {
  max-height: 100%;
  height: 100%;
  box-shadow: 0px 0px 8px 0px #00000029;
}
</style>