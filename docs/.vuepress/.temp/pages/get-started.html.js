import comp from "C:/Users/Martin/Documents/GitHub/vuepress-tutorial/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Kezdetek\",\"lang\":\"hu-HU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"📃 Mi az a VuePress?\",\"slug\":\"📃-mi-az-a-vuepress\",\"link\":\"#📃-mi-az-a-vuepress\",\"children\":[]},{\"level\":2,\"title\":\"📋 Fő jellemzői\",\"slug\":\"📋-fo-jellemzoi\",\"link\":\"#📋-fo-jellemzoi\",\"children\":[]},{\"level\":2,\"title\":\"✋ Mire figyelj?\",\"slug\":\"✋-mire-figyelj\",\"link\":\"#✋-mire-figyelj\",\"children\":[]}],\"git\":{\"updatedTime\":1765915177000,\"contributors\":[{\"name\":\"MartinkaV2\",\"username\":\"MartinkaV2\",\"email\":\"medveczmartin@gmail.com\",\"commits\":3,\"url\":\"https://github.com/MartinkaV2\"}],\"changelog\":[{\"hash\":\"f7ad080f7089b9375f3c891e1870b8d6885fb301\",\"time\":1765915177000,\"email\":\"medveczmartin@gmail.com\",\"author\":\"MartinkaV2\",\"message\":\"teszt\"},{\"hash\":\"7e8bc8e60d4a4a68a46628597ec94ca81d92bc41\",\"time\":1765914767000,\"email\":\"medveczmartin@gmail.com\",\"author\":\"MartinkaV2\",\"message\":\"tets\"},{\"hash\":\"e8af5c4c80f87e8c56bae5daaa5b74f852a06413\",\"time\":1765913998000,\"email\":\"medveczmartin@gmail.com\",\"author\":\"MartinkaV2\",\"message\":\"átdolgozva\"}]},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
