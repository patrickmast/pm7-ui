const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/router-lhod-BZg.js","assets/tab-selector-O38w-NWe.js","assets/accordion-Ccrk-NIU.js","assets/dialog-CPXP8QFI.js","assets/toast-BkVYtRCq.js","assets/tooltip-DRGUVAuE.js"])))=>i.map(i=>d[i]);
var M=Object.defineProperty;var k=(n,e,t)=>e in n?M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var f=(n,e,t)=>k(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const m=class m{constructor(e){if(m.instances.has(e))return console.warn("[PM7Menu] Element already has a menu instance, returning existing"),m.instances.get(e);if(this.element=e,this.trigger=e.querySelector(".pm7-menu-trigger"),this.content=e.querySelector(".pm7-menu-content"),this.items=e.querySelectorAll(".pm7-menu-item"),this.isOpen=!1,this.currentIndex=-1,!this.trigger||!this.content){console.warn("PM7Menu: Missing required elements");return}m.instances.set(e,this),e.PM7Menu=this,this.init()}init(){this.isInMenuBar=this.element.closest(".pm7-menu-bar")!==null,this.trigger.addEventListener("click",e=>{e.stopPropagation(),this.isInMenuBar&&this.isAnyMenuBarMenuOpen()&&!this.isOpen?this.open():this.toggle()}),this.isInMenuBar&&this.trigger.addEventListener("mouseenter",()=>{this.isAnyMenuBarMenuOpen()&&this.open()}),this.outsideClickHandler=e=>{if(!this.element.contains(e.target)&&this.isOpen){const t=e.target.closest(".pm7-submenu");(!t||!this.element.contains(t))&&this.close()}},document.addEventListener("click",this.outsideClickHandler),this.trigger.addEventListener("keydown",e=>this.handleTriggerKeyDown(e)),this.content.addEventListener("keydown",e=>this.handleMenuKeyDown(e)),this.items.forEach((e,t)=>{e.addEventListener("mousedown",i=>{!e.disabled&&!e.hasAttribute("disabled")&&!e.classList.contains("pm7-menu-item--has-submenu")&&(e.classList.add("pm7-menu-item--clicking"),this._clickingItem=!0)}),e.addEventListener("click",i=>{!e.disabled&&!e.hasAttribute("disabled")&&this.handleItemClick(i,e),this._clickingItem=!1}),e.setAttribute("tabindex","-1")}),this.escapeHandler=e=>{e.key==="Escape"&&this.isOpen&&(e.stopPropagation(),this.close(),this.trigger.focus())},this.repositionHandler=()=>{this.isOpen&&this.adjustPosition()},window.addEventListener("resize",this.repositionHandler),window.addEventListener("scroll",this.repositionHandler,!0)}toggle(){this.isOpen?this.close():this.open()}open(){m.instances.forEach((e,t)=>{e!==this&&e.isOpen&&e.close()}),this.isOpen=!0,this.content.classList.add("pm7-menu-content--open"),this.trigger.setAttribute("aria-expanded","true"),document.addEventListener("keydown",this.escapeHandler),this.adjustPosition(),requestAnimationFrame(()=>{this.currentIndex=0,this.focusItem(0)})}close(){this.isOpen=!1,this.content.classList.remove("pm7-menu-content--open"),this.trigger.setAttribute("aria-expanded","false"),this.currentIndex=-1,document.removeEventListener("keydown",this.escapeHandler),this.items.forEach(e=>{e.setAttribute("tabindex","-1"),e.classList.remove("pm7-menu-item--clicking")})}handleTriggerKeyDown(e){switch(e.key){case"Enter":case" ":case"ArrowDown":e.preventDefault(),this.open();break;case"ArrowUp":e.preventDefault(),this.open(),this.currentIndex=this.items.length-1,this.focusItem(this.currentIndex);break}}handleMenuKeyDown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.focusNext();break;case"ArrowUp":e.preventDefault(),this.focusPrevious();break;case"Home":e.preventDefault(),this.focusItem(0);break;case"End":e.preventDefault(),this.focusItem(this.items.length-1);break;case"Enter":case" ":e.preventDefault();const t=this.items[this.currentIndex];t&&!t.disabled&&t.click();break;case"Tab":this.close();break}}focusNext(){const e=this.currentIndex+1;e<this.items.length?this.focusItem(e):this.focusItem(0)}focusPrevious(){const e=this.currentIndex-1;e>=0?this.focusItem(e):this.focusItem(this.items.length-1)}focusItem(e){const t=this.items[e];t&&this.currentIndex!==e&&(this.currentIndex>=0&&this.items[this.currentIndex]&&this.items[this.currentIndex].setAttribute("tabindex","-1"),this.currentIndex=e,t.setAttribute("tabindex","0"),t.focus())}handleItemClick(e,t){if(t.classList.contains("pm7-menu-item--has-submenu")||(this.close(),this.trigger.focus()),t.classList.contains("pm7-menu-item--checkbox")){const o=t.getAttribute("data-checked")==="true";t.setAttribute("data-checked",!o)}if(t.classList.contains("pm7-menu-item--radio")&&(this.element.querySelectorAll(".pm7-menu-item--radio").forEach(s=>s.setAttribute("data-checked","false")),t.setAttribute("data-checked","true")),t.classList.contains("pm7-menu-item--has-submenu")){e.preventDefault(),e.stopPropagation();const o=t.getAttribute("data-submenu-open")==="true";t.setAttribute("data-submenu-open",!o);return}const i=new CustomEvent("pm7-menu-select",{detail:{item:t,menu:this},bubbles:!0});this.element.dispatchEvent(i)}adjustPosition(){const e=this.trigger.getBoundingClientRect(),t=this.content.getBoundingClientRect(),i=window.innerHeight,o=window.innerWidth,s=i-e.bottom,a=e.top;if(t.height>s&&a>s?this.content.classList.add("pm7-menu-content--top"):this.content.classList.remove("pm7-menu-content--top"),this.content.classList.contains("pm7-menu-content--end")&&e.right<t.width&&(this.content.classList.remove("pm7-menu-content--end"),this.content.classList.add("pm7-menu-content--start")),this.content.classList.contains("pm7-menu-content--center")){const r=e.left+e.width/2,l=t.width/2;r-l<0?(this.content.classList.remove("pm7-menu-content--center"),this.content.classList.add("pm7-menu-content--start")):r+l>o&&(this.content.classList.remove("pm7-menu-content--center"),this.content.classList.add("pm7-menu-content--end"))}}isAnyMenuBarMenuOpen(){if(!this.isInMenuBar)return!1;const e=this.element.closest(".pm7-menu-bar");if(!e)return!1;const t=e.querySelectorAll(".pm7-menu");for(const i of t)if(i!==this.element&&i.PM7Menu&&i.PM7Menu.isOpen)return!0;return!1}};f(m,"instances",new Map);let h=m;if(typeof document<"u"&&!window.__PM7_MENU_INIT__){window.__PM7_MENU_INIT__=!0;const n=()=>{console.log("[PM7Menu] Auto-init: Checking for menus...");const e=document.querySelectorAll("[data-pm7-menu]:not([data-pm7-menu-initialized])");console.log(`[PM7Menu] Auto-init: Found ${e.length} uninitialized menus`),e.forEach((t,i)=>{console.log(`[PM7Menu] Auto-init: Initializing menu ${i+1}/${e.length}`);try{new h(t),t.setAttribute("data-pm7-menu-initialized","true")}catch(o){console.error(`[PM7Menu] Auto-init: Error initializing menu ${i+1}:`,o)}}),console.log("[PM7Menu] Auto-init: Complete")};document.readyState==="loading"?(console.log("[PM7Menu] Auto-init: Document still loading, waiting for DOMContentLoaded"),document.addEventListener("DOMContentLoaded",n,{once:!0})):(console.log("[PM7Menu] Auto-init: Document ready, initializing now"),setTimeout(n,0))}else window.__PM7_MENU_INIT__&&console.log("[PM7Menu] Auto-init: Already initialized, skipping");const C="modulepreload",x=function(n){return"/"+n},v={},w=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),r=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=x(l),l in v)return;v[l]=!0;const d=l.endsWith(".css"),g=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${g}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":C,d||(c.as="script"),c.crossOrigin="",c.href=l,r&&c.setAttribute("nonce",r),document.head.appendChild(c),d)return new Promise((p,u)=>{c.addEventListener("load",p),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a}return o.then(a=>{for(const r of a||[])r.status==="rejected"&&s(r.reason);return e().catch(s)})};function L(){const n=`
  <nav class="pm7-docs-nav">
    <div class="pm7-docs-nav-inner">
      <!-- Mobile logo (only visible on mobile) -->
      <a href="/" class="pm7-docs-logo pm7-mobile-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" style="display: inline-block; vertical-align: middle; margin-right: 2px; fill: var(--pm7-primary);"><path d="M27 15a3 3 0 0 0-3-3h-5V3a3 3 0 1 0-6 0v9H8a3 3 0 0 0-3 3v6h2L6 32h20l-1-11h2zm-6 15v-6h-1v6h-6v-6h-1v6h-1v-8h-1v8H8.19l.909-10h13.802l.909 10zm4-11H7v-4c0-.551.449-1 1-1h7V3c0-.551.449-1 1-1s1 .449 1 1v11h7c.551 0 1 .449 1 1z"/></svg>
        pm7-ui
      </a>
      <!-- Left side: Menu button and Logo -->
      <div style="display: flex; align-items: center; gap: var(--pm7-spacing-4); margin-right: auto;">
        <!-- PM7 Menu Component -->
        <div class="pm7-menu pm7-docs-header-menu" data-pm7-menu>
          <button class="pm7-menu-trigger pm7-docs-menu-trigger" aria-label="Toggle menu" aria-expanded="false">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="18" height="2.5" rx="1.25" fill="currentColor"/>
              <rect y="6.25" width="18" height="2.5" rx="1.25" fill="currentColor"/>
              <rect y="12.5" width="18" height="2.5" rx="1.25" fill="currentColor"/>
            </svg>
          </button>
          <div class="pm7-menu-content pm7-menu-content--start">
            <a href="/" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </span>
              Home
            </a>
            <a href="/getting-started.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </span>
              Getting Started
            </a>
            <a href="/components.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </span>
              Components
            </a>
            <a href="/faq.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v.01M12 13c0-1 .5-1.5 1-2 1.5-1.5 2-2 2-3.5C15 5.5 13.5 4 11.5 4S8 5.5 8 7.5"/>
                </svg>
              </span>
              FAQ
            </a>
            <a href="/ai-guide.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="6" width="20" height="12" rx="2"/>
                  <path d="M9 10h6M8 14h1m2 0h2m2 0h1"/>
                </svg>
              </span>
              AI Guide
            </a>
            <a href="/upgrade.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 20V10M6 14l6-6 6 6"/>
                </svg>
              </span>
              Upgrade to v2
            </a>
            <div class="pm7-menu-separator"></div>
            <a href="#" class="pm7-menu-item" id="version-info-trigger">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 8h.01M11 12h1v4h1"/>
                </svg>
              </span>
              Version Info
            </a>
            <div class="pm7-menu-separator"></div>
            <a href="https://github.com/patrickmast/pm7-ui" class="pm7-menu-item" target="_blank" rel="noopener noreferrer">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </span>
              GitHub
            </a>
          </div>
        </div>

        <!-- Logo -->
        <a href="/" class="pm7-docs-logo pm7-desktop-logo" style="margin-left: var(--pm7-spacing-12);">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" style="display: inline-block; vertical-align: middle; margin-right: 2px; fill: var(--pm7-primary);"><path d="M27 15a3 3 0 0 0-3-3h-5V3a3 3 0 1 0-6 0v9H8a3 3 0 0 0-3 3v6h2L6 32h20l-1-11h2zm-6 15v-6h-1v6h-6v-6h-1v6h-1v-8h-1v8H8.19l.909-10h13.802l.909 10zm4-11H7v-4c0-.551.449-1 1-1h7V3c0-.551.449-1 1-1s1 .449 1 1v11h7c.551 0 1 .449 1 1z"/></svg>
          pm7-ui
        </a>
      </div>

      <!-- Right side: Navigation menu -->
      <ul class="pm7-docs-nav-menu">
        <li><a href="/" class="${window.location.pathname==="/"?"active":""}">Home</a></li>
        <li><a href="/getting-started.html" class="${window.location.pathname==="/getting-started.html"?"active":""}">Getting Started</a></li>
        <li><a href="/components.html" class="${window.location.pathname.startsWith("/components")?"active":""}">Components</a></li>
        <li><a href="https://github.com/patrickmast/pm7-ui" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>
  </nav>`,e=document.getElementById("header-placeholder");e&&(e.innerHTML=n)}function I(){const n=`
  <footer class="pm7-footer">
    <div class="pm7-footer-content">
      <div class="pm7-footer-left">
        <span>© 2025 pm7-ui</span>
        <span class="pm7-footer-version">v<span data-pm7-version>2.0.0</span></span>
      </div>
      <div class="pm7-footer-center">
        <a href="https://pm7.dev" target="_blank" rel="noopener noreferrer" class="pm7-footer-logo-link">
          <span style="font-weight: normal;">By</span>
          <img src="/dancing-patrick-logo.svg" alt="pm7.dev" class="pm7-footer-logo">
          <span>pm7.dev</span>
        </a>
        <span style="margin: 0 var(--pm7-spacing-3); color: var(--pm7-text-secondary);">-</span>
        <a href="https://github.com/patrickmast/pm7-ui" target="_blank" rel="noopener noreferrer" class="pm7-footer-github">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
      <div class="pm7-footer-right">
      </div>
    </div>
  </footer>`,e=document.getElementById("footer-placeholder");e&&(e.innerHTML=n)}function y(){const n=window.location.pathname,e=n.split("/");let t="";e[1]==="components"&&e[2]&&(t=e[2],t.endsWith(".html")&&(t=t.replace(".html","")));const r=`
    <div class="pm7-card pm7-card--ghost" style="height: 100%; border-radius: 0; background-color: transparent;">
      <div class="pm7-card-content" style="position: sticky; top: 64px; padding: var(--pm7-spacing-4);">
        <h3 class="pm7-card-title" style="font-size: var(--pm7-text-sm); text-transform: uppercase; letter-spacing: 0.1em; color: var(--pm7-text-secondary); margin-bottom: var(--pm7-spacing-4);">Components</h3>
        <nav style="display: flex; flex-direction: column; gap: var(--pm7-spacing-1);">
          ${[{name:"Accordion",componentName:"accordion"},{name:"Button",componentName:"button"},{name:"Card",componentName:"card"},{name:"Dialog",componentName:"dialog"},{name:"Icons",componentName:"icons"},{name:"Input",componentName:"input"},{name:"Menu",componentName:"menu"},{name:"Tab Selector",componentName:"tab-selector"},{name:"Toast",componentName:"toast"},{name:"Tooltip",componentName:"tooltip"}].map(d=>{const c=d.componentName===t?' style="justify-content: flex-start; background-color: var(--pm7-primary); color: var(--pm7-primary-foreground);"':' style="justify-content: flex-start;"',p=`/components/${d.componentName}/documentation`,u=` data-pm7-route="${d.componentName}"`;return`<a href="${p}" class="pm7-button pm7-button--ghost pm7-button--full"${c}${u}>${d.name}</a>`}).join(`
            `)}
        </nav>
        <div style="margin: var(--pm7-spacing-4) 0; border-bottom: 1px solid var(--pm7-border);"></div>
        <nav style="display: flex; flex-direction: column; gap: var(--pm7-spacing-1);">
          <a href="/faq.html" class="pm7-button pm7-button--ghost pm7-button--full"${n==="/faq.html"?' style="justify-content: flex-start; background-color: var(--pm7-primary); color: var(--pm7-primary-foreground);"':' style="justify-content: flex-start;"'} data-pm7-route="faq">FAQ</a>
        </nav>
      </div>
    </div>`,l=document.getElementById("sidebar-placeholder");l&&(l.innerHTML=r)}function A(){if(document.querySelector('[data-pm7-dialog="version-dialog"]'))return;let n="2.0.0";const e=document.querySelector("[data-pm7-version]");e&&e.textContent&&(n=e.textContent);const t=`
  <div class="pm7-dialog" 
       data-pm7-dialog="version-dialog"
       data-pm7-dialog-size="sm">
    <div data-pm7-header
         data-pm7-dialog-title="Version Info"
         data-pm7-dialog-subtitle="Version ${n}"
         data-pm7-dialog-icon="info"
         data-pm7-header-separator>
    </div>
    <div data-pm7-body>
      <p><strong>Package:</strong> pm7-ui</p>
      <p><strong>License:</strong> <a href="https://opensource.org/licenses/ISC" target="_blank" rel="noopener noreferrer" style="color: var(--pm7-primary);">https://opensource.org/licenses/ISC</a></p>
    </div>
    <div data-pm7-footer>
      <button class="pm7-button pm7-button--primary" onclick="closeDialog('version-dialog')">
        Close
      </button>
    </div>
  </div>`;document.body.insertAdjacentHTML("beforeend",t)}window.showVersionDialog=async function(){await window.loadDialogIfNeeded(),window.openDialog&&window.openDialog("version-dialog")};window.closeVersionDialog=function(){window.closeDialog&&window.closeDialog("version-dialog")};function P(){console.log("[Components] Starting loadSharedComponents...");try{console.log("[Components] Loading header..."),L(),console.log("[Components] Header loaded"),console.log("[Components] Loading footer..."),I(),console.log("[Components] Footer loaded"),console.log("[Components] Loading sidebar..."),y(),console.log("[Components] Sidebar loaded"),console.log("[Components] Creating version dialog..."),A(),console.log("[Components] Version dialog created")}catch(n){console.error("[Components] Error during initial load:",n)}setTimeout(async()=>{console.log("[Components] Starting async initialization...");try{console.log("[Components] Step 1: Initializing menu...");const n=document.querySelector("[data-pm7-menu]");n&&window.PM7Menu&&(n.hasAttribute("data-pm7-menu-initialized")?console.log("[Components] Menu already initialized by auto-init"):(new window.PM7Menu(n),n.setAttribute("data-pm7-menu-initialized","true"),console.log("[Components] Menu initialized manually"))),console.log("[Components] Step 2: Setting up lazy dialog loading..."),window.loadDialogIfNeeded=async()=>{if(!window.openDialog||!window.closeDialog){console.log("[Components] Loading dialog.js on demand...");const t=await w(()=>import("./dialog-CPXP8QFI.js"),[]);window.openDialog=t.openDialog,window.closeDialog=t.closeDialog,console.log("[Components] Dialog functions loaded")}},console.log("[Components] Step 3: Adding version info click handler...");const e=document.getElementById("version-info-trigger");e&&(e.addEventListener("click",async t=>{t.preventDefault(),t.stopPropagation();const i=document.querySelector("[data-pm7-menu]");i&&i.PM7Menu&&i.PM7Menu.close(),await window.loadDialogIfNeeded(),window.showVersionDialog()}),console.log("[Components] Version info click handler added")),console.log("[Components] All initialization complete!")}catch(n){console.error("[Components] Initialization error:",n)}},10),setTimeout(()=>{b()},50),console.log("[Components] loadSharedComponents finished")}window.loadSidebar=y;window.initializeComponentRouting=b;function b(){console.log("[Components] Initializing client-side routing..."),w(()=>import("./router-lhod-BZg.js"),__vite__mapDeps([0,1,2,3,4,5])).then(()=>{const n=document.querySelectorAll("[data-pm7-route]");n.forEach(e=>{const t=e.getAttribute("data-pm7-route");e.addEventListener("click",i=>{if(window.PM7Router){i.preventDefault(),i.stopPropagation();const o=localStorage.getItem("pm7-docs-last-tab")||"documentation";window.PM7Router.navigateToComponent(t,o)}})}),console.log("[Components] Client-side routing initialized for",n.length,"links")}).catch(n=>{console.error("[Components] Failed to load router:",n)})}export{h as P,w as _,I as a,y as b,P as c,L as l};
