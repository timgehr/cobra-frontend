<template>
  <div class="sidebar-tab">
    <span class="material-symbols-outlined"> {{ icon }} </span>
    <h2 class="sidebar-name">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
  },
};
</script>

<style>
.sidebar-tab {
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0px 10px;
  margin: 0px 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.1s;
}
.sidebar-tab:hover {
  background: rgb(71, 71, 71);
}
.sideBar.light .sidebar-tab:hover {
  background: rgb(240, 240, 240);
}
.sidebar-name {
  text-align: left;
  font-size: large;
  font-weight: 300;
  margin: 0px 0px 0px 20px;
}
</style>