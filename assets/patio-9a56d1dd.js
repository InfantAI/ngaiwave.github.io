import{d as h,j as a,v as y,x as O,y as m}from"./index-651853eb.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.78 2.06A18.2 18.2 0 0112 1c2.63 0 4.75.53 6.22 1.06a14.13 14.13 0 012.32 1.1h.01l.45.3V20h1v2H2v-2h1V3.46l.45-.3h.01a3.4 3.4 0 01.17-.1 14.13 14.13 0 012.16-1zM5 4.58V20h2V7.5h2v2h2v-2h2V20h6V4.58c-.33-.18-.82-.4-1.47-.64A16.21 16.21 0 0012 3c-2.37 0-4.25.47-5.53.94A12.14 12.14 0 005 4.58zm4 6.92V13h2v-1.5H9zm2 3.5H9v1.5h2V15zm0 3.5H9V20h2v-1.5z"}}]},P=h({name:"PatioIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=y(r),p=a(()=>["t-icon","t-icon-patio",o.value]),v=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>O(d,u.value)}});export{P as default};
