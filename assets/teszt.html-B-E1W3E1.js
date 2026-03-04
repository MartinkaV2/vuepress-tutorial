import{_ as n,c as a,d as e,o as l}from"./app-CYL6YA17.js";const i={};function t(p,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="telepites" tabindex="-1"><a class="header-anchor" href="#telepites"><span>Telepítés</span></a></h1><h2 id="elso-lepesek" tabindex="-1"><a class="header-anchor" href="#elso-lepesek"><span>Első lépések</span></a></h2><p>Előszőr ellenőrizzük le, hogy fent van-e a Node.js és az npm. De ezek mik is?</p><h2 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js"><span>Node.js</span></a></h2><p><a href="%5Bhttps://nodejs.org/en%5D">Node.js</a> egy nyílt forráskódú, platformfüggetlen JavaScript futtatókörnyezet, amely lehetővé teszi, hogy JavaScriptet ne csak böngészőben, hanem szerveroldalon is futtassunk.</p><h2 id="⚙️-mire-hasznalhato" tabindex="-1"><a class="header-anchor" href="#⚙️-mire-hasznalhato"><span>⚙️ Mire használható?</span></a></h2><ul><li><p>Webszerverek és API-k: Gyors REST API-k és dinamikus weboldalak készítésére.</p></li><li><p>Valós idejű alkalmazások: Chat rendszerek, multiplayer játékok, élő adatfolyamok.</p></li><li><p>CLI eszközök: Parancssori segédprogramok fejlesztése.</p></li><li><p>IoT és hardvervezérlés: Szenzorok, robotok, okoseszközök vezérlése.</p></li><li><p>Fájl- és adatbázis-kezelés: Könnyen integrálható SQL és NoSQL adatbázisokkal.</p></li></ul><h2 id="📦-npm-okoszisztema" tabindex="-1"><a class="header-anchor" href="#📦-npm-okoszisztema"><span>📦 NPM ökoszisztéma</span></a></h2><ul><li><p>Node.js része az npm (Node Package Manager), ami a világ legnagyobb nyílt forráskódú könyvtár-ökoszisztémája.</p></li><li><p>Több millió csomag érhető el, amelyekkel gyorsan bővíthető a projekt funkcionalitása.</p></li></ul><h2 id="✅-telepitesek" tabindex="-1"><a class="header-anchor" href="#✅-telepitesek"><span>✅ Telepítések</span></a></h2><p>Node.js-t a weboldalon lehet telepíteni. Azonbelül LTS (Long Time Support)-t javaslom hosszútávú támogatás miatt. Gép újrainditás után ezzel a paranccsal lehet megtekinteni, ha sikerült</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">   <span class="token function">npm</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="💻-parancsok-amik-helyzetekben-jol-johetnek" tabindex="-1"><a class="header-anchor" href="#💻-parancsok-amik-helyzetekben-jol-johetnek"><span>💻 Parancsok, amik helyzetekben jól jöhetnek</span></a></h2><table><thead><tr><th>Parancs</th><th>Leírás</th></tr></thead><tbody><tr><td><code>npm install</code></td><td>Függőségek telepítése</td></tr><tr><td><code>npm run docs:dev</code></td><td>Fejlesztői szerver indítása</td></tr><tr><td><code>npm run docs:build</code></td><td>Build készítése</td></tr><tr><td><code>npm update</code></td><td>Függőségek frissítése</td></tr><tr><td><code>npm -v</code></td><td>npm verzió ellenőrzése</td></tr><tr><td><code>node -v</code></td><td>Node.js verzió ellenőrzése</td></tr></tbody></table><p>Vue-t többféleképpen telepítheted:</p><ul><li>Globálisan (CLI)</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Ezzel létrehozhatsz új projektet:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">vue create my-project</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="⬇️-vuepress-telepitese" tabindex="-1"><a class="header-anchor" href="#⬇️-vuepress-telepitese"><span>⬇️ VuePress telepítése</span></a></h2><ul><li>CLI-s telepítése</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">npm</span> init vuepress my-project</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Project létrehozása után menjünk be ../my-project/docs/.vuepress/ könyvtárba. Ott lesz egy config.js fájl. Ez a weboldalnak a config-ja.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> from <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token function">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> from <span class="token string">&#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">export</span> default defineUserConfig<span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  lang: <span class="token string">&#39;hu-HU&#39;</span>, // Magyar nyelv</span>
<span class="line"></span>
<span class="line">  title: <span class="token string">&#39;Martin féle VuePress Tutorial&#39;</span>,</span>
<span class="line">  description: <span class="token string">&#39;Ez egy egyszerű VuePress tutorial oldal.&#39;</span>,</span>
<span class="line"></span>
<span class="line">  theme: defaultTheme<span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    logo: <span class="token string">&#39;https://vuejs.press/images/hero.png&#39;</span>,</span>
<span class="line">    </span>
<span class="line">    // Navbar beállítások</span>
<span class="line">    navbar: <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text: <span class="token string">&#39;Főoldal&#39;</span>,</span>
<span class="line">        link: <span class="token string">&#39;/&#39;</span>,</span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text: <span class="token string">&#39;GitHub&#39;</span>,</span>
<span class="line">        link: <span class="token string">&#39;https://github.com/MartinkaV2/vuepress-tutorial&#39;</span>,</span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">            <span class="token punctuation">{</span></span>
<span class="line">        text: <span class="token string">&#39;Elérhetőség&#39;</span>,</span>
<span class="line">        link: <span class="token string">&#39;https://discord.gg/ag4w4h28fv&#39;</span>,</span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token punctuation">]</span>,</span>
<span class="line">    </span>
<span class="line">    // Sidebar beállítások</span>
<span class="line">    sidebar: <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text: <span class="token string">&#39;Bevezetés&#39;</span>,</span>
<span class="line">        children: <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text: <span class="token string">&#39;Első lépések&#39;</span>,</span>
<span class="line">            link: <span class="token string">&#39;/get-started.html&#39;</span>,</span>
<span class="line">          <span class="token punctuation">}</span>,</span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            text: <span class="token string">&#39;Telepítése&#39;</span>,</span>
<span class="line">            link: <span class="token string">&#39;/teszt.html&#39;</span>,</span>
<span class="line">          <span class="token punctuation">}</span>,</span>
<span class="line">        <span class="token punctuation">]</span>,</span>
<span class="line">      <span class="token punctuation">}</span>,</span>
<span class="line">      // További csoportokat ide lehet hozzáadni</span>
<span class="line">      // <span class="token punctuation">{</span></span>
<span class="line">      //   text: <span class="token string">&#39;Speciális témák&#39;</span>,</span>
<span class="line">      //   children: <span class="token punctuation">[</span></span>
<span class="line">      //     // <span class="token punctuation">..</span>.</span>
<span class="line">      //   <span class="token punctuation">]</span>,</span>
<span class="line">      // <span class="token punctuation">}</span>,</span>
<span class="line">    <span class="token punctuation">]</span>,</span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line">    </span>
<span class="line">    // Toggle color mode gomb</span>
<span class="line">    colorModeSwitch: true,</span>
<span class="line">    </span>
<span class="line">    // Back to <span class="token function">top</span> gomb</span>
<span class="line">    backToTop: true,</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span>,</span>
<span class="line"></span>
<span class="line">  bundler: viteBundler<span class="token punctuation">(</span><span class="token punctuation">)</span>,</span>
<span class="line">  </span>
<span class="line">  // További globális beállítások</span>
<span class="line">  head: <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span>, <span class="token punctuation">{</span> rel: <span class="token string">&#39;icon&#39;</span>, href: <span class="token string">&#39;/favicon.ico&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,</span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;theme-color&#39;</span>, content: <span class="token string">&#39;#3eaf7c&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,</span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;apple-mobile-web-app-capable&#39;</span>, content: <span class="token string">&#39;yes&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,</span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;apple-mobile-web-app-status-bar-style&#39;</span>, content: <span class="token string">&#39;black&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,</span>
<span class="line">  <span class="token punctuation">]</span>,</span>
<span class="line">  </span>
<span class="line">  // Port beállítás <span class="token punctuation">(</span>opcionális<span class="token punctuation">)</span></span>
<span class="line">  port: <span class="token number">8080</span>,</span>
<span class="line">  </span>
<span class="line">  // Dev szerver beállítások</span>
<span class="line">  open: true, // Automatikusan megnyitja a böngészőt</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🕮-uj-oldal-hozzaadasa" tabindex="-1"><a class="header-anchor" href="#🕮-uj-oldal-hozzaadasa"><span>🕮 Új oldal hozzáadása</span></a></h2><ol><li>Hozz létre új .md fájlt a docs mappában:</li><li>Írd meg a tartalmat (docs/uj-oldal.md):</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># Új Oldal Címe</span></span>
<span class="line"></span>
<span class="line">Ez az új oldal tartalma.</span>
<span class="line"></span>
<span class="line"><span class="token comment">## Részletes leírás</span></span>
<span class="line">- Pont <span class="token number">1</span></span>
<span class="line">- Pont <span class="token number">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Adj hozzá a config.js sidebar-hoz:</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">    sidebar: <span class="token punctuation">[</span></span>
<span class="line">  // <span class="token punctuation">..</span>. meglévő elemek</span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    text: <span class="token string">&#39;Új Oldal&#39;</span>,</span>
<span class="line">    link: <span class="token string">&#39;/uj-oldal.html&#39;</span>,</span>
<span class="line">  <span class="token punctuation">}</span>,</span>
<span class="line"><span class="token punctuation">]</span>,</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="▶️-build-es-elinditasa" tabindex="-1"><a class="header-anchor" href="#▶️-build-es-elinditasa"><span>▶️ Build és elinditása</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># Fejlesztői szerver indítása</span></span>
<span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Build készítése</span></span>
<span class="line"><span class="token function">npm</span> run docs:build</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📁-vuepress-mappa-struktura" tabindex="-1"><a class="header-anchor" href="#📁-vuepress-mappa-struktura"><span>📁 VuePress mappa Struktúra</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">vuepress-tutorial/                     # 📦 Fő projekt mappa</span>
<span class="line">│</span>
<span class="line">├── .github/                          # ⚙️ GitHub konfigurációk</span>
<span class="line">│   └── workflows/                    # 🔄 CI/CD workflow-ok</span>
<span class="line">│</span>
<span class="line">├── docs/                             # 📚 Dokumentációs forrásfájlok</span>
<span class="line">│   │</span>
<span class="line">│   ├── .vuepress/                    # 🛠️ VuePress konfigurációs mappa</span>
<span class="line">│   │   │</span>
<span class="line">│   │   ├── public/                   # 🖼️ Publikus erőforrások</span>
<span class="line">│   │   │   ├── images/               # 🖼️ Képek</span>
<span class="line">│   │   │   ├── favicon.ico           # 🎯 Oldal ikon</span>
<span class="line">│   │   │   └── styles/               # 🎨 Egyéni CSS fájlok</span>
<span class="line">│   │   │</span>
<span class="line">│   │   ├── .cache/                   # 💾 VuePress cache (generált)</span>
<span class="line">│   │   ├── .temp/                    # 🔥 VuePress temp (generált)</span>
<span class="line">│   │   ├── dist/                     # 🚀 Buildelt oldalak (generált)</span>
<span class="line">│   │   └── config.js                 # ⚙️ Fő konfigurációs fájl</span>
<span class="line">│   │</span>
<span class="line">│   ├── get-started.md                # 🏁 &quot;Első lépések&quot; oldal</span>
<span class="line">│   ├── README.md                     # 🏠 Főoldal</span>
<span class="line">│   ├── teszt.md                      # 🧪 Teszt oldal</span>
<span class="line">│   └── advanced/                     # 🧠 Haladó témák (opcionális)</span>
<span class="line">│</span>
<span class="line">├── node_modules/                     # 📦 Node.js függőségek (generált)</span>
<span class="line">│</span>
<span class="line">├── .gitignore                        # 🚫 Git ignore fájl</span>
<span class="line">├── package.json                      # 📋 NPM konfiguráció</span>
<span class="line">├── package-lock.json                 # 🔒 NPM lock fájl</span>
<span class="line">└── README.md                         # 📖 Projekt README</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33)])])}const d=n(i,[["render",t]]),r=JSON.parse('{"path":"/teszt.html","title":"Telepítés","lang":"hu-HU","frontmatter":{},"headers":[{"level":2,"title":"Első lépések","slug":"elso-lepesek","link":"#elso-lepesek","children":[]},{"level":2,"title":"Node.js","slug":"node-js","link":"#node-js","children":[]},{"level":2,"title":"⚙️ Mire használható?","slug":"⚙️-mire-hasznalhato","link":"#⚙️-mire-hasznalhato","children":[]},{"level":2,"title":"📦 NPM ökoszisztéma","slug":"📦-npm-okoszisztema","link":"#📦-npm-okoszisztema","children":[]},{"level":2,"title":"✅ Telepítések","slug":"✅-telepitesek","link":"#✅-telepitesek","children":[]},{"level":2,"title":"💻 Parancsok, amik helyzetekben jól jöhetnek","slug":"💻-parancsok-amik-helyzetekben-jol-johetnek","link":"#💻-parancsok-amik-helyzetekben-jol-johetnek","children":[]},{"level":2,"title":"⬇️ VuePress telepítése","slug":"⬇️-vuepress-telepitese","link":"#⬇️-vuepress-telepitese","children":[]},{"level":2,"title":"🕮 Új oldal hozzáadása","slug":"🕮-uj-oldal-hozzaadasa","link":"#🕮-uj-oldal-hozzaadasa","children":[]},{"level":2,"title":"▶️ Build és elinditása","slug":"▶️-build-es-elinditasa","link":"#▶️-build-es-elinditasa","children":[]},{"level":2,"title":"📁 VuePress mappa Struktúra","slug":"📁-vuepress-mappa-struktura","link":"#📁-vuepress-mappa-struktura","children":[]}],"git":{"updatedTime":1772612417000,"contributors":[{"name":"MartinkaV2","username":"MartinkaV2","email":"medveczmartin@gmail.com","commits":4,"url":"https://github.com/MartinkaV2"}],"changelog":[{"hash":"a8aca117930fe88b0b572b0547d58aa49332faaa","time":1772612417000,"email":"medveczmartin@gmail.com","author":"MartinkaV2","message":"ads"},{"hash":"f7ad080f7089b9375f3c891e1870b8d6885fb301","time":1765915177000,"email":"medveczmartin@gmail.com","author":"MartinkaV2","message":"teszt"},{"hash":"7e8bc8e60d4a4a68a46628597ec94ca81d92bc41","time":1765914767000,"email":"medveczmartin@gmail.com","author":"MartinkaV2","message":"tets"},{"hash":"e8af5c4c80f87e8c56bae5daaa5b74f852a06413","time":1765913998000,"email":"medveczmartin@gmail.com","author":"MartinkaV2","message":"átdolgozva"}]},"filePathRelative":"teszt.md"}');export{d as comp,r as data};
