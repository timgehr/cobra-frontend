<template>
  <div class="sideBar" :class="theme">
    <div class="logoContainer">
      <img
        src="../assets/opportune_logo_short.svg"
        class="opportuneLogoShort"
        :class="theme"
      />
      <img
        src="../assets/opportune_logo.svg"
        class="opportuneLogo"
        :class="theme"
      />
      <h3>Project Cobra</h3>
    </div>
    <router-link to="/scoping-and-planning">
      <SdlcTab name="Scoping & Planning" icon="manage_search" />
    </router-link>
    <router-link to="/solution-design">
      <SdlcTab name="Solution Design" icon="architecture" />
    </router-link>
    <router-link to="/configure-and-build">
      <SdlcTab
        name="Configure & Build"
        icon="build"
        link="/scoping-and-planning"
      />
    </router-link>
    <router-link to="/testing-and-validation">
      <SdlcTab name="Testing & Validation" icon="fact_check" />
    </router-link>
    <router-link to="/deploy">
      <SdlcTab name="Deploy" icon="rocket_launch" />
    </router-link>
    <router-link to="/search">
      <SdlcTab name="Search" icon="search" />
    </router-link>
    <div v-on:click="switchTheme" class="switchTheme">
        <span class="material-symbols-outlined" :class="theme"> {{theme}}_mode </span>
    </div>
  </div>
</template>

<script>
import SdlcTab from "./SdlcTab.vue";
import store from "@/store";

export default {
  components: { SdlcTab },
  computed: {
    theme() {
      return store.state.theme;
    },
  },
  methods: {
    switchTheme: () => {
      store.commit("switchTheme");
    },
  },
};
</script>

<style>
.sideBar {
  position: fixed;
  color: white;
  height: 100%;
  width: 250px;
  padding: 0.8rem 0px;
  user-select: none;
  background: rgb(44, 44, 44);
}

.sideBar a {
  color: white;
  text-decoration: none;
}

.logoContainer {
  position: relative;
  text-align: left;
  height: 65px;
}
.opportuneLogo {
  position: absolute;
  width: 164px;
  margin-left: 20px;
}
.opportuneLogoShort {
  position: absolute;
  width: 20px;
  margin-left: 20px;
}
.sideBar h3 {
  position: absolute;
  font-weight: 300;
  color: #b78c2d;
  top: 15px;
  left: 50px;
  margin-left: 20px;
}

.sideBar.light {
  background: rgb(255, 255, 255);
}
.sideBar.light a {
  color: #4e4e4e;
}
.material-symbols-outlined.light {
  filter: invert(0.7);
}
.sideBar.light .opportuneLogoShort {
  filter: invert(0.6);
}
.sideBar.light .opportuneLogo {
  filter: invert(0.6);
}

.switchTheme {
  position: absolute;
  bottom: 40px;
  box-sizing: border-box;
  margin-left: 20px;
  cursor: pointer;
  user-select: none;
}

.material-symbols-outlined.light{
  transition: 0.5s;
}
.material-symbols-outlined.dark{
  transition: 0.5s;
}

.sideBar .router-link-active{
  color:#b78c2d;
}
.sideBar.light .router-link-active{
  color:#b78c2d;
}

/* .opportuneLogo.light{
  filter: invert(84%);
}

.opportuneLogoShort.light{
  filter: invert(84%);
} */
</style>