import{d as h,j as a,v as y,x as O,y as m}from"./index-651853eb.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22 2h-8v6.34c-.32-.11-.66-.2-1-.26V7h-2v1.08c-.34.06-.68.15-1 .26V2H2v20h20V2zM8 9.53c-1.23 1.1-2 2.7-2 4.47v6H4V4h4v5.53zM8 20v-5h8v5h-3v-3h-2v3H8zm10 0v-6c0-1.78-.77-3.37-2-4.47V4h4v16h-2zm-2.13-7H8.13a4 4 0 017.74 0z"}}]},b=h({name:"Castle4Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=y(r),v=a(()=>["t-icon","t-icon-castle-4",l.value]),p=a(()=>i(i({},s.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
