import{d as y,j as a,v as O,x as m,y as d}from"./index-651853eb.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var P={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M21.21 5.73l-.97.24c-1 .25-1.85.8-2.45 1.36a7.35 7.35 0 014.05 3.5c.86 1.67.54 3.31-.34 4.72a12.26 12.26 0 01-3.82 3.54c-1.56 1-3.33 1.81-4.96 2.39-1.6.56-3.16.91-4.32.92a4.31 4.31 0 01-3.15-.93 3.76 3.76 0 01-1.14-1.81c-.67-.2-1.3-.56-1.8-1.14-.69-.79-1.01-1.86-.94-3.15 0-1.16.36-2.68.92-4.22.58-1.57 1.4-3.25 2.42-4.75 1-1.48 2.22-2.84 3.6-3.7a5.24 5.24 0 014.73-.6 5.47 5.47 0 013.6 3.58 7.68 7.68 0 013.12-1.65l.97-.24.48 1.94zM17 9.18v1.47h-2V8c0-1.4-.43-3.26-2.62-4h-.02l-.02-.02c-.96-.37-1.95-.2-2.98.43a10.6 10.6 0 00-3 3.11 20.63 20.63 0 00-2.19 4.32c-.53 1.46-.8 2.73-.8 3.56v.06c-.06.9.17 1.44.44 1.75.28.33.71.54 1.27.61l.76.1.1.76c.08.56.3 1 .62 1.27.31.28.84.5 1.75.45h.06c.83 0 2.16-.27 3.69-.81 1.5-.53 3.13-1.29 4.54-2.19 1.43-.9 2.57-1.91 3.2-2.92.61-.96.71-1.85.26-2.72A5.35 5.35 0 0017 9.18z"}}]},h=y({name:"MeatPepperIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:c,style:p}=O(t),s=a(()=>["t-icon","t-icon-meat-pepper",c.value]),v=a(()=>i(i({},p.value),r.style)),u=a(()=>({class:s.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(P,u.value)}});export{h as default};
