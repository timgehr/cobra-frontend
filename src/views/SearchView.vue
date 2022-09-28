<template>
  <div class="search">
    <div class="searchBar" :class="theme">
      <input
        type="text"
        placeholder="Search"
        class="searchInput"
      />
    </div>
      <FileList></FileList>
  </div>
</template>

<script>
import store from "@/store";
import FileList from "@/components/FileList.vue";

export default {
  name: "HomeView",
  components: { FileList },
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
.searchBar {
  margin: 20px auto;
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

.searchBar.light .searchInput{
  background: rgb(240, 240, 240);
  color: rgb(34, 34, 34);
}
</style>
