import{_ as m}from"./dep-f0c03047-1764bf98.js";import{d as O,j as o,v as h,x as y}from"./index-651853eb.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 2v6h-2V2h2zm-9 .59L9.91 8.5 8.5 9.91 2.59 4 4 2.59zM21.41 4L15.5 9.91 14.09 8.5 20 2.59 21.41 4zm-11.14 7a2 2 0 110 2H2v-2h8.27zM16 11h6v2h-6v-2zm-6.09 4.5L4 21.41 2.59 20l5.91-5.91 1.41 1.41zm5.59-1.41L21.41 20 20 21.41l-5.91-5.91 1.41-1.41zM13 16v6h-2v-6h2z"}}]},P=O({name:"PreciseMonitorIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=o(()=>e.size),{className:a,style:c}=h(t),p=o(()=>["t-icon","t-icon-precise.monitor",a.value]),v=o(()=>s(s({},c.value),r.style)),u=o(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(d,u.value)}});export{P as default};
