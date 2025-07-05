const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/router-D-CXsgIh.js","assets/tab-selector-O38w-NWe.js","assets/accordion-Di2U4wCw.js","assets/dialog-CPXP8QFI.js","assets/toast-BkVYtRCq.js","assets/tooltip-DRGUVAuE.js"])))=>i.map(i=>d[i]);
var k=Object.defineProperty;var x=(n,e,t)=>e in n?k(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var f=(n,e,t)=>x(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const d=class d{constructor(e){if(d.instances.has(e))return d.instances.get(e);this.element=e,this.trigger=e.querySelector(".pm7-menu-trigger"),this.content=e.querySelector(".pm7-menu-content"),this.items=e.querySelectorAll(".pm7-menu-item"),this.isOpen=!1,this.currentIndex=-1,!(!this.trigger||!this.content)&&(d.instances.set(e,this),e.PM7Menu=this,this.init())}init(){this.isInMenuBar=this.element.closest(".pm7-menu-bar")!==null,this.trigger.addEventListener("click",e=>{e.stopPropagation(),this.isInMenuBar&&this.isAnyMenuBarMenuOpen()&&!this.isOpen?this.open():this.toggle()}),this.isInMenuBar&&this.trigger.addEventListener("mouseenter",()=>{this.isAnyMenuBarMenuOpen()&&this.open()}),this.outsideClickHandler=e=>{if(!this.element.contains(e.target)&&this.isOpen){const t=e.target.closest(".pm7-submenu");(!t||!this.element.contains(t))&&this.close()}},document.addEventListener("click",this.outsideClickHandler),this.trigger.addEventListener("keydown",e=>this.handleTriggerKeyDown(e)),this.content.addEventListener("keydown",e=>this.handleMenuKeyDown(e)),this.items.forEach((e,t)=>{e.addEventListener("mousedown",s=>{!e.disabled&&!e.hasAttribute("disabled")&&!e.classList.contains("pm7-menu-item--has-submenu")&&(e.classList.add("pm7-menu-item--clicking"),this._clickingItem=!0)}),e.addEventListener("click",s=>{!e.disabled&&!e.hasAttribute("disabled")&&this.handleItemClick(s,e),this._clickingItem=!1}),e.setAttribute("tabindex","-1")}),this.escapeHandler=e=>{e.key==="Escape"&&this.isOpen&&(e.stopPropagation(),this.close(),this.trigger.focus())},this.repositionHandler=()=>{this.isOpen&&this.adjustPosition()},window.addEventListener("resize",this.repositionHandler),window.addEventListener("scroll",this.repositionHandler,!0)}toggle(){this.isOpen?this.close():this.open()}open(){d.instances.forEach((e,t)=>{e!==this&&e.isOpen&&e.close()}),this.isOpen=!0,this.content.classList.add("pm7-menu-content--open"),this.trigger.setAttribute("aria-expanded","true"),document.addEventListener("keydown",this.escapeHandler),this.adjustPosition(),requestAnimationFrame(()=>{this.currentIndex=0,this.focusItem(0)})}close(){this.isOpen=!1,this.content.classList.remove("pm7-menu-content--open"),this.trigger.setAttribute("aria-expanded","false"),this.currentIndex=-1,document.removeEventListener("keydown",this.escapeHandler),this.items.forEach(e=>{e.setAttribute("tabindex","-1"),e.classList.remove("pm7-menu-item--clicking")})}handleTriggerKeyDown(e){switch(e.key){case"Enter":case" ":case"ArrowDown":e.preventDefault(),this.open();break;case"ArrowUp":e.preventDefault(),this.open(),this.currentIndex=this.items.length-1,this.focusItem(this.currentIndex);break}}handleMenuKeyDown(e){switch(e.key){case"ArrowDown":e.preventDefault(),this.focusNext();break;case"ArrowUp":e.preventDefault(),this.focusPrevious();break;case"Home":e.preventDefault(),this.focusItem(0);break;case"End":e.preventDefault(),this.focusItem(this.items.length-1);break;case"Enter":case" ":e.preventDefault();const t=this.items[this.currentIndex];t&&!t.disabled&&t.click();break;case"Tab":this.close();break}}focusNext(){const e=this.currentIndex+1;e<this.items.length?this.focusItem(e):this.focusItem(0)}focusPrevious(){const e=this.currentIndex-1;e>=0?this.focusItem(e):this.focusItem(this.items.length-1)}focusItem(e){const t=this.items[e];t&&this.currentIndex!==e&&(this.currentIndex>=0&&this.items[this.currentIndex]&&this.items[this.currentIndex].setAttribute("tabindex","-1"),this.currentIndex=e,t.setAttribute("tabindex","0"),t.focus())}handleItemClick(e,t){if(t.classList.contains("pm7-menu-item--has-submenu")||(this.close(),this.trigger.focus()),t.classList.contains("pm7-menu-item--checkbox")){const i=t.getAttribute("data-checked")==="true";t.setAttribute("data-checked",!i)}if(t.classList.contains("pm7-menu-item--radio")&&(this.element.querySelectorAll(".pm7-menu-item--radio").forEach(o=>o.setAttribute("data-checked","false")),t.setAttribute("data-checked","true")),t.classList.contains("pm7-menu-item--has-submenu")){e.preventDefault(),e.stopPropagation();const i=t.getAttribute("data-submenu-open")==="true";t.setAttribute("data-submenu-open",!i);return}const s=new CustomEvent("pm7-menu-select",{detail:{item:t,menu:this},bubbles:!0});this.element.dispatchEvent(s)}adjustPosition(){const e=this.trigger.getBoundingClientRect(),t=this.content.getBoundingClientRect(),s=window.innerHeight,i=window.innerWidth,o=s-e.bottom,r=e.top;if(t.height>o&&r>o?this.content.classList.add("pm7-menu-content--top"):this.content.classList.remove("pm7-menu-content--top"),this.content.classList.contains("pm7-menu-content--end")&&e.right<t.width&&(this.content.classList.remove("pm7-menu-content--end"),this.content.classList.add("pm7-menu-content--start")),this.content.classList.contains("pm7-menu-content--center")){const a=e.left+e.width/2,c=t.width/2;a-c<0?(this.content.classList.remove("pm7-menu-content--center"),this.content.classList.add("pm7-menu-content--start")):a+c>i&&(this.content.classList.remove("pm7-menu-content--center"),this.content.classList.add("pm7-menu-content--end"))}}isAnyMenuBarMenuOpen(){if(!this.isInMenuBar)return!1;const e=this.element.closest(".pm7-menu-bar");if(!e)return!1;const t=e.querySelectorAll(".pm7-menu");for(const s of t)if(s!==this.element&&s.PM7Menu&&s.PM7Menu.isOpen)return!0;return!1}};f(d,"instances",new Map);let u=d;if(typeof document<"u"&&!window.__PM7_MENU_INIT__){window.__PM7_MENU_INIT__=!0;const n=()=>{document.querySelectorAll("[data-pm7-menu]:not([data-pm7-menu-initialized])").forEach((t,s)=>{try{new u(t),t.setAttribute("data-pm7-menu-initialized","true")}catch{}})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n,{once:!0}):setTimeout(n,0)}const L="modulepreload",M=function(n){return"/"+n},v={},w=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=M(c),c in v)return;v[c]=!0;const m=c.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${g}`))return;const l=document.createElement("link");if(l.rel=m?"stylesheet":L,m||(l.as="script"),l.crossOrigin="",l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),m)return new Promise((p,h)=>{l.addEventListener("load",p),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return i.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return e().catch(o)})};function I(){const n=`
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
            <a href="/readme-links.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </span>
              README Links
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
  </nav>`,e=document.getElementById("header-placeholder");e&&(e.innerHTML=n)}function E(){const n=`
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
  </footer>`,e=document.getElementById("footer-placeholder");e&&(e.innerHTML=n)}function y(){const n=window.location.pathname,e=n.split("/");let t="";e[1]==="components"&&e[2]&&(t=e[2],t.endsWith(".html")&&(t=t.replace(".html","")));const a=`
    <div class="pm7-card pm7-card--ghost" style="height: 100%; border-radius: 0; background-color: transparent;">
      <div class="pm7-card-content" style="position: sticky; top: 64px; padding: var(--pm7-spacing-4);">
        <h3 class="pm7-card-title" style="font-size: var(--pm7-text-sm); text-transform: uppercase; letter-spacing: 0.1em; color: var(--pm7-text-secondary); margin-bottom: var(--pm7-spacing-4);">Components</h3>
        <nav style="display: flex; flex-direction: column; gap: var(--pm7-spacing-1);">
          ${[{name:"Accordion",componentName:"accordion"},{name:"Button",componentName:"button"},{name:"Card",componentName:"card"},{name:"Dialog",componentName:"dialog"},{name:"Icons",componentName:"icons"},{name:"Input",componentName:"input"},{name:"Menu",componentName:"menu"},{name:"Tab Selector",componentName:"tab-selector"},{name:"Toast",componentName:"toast"},{name:"Tooltip",componentName:"tooltip"}].map(m=>{const l=m.componentName===t?' style="justify-content: flex-start; background-color: var(--pm7-primary); color: var(--pm7-primary-foreground);"':' style="justify-content: flex-start;"',p=`/components/${m.componentName}/documentation`,h=` data-pm7-route="${m.componentName}"`;return`<a href="${p}" class="pm7-button pm7-button--ghost pm7-button--full"${l}${h}>${m.name}</a>`}).join(`
            `)}
        </nav>
        <div style="margin: var(--pm7-spacing-4) 0; border-bottom: 1px solid var(--pm7-border);"></div>
        <nav style="display: flex; flex-direction: column; gap: var(--pm7-spacing-1);">
          <a href="/faq.html" class="pm7-button pm7-button--ghost pm7-button--full"${n==="/faq.html"?' style="justify-content: flex-start; background-color: var(--pm7-primary); color: var(--pm7-primary-foreground);"':' style="justify-content: flex-start;"'} data-pm7-route="faq">FAQ</a>
        </nav>
      </div>
    </div>`,c=document.getElementById("sidebar-placeholder");c&&(c.innerHTML=a)}function A(){if(document.querySelector('[data-pm7-dialog="version-dialog"]'))return;document.body.insertAdjacentHTML("beforeend",`
  <div class="pm7-dialog" 
       data-pm7-dialog="version-dialog"
       data-pm7-dialog-size="sm">
    <div data-pm7-header
         data-pm7-dialog-title="Version Info"
         data-pm7-dialog-subtitle="pm7-ui Component Library"
         data-pm7-dialog-icon="info"
         data-pm7-header-separator>
    </div>
    <div data-pm7-body>
      <p><strong>Version:</strong> <span data-pm7-version>2.0.0</span></p>
      <p><strong>Package:</strong> pm7-ui</p>
      <p><strong>License:</strong> <a href="https://opensource.org/licenses/ISC" target="_blank" rel="noopener noreferrer" style="color: var(--pm7-primary);">https://opensource.org/licenses/ISC</a></p>
    </div>
    <div data-pm7-footer>
      <button class="pm7-button pm7-button--primary" onclick="closeDialog('version-dialog')">
        Close
      </button>
    </div>
  </div>`)}window.showVersionDialog=async function(){await window.loadDialogIfNeeded(),window.openDialog&&window.openDialog("version-dialog")};window.closeVersionDialog=function(){window.closeDialog&&window.closeDialog("version-dialog")};function D(){try{I(),E(),y(),A()}catch{}setTimeout(async()=>{try{const n=document.querySelector("[data-pm7-menu]");n&&window.PM7Menu&&(n.hasAttribute("data-pm7-menu-initialized")||(new window.PM7Menu(n),n.setAttribute("data-pm7-menu-initialized","true"))),window.loadDialogIfNeeded=async()=>{if(!window.openDialog||!window.closeDialog){const t=await w(()=>import("./dialog-CPXP8QFI.js"),[]);window.openDialog=t.openDialog,window.closeDialog=t.closeDialog}};const e=document.getElementById("version-info-trigger");e&&e.addEventListener("click",async t=>{t.preventDefault(),t.stopPropagation();const s=document.querySelector("[data-pm7-menu]");s&&s.PM7Menu&&s.PM7Menu.close(),await window.loadDialogIfNeeded(),window.showVersionDialog()})}catch{}},10),setTimeout(()=>{b()},50)}window.loadSidebar=y;window.initializeComponentRouting=b;function b(){w(()=>import("./router-D-CXsgIh.js"),__vite__mapDeps([0,1,2,3,4,5])).then(()=>{document.querySelectorAll("[data-pm7-route]").forEach(e=>{const t=e.getAttribute("data-pm7-route");e.addEventListener("click",s=>{if(window.PM7Router){s.preventDefault(),s.stopPropagation();const i=localStorage.getItem("pm7-docs-last-tab")||"documentation";window.PM7Router.navigateToComponent(t,i)}})})}).catch(n=>{})}export{u as P,w as _,E as a,y as b,D as c,I as l};
