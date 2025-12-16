// vuepress-tutorial/docs/.vuepress/config.js
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