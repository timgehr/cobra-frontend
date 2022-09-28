import { createStore } from 'vuex'

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
      if (state.theme === "light")
        state.theme = "dark"
      else if (state.theme === "dark")
        state.theme = "light"
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
