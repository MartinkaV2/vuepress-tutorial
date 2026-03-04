# Telepítés

## Első lépések
Előszőr ellenőrizzük le, hogy fent van-e a Node.js és az npm. De ezek mik is?

## Node.js
[Node.js][Nodejs] egy nyílt forráskódú, platformfüggetlen JavaScript futtatókörnyezet, amely lehetővé teszi, hogy JavaScriptet ne csak böngészőben, hanem szerveroldalon is futtassunk.

## ⚙️ Mire használható?
- Webszerverek és API-k: Gyors REST API-k és dinamikus weboldalak készítésére.

- Valós idejű alkalmazások: Chat rendszerek, multiplayer játékok, élő adatfolyamok.

- CLI eszközök: Parancssori segédprogramok fejlesztése.

- IoT és hardvervezérlés: Szenzorok, robotok, okoseszközök vezérlése.

- Fájl- és adatbázis-kezelés: Könnyen integrálható SQL és NoSQL adatbázisokkal.

## 📦 NPM ökoszisztéma
- Node.js része az npm (Node Package Manager), ami a világ legnagyobb nyílt forráskódú könyvtár-ökoszisztémája.

- Több millió csomag érhető el, amelyekkel gyorsan bővíthető a projekt funkcionalitása.

## ✅ Telepítések
Node.js-t a weboldalon lehet telepíteni. Azonbelül LTS (Long Time Support)-t javaslom hosszútávú támogatás miatt. Gép újrainditás után ezzel a paranccsal lehet megtekinteni, ha sikerült
``` bash
   npm -v
```

## 💻 Parancsok, amik helyzetekben jól jöhetnek
| Parancs | Leírás |
|---------|---------|
| `npm install` | Függőségek telepítése |
| `npm run docs:dev` | Fejlesztői szerver indítása |
| `npm run docs:build` | Build készítése |
| `npm update` | Függőségek frissítése |
| `npm -v` | npm verzió ellenőrzése |
| `node -v` | Node.js verzió ellenőrzése |

Vue-t többféleképpen telepítheted:

- Globálisan (CLI)
``` bash
npm install -g @vue/cli
```

- Ezzel létrehozhatsz új projektet:
``` bash
vue create my-project
```

## ⬇️ VuePress telepítése
- CLI-s telepítése
``` bash
npm init vuepress my-project
```

- Project létrehozása után menjünk be ../my-project/docs/.vuepress/ könyvtárba. Ott lesz egy config.js fájl. Ez a weboldalnak a config-ja.
``` bash
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'hu-HU', // Magyar nyelv

  title: 'Martin féle VuePress Tutorial',
  description: 'Ez egy egyszerű VuePress tutorial oldal.',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    
    // Navbar beállítások
    navbar: [
      {
        text: 'Főoldal',
        link: '/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/MartinkaV2/vuepress-tutorial',
      },
            {
        text: 'Elérhetőség',
        link: 'https://discord.gg/ag4w4h28fv',
      },
    ],
    
    // Sidebar beállítások
    sidebar: [
      {
        text: 'Bevezetés',
        children: [
          {
            text: 'Első lépések',
            link: '/get-started.html',
          },
          {
            text: 'Telepítése',
            link: '/teszt.html',
          },
        ],
      },
      // További csoportokat ide lehet hozzáadni
      // {
      //   text: 'Speciális témák',
      //   children: [
      //     // ...
      //   ],
      // },
    ],
    
    
    
    // Toggle color mode gomb
    colorModeSwitch: true,
    
    // Back to top gomb
    backToTop: true,
  }),

  bundler: viteBundler(),
  
  // További globális beállítások
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  
  // Port beállítás (opcionális)
  port: 8080,
  
  // Dev szerver beállítások
  open: true, // Automatikusan megnyitja a böngészőt
})
```

## 🕮 Új oldal hozzáadása

1. Hozz létre új .md fájlt a docs mappában:
2. Írd meg a tartalmat (docs/uj-oldal.md):
``` bash
# Új Oldal Címe

Ez az új oldal tartalma.

## Részletes leírás
- Pont 1
- Pont 2
```
3. Adj hozzá a config.js sidebar-hoz:
``` bash
    sidebar: [
  // ... meglévő elemek
  {
    text: 'Új Oldal',
    link: '/uj-oldal.html',
  },
],
```

## ▶️ Build és elinditása

``` bash
# Fejlesztői szerver indítása
npm run docs:dev

# Build készítése
npm run docs:build

```

## 📁 VuePress mappa Struktúra
```
vuepress-tutorial/                     # 📦 Fő projekt mappa
│
├── .github/                          # ⚙️ GitHub konfigurációk
│   └── workflows/                    # 🔄 CI/CD workflow-ok
│
├── docs/                             # 📚 Dokumentációs forrásfájlok
│   │
│   ├── .vuepress/                    # 🛠️ VuePress konfigurációs mappa
│   │   │
│   │   ├── public/                   # 🖼️ Publikus erőforrások
│   │   │   ├── images/               # 🖼️ Képek
│   │   │   ├── favicon.ico           # 🎯 Oldal ikon
│   │   │   └── styles/               # 🎨 Egyéni CSS fájlok
│   │   │
│   │   ├── .cache/                   # 💾 VuePress cache (generált)
│   │   ├── .temp/                    # 🔥 VuePress temp (generált)
│   │   ├── dist/                     # 🚀 Buildelt oldalak (generált)
│   │   └── config.js                 # ⚙️ Fő konfigurációs fájl
│   │
│   ├── get-started.md                # 🏁 "Első lépések" oldal
│   ├── README.md                     # 🏠 Főoldal
│   ├── teszt.md                      # 🧪 Teszt oldal
│   └── advanced/                     # 🧠 Haladó témák (opcionális)
│
├── node_modules/                     # 📦 Node.js függőségek (generált)
│
├── .gitignore                        # 🚫 Git ignore fájl
├── package.json                      # 📋 NPM konfiguráció
├── package-lock.json                 # 🔒 NPM lock fájl
└── README.md                         # 📖 Projekt README
```

[Nodejs]: [https://nodejs.org/en]