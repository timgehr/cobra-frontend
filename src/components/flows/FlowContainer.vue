<template>
  <div class="flowContainer">
    <FlowItem
      :key="flowItem"
      v-for="flowItem in ['Scoping & Planning', 'Solution Design', 'Configuration', 'E2E Testing', 'Deploy']"
      :flowItem="flowItem"
    ></FlowItem>
  </div>
</template>

<script>
import FlowItem from "./FlowItem.vue";

export default {
  components: {
    FlowItem,
  },
};
</script>

<style>
.flowContainer{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  height: fit-content;
}
</style>