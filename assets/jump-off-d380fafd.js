import{d as O,j as a,v as m,x as y,y as h}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M22.41 21L3 1.59 1.59 3 3 4.41V21h16.59L21 22.41 22.41 21zm-4.82-2H5V6.41L10.59 12l-.5.5 1.41 1.42.5-.5L17.6 19zM21 17.42L21 14.5v-1.01h-2v1.92l2 2zM21 3h-8v2h4.59l-4.5 4.5 1.41 1.41 4.5-4.5V11h2V3zM10.51 3H6.58l2 2h1.93V3z"}}]},g=O({name:"JumpOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:p}=m(t),c=a(()=>["t-icon","t-icon-jump-off",l.value]),f=a(()=>s(s({},p.value),r.style)),u=a(()=>({class:c.value,style:f.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>y(d,u.value)}});export{g as default};
