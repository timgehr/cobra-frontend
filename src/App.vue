<template>
  <div class="page-container">
    <SideBar />
    <div class="routerView" :class="theme">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/sidebar/SideBar.vue";
import fileCollection from "raw-loader!./assets/db.csv";
import store from "./store";

export default {
  name: "App",
  components: {
    SideBar,
  },
  created() {
    //var theme = this.$cookies.get("theme")
    //store.commit(theme  ? theme : "light")
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  mounted() {
    var lines = fileCollection.split("\n");
    var result = [];
    var headers = lines[0].split(";");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(";");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    store.commit("setJson", result);
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Outfit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #181818;
  min-height: 100vh;
}

h2 {
  font-weight: 400;
}

nav {
  padding: 30px;
}

.page-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100%;
}

.routerView {
  box-sizing: border-box;
  margin-left: 250px;
  background: rgb(44, 44, 44);
  color: white;
  width: calc(100vw - 250px);
  padding: 0px;
  height: 100vh;
}

.routerView.light {
  background: white;
  color: #181818;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
}

@media screen and (max-width: 927px) {
  .sidebar-name {
    display: none;
  }
  .sideBar {
    width: 64px;
  }
  .opportuneLogo {
    display: none;
  }
  .sideBar h3{
    display: none;
  }
  .routerView {
    margin-left: 64px;
  width: calc(100vw - 64px);
  }
}
</style>