# Kezdetek

## 📃 Mi az a VuePress?

[VuePress][Vuepress] egy Vue.js alapú statikus weboldal generátor, amelyet leggyakrabban dokumentációs oldalak készítésére használnak. Markdown fájlokból építkezik, és minden oldalhoz előre renderelt HTML-t generál, amit betöltés után egy Vue-alapú SPA (Single Page Application) egészít ki.

## 📋 Fő jellemzői
- Markdown-központú: A tartalmat egyszerű .md fájlokban írhatod, így a dokumentáció kezelése tiszta és átlátható.

- Vue-komponensek támogatása: Markdown fájlokban közvetlenül használhatsz Vue komponenseket, ami interaktív dokumentációt tesz lehetővé.

- Statikus HTML + SPA: Az oldal előre generált HTML-t kap, ami gyors betöltést biztosít, majd Vue SPA-ként működik tovább.

- Témák és bővítmények: Alapértelmezett téma jár hozzá, de készíthetsz sajátot vagy választhatsz közösségi témát. Plugin API-val bővíthető.

- Teljesítmény: Gyors, optimalizált build folyamat, ajánlott bundler a Vite, de Webpack is támogatott.

- Egyszerű telepítés: [Node.js][Nodejs] és npm/yarn/pnpm segítségével könnyen beállítható.

## ✋ Mire figyelj?
- Verziók: A VuePress 2 jelenleg RC (Release Candidate) állapotban van, így kisebb változások előfordulhatnak frissítéseknél.

- Peer dependency: Ha pnpm-et használsz, külön kell telepíteni a vue csomagot.

- Téma testreszabás: Ha saját kinézetet szeretnél, a .vuepress/theme mappában készíthetsz egyedi layoutokat.

[Vuepress]: [https://vuepress.vuejs.org/]
[Nodejs]: [https://nodejs.org/en]