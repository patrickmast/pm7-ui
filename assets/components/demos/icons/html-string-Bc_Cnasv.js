import"../../../menu-CszY2JC7.js";/* empty css                     */import"../../../index-C48Tp19N.js";import{a as t}from"../../../hamburger-eUuf_pux.js";import"../../../dialog-DICfvtvK.js";import"../../../toast-wOCbaTB3.js";import"../../../tab-selector-DNXWfa90.js";import"../../../tooltip-D3cTCXV0.js";import"../../../accordion-DIc5WzAF.js";import"../../../theme-switch-DMBz-S8n.js";window.generateIcon=function(o){let e;switch(o){case"small":e=t({width:12,height:10,className:"small-icon"});break;case"large":e=t({width:24,height:20,className:"large-icon"});break;case"colored":e=t({color:"#1C86EF",className:"colored-icon"});break;default:e=t({className:"demo-icon"})}document.getElementById("html-output").textContent=e,document.getElementById("render-output").innerHTML=`
        <span>Rendered icon:</span>
        ${e}
        <span style="color: var(--pm7-muted-foreground); font-size: 0.875rem;">
          (${o} variant)
        </span>
      `};generateIcon("default");
