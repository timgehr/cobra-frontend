<template>
  <div :class="['typeTag', type, theme]">
    <h4>{{ type }}</h4>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: ["type"],
  computed: {
    theme() {
      return store.state.theme;
    },
  },
};
</script>

<style>
.typeTag {
  height: 14px;
  text-align: center;
  animation: reduce-to-bubble 1s none 1.5s;
  animation-fill-mode: backwards;
  overflow: hidden;
  transition: 0.2s;
  /* width: 14px;
  border-radius: 14px;
  color: transparent;
  margin-left: 0px; */
  margin-right: 13px;
  min-width: 52px;
  color: black;
  border-radius: 3px;
}
.typeTag.light {
  color: white;
  font-weight: 100;
  box-shadow: none;
}

/* .fileListItem:hover .typeTag {
  width: 52px;
  color: black;
  border-radius: 3px;
  margin-left: -17px;
  margin-right: -17px;
} */

.typeTag.Example {
  background: rgb(224, 205, 26);
}

.fileList.light .typeTag.Example {
  background: rgb(201, 169, 26);
}

.typeTag.Template {
  background: rgb(17, 143, 216);
}

.typeTag h4 {
  font-size: 10px;
  margin: 0px;
  font-weight: 400;
}

/* @keyframes reduce-to-bubble {
  from {
    margin-left: -17px;
    margin-right: -17px;
    width: 52px;
    color: black;
    border-radius: 3px;
  }
} */
</style>