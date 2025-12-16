export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/Martin/Documents/GitHub/vuepress-tutorial/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Kezdetek"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Martin/Documents/GitHub/vuepress-tutorial/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/teszt.html", { loader: () => import(/* webpackChunkName: "teszt.html" */"C:/Users/Martin/Documents/GitHub/vuepress-tutorial/docs/.vuepress/.temp/pages/teszt.html.js"), meta: {"title":"Telepítés"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Martin/Documents/GitHub/vuepress-tutorial/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
