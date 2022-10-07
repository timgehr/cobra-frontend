import { createStore } from 'vuex'
import VueCookies from 'vue-cookies'

export default createStore({
  state: {
    filesData: null,
    selectedFile: null,
    theme: "light",
    preview: false,
  },
  getters: {
  },
  mutations: {
    setJson(state, data) {
      state.filesData = data;
    },
    setSelectedFile(state, file) {
      state.selectedFile = file;
    },
    switchTheme(state){
      if (state.theme === "light"){
        state.theme = "dark"
        VueCookies.$cookies.set("theme", "dark", "1y")
      }
      else if (state.theme === "dark"){
        state.theme = "light"
        VueCookies.$cookies.set("theme", "light", "1y")
      }
    },
    initTheme(state, theme){
      state.theme = theme
    },
    showPreview(state, wantedState){
      if (wantedState !== undefined){
        state.preview = wantedState
      } else {
        state.preview = !state.preview
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
