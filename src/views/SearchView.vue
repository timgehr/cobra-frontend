<template>
  <div class="searchView">
    <div class="searchGroup">
      <div class="searchBarGroup">
        <div class="searchBar" :class="theme">
          <input
            type="text"
            placeholder="Search"
            class="searchInput"
            v-model="filters.searchText"
          />
        </div>
        <div class="filterButton" :class="theme" @click="filterOpen = !filterOpen">
          <span class="material-symbols-outlined"> filter_alt </span>
        </div>
      </div>
      <div class="filterGroup" :onOrOff="filterOpen ? 'open' : 'closed'">
        <div class="typeTagGroup">
          <TypeTag :class="filters.type.Template ? 'on' : 'off'"
            type="Template"
            @click="filters.type.Template = !filters.type.Template"
          ></TypeTag>
          <TypeTag :onOrOff="filters.type.Example ? 'on' : 'off'" class="penis"
            type="Example"
            @click="filters.type.Example = !filters.type.Example"
          ></TypeTag>
        </div>
      </div>
    </div>
    <SearchFileList
      :filters="filters"
    ></SearchFileList>
  </div>
</template>

<script>
import store from "@/store";
import SearchFileList from "@/components/SearchFileList.vue";
import TypeTag from "@/components/table/TypeTag.vue";

export default {
  name: "HomeView",
  components: { TypeTag, SearchFileList },
  data() {
    return {
      filterOpen: true,
      filters: {
        searchText: "",
        type: {
          Template: true,
          Example: true,
        },
        fileType: {
          Excel: true,
          Word: true,
          Powerpoint: true,
          Visio: true,
        },
      },
    };
  },
  computed: {
    theme() {
      return store.state.theme;
    },
  },
  methods: {
    delayRoute: () => {
      setTimeout(() => this.$router.push({ path: "/login" }), 1000);
    },
  },
};
</script>

<style>
.searchView {
  overflow: hidden;
  height: 100vh;
  position: relative;
}

.searchBarGroup {
  margin: 20px auto;
  display: flex;
  justify-content: center;
  height: fit-content;
}

.searchGroup{
  padding-bottom: 10px;
}

.filterButton {
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(240, 240, 240);
  color: rgb(116, 116, 116);
  margin-left: 20px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
}

.filterButton.dark{
  background: rgb(34, 34, 34);
}

.typeTagGroup {
  display: flex;
  flex-direction: row;
}

.typeTagGroup .typeTag {
  cursor: pointer;
  user-select: none;
}

.typeTagGroup .typeTag.off {
  background: rgb(116, 116, 116);
}

.filterGroup {
  display: flex;
  justify-content: center;
  margin: 0px 150px;
  align-items: center;
}

.filterGroup.open {
  height: 60px;
  background: rgb(240, 240, 240);
}

.filterGroup.closed {
  height: 0px;
}

.filterButton .material-symbols-outlined {
  height: 24px;
  width: 24px;
}

.searchBar {
  max-width: 800px;
  width: 50vw;
  background: rgb(34, 34, 34);
  padding: 10px 10px;
  border-radius: 6px;
  box-sizing: border-box;
}

.searchInput {
  color: rgb(240, 240, 240);
  outline: none;
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  font: 1em sans-serif;
  font-family: "Outfit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.searchBar.light {
  background: rgb(240, 240, 240);
  color: rgb(34, 34, 34);
}

.searchBar.light .searchInput {
  background: rgb(240, 240, 240);
  color: rgb(34, 34, 34);
}
</style>
