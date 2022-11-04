<template>
  <div class="flowItem" :class="theme">
    <svg
      version="1.1"
      viewBox="0.0 0.0 356.03937007874015 108.30183727034121"
      fill="none"
      stroke="none"
      stroke-linecap="square"
      stroke-miterlimit="10"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      class="flowChevron"
    >
      <clipPath id="p.0">
        <path
          d="m0 0l356.03937 0l0 108.301834l-356.03937 0l0 -108.301834z"
          clip-rule="nonzero"
        />
      </clipPath>
      <g clip-path="url(#p.0)">
        <path
          fill="#000000"
          fill-opacity="0.0"
          d="m0 0l356.03937 0l0 108.301834l-356.03937 0z"
          fill-rule="evenodd"
        />
        <path
          fill="#2a4982"
          d="m0.24064593 0.30757508l326.56378 0l28.9953 53.842518l-28.9953 53.84252l-326.56378 0l28.995274 -53.84252z"
          fill-rule="evenodd"
        />
      </g>
    </svg>
    <div class="flowItemText">
      {{ flowItem }}
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: ["flowItem"],
  computed: {
    theme() {
      return store.state.theme;
    },
  },
};
</script>

<style>
.flowItem {
  width: 250px;
  height: 80px;
  position: relative;
  color: white;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flowItemText {
  position: absolute;
  width: 80%;
  font-size: calc(0.9vw + 4px);
  font-weight: 300;
  overflow: hidden;
}

.flowChevron {
  position: absolute;
  max-width: 100%;
  left: 0;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.6));
  transition: 0.2s;
}

.flowItem:hover .flowChevron {
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2)) brightness(1.2);
}
</style>