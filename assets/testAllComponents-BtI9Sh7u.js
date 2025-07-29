import"./menu-CszY2JC7.js";/* empty css              *//* empty css             */import"./index-C48Tp19N.js";import"./dialog-DICfvtvK.js";import"./toast-wOCbaTB3.js";import"./tab-selector-DNXWfa90.js";import"./tooltip-D3cTCXV0.js";import"./accordion-DIc5WzAF.js";import"./theme-switch-DMBz-S8n.js";function i(){const e=document.getElementById("debug-content"),t=document.querySelector("[data-pm7-menu]"),n=t==null?void 0:t.querySelector(".pm7-menu-content");if(t&&n){const s=t.getBoundingClientRect(),o=window.getComputedStyle(n),r=window.getComputedStyle(t);e.innerHTML=`
          Menu position: ${r.position}<br>
          Menu rect: ${Math.round(s.top)}, ${Math.round(s.left)}<br>
          Content position: ${o.position}<br>
          Content display: ${o.display}<br>
          Content top: ${o.top}<br>
          Content left: ${o.left}<br>
          Has open class: ${n.classList.contains("pm7-menu-content--open")}
        `}}setTimeout(()=>{console.log("PM7 components should now be initialized");const e=document.querySelector("[data-pm7-menu]");if(e){console.log("First menu initialized:",e.hasAttribute("data-pm7-menu-initialized"));const t=e.querySelector(".pm7-menu-trigger");t&&t.addEventListener("click",()=>{setTimeout(i,100)})}i()},500);window.addEventListener("resize",i);window.showTestToast=function(){window.showToast&&window.showToast({message:"This toast was created programmatically!",type:"success",duration:3e3})};
