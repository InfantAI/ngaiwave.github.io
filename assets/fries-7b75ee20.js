import{d as m,j as l,v as y,x as O,y as d}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.46 1L21 4.52l-.7.7 2.11 2.13-2.12 2.12 2.12 2.12-3.2 3.2 1.4 1.4-11.76 7.06-8.1-8.1L7.8 3.39 9.32 4.9l3.9-3.9 2.12 2.12L17.46.99zm-4.6 7.44l.7.7 4.61-4.61-.7-.7-4.62 4.6zm6.02-1.79l-3.9 3.9.7.72 3.9-3.91-.7-.7zm-1.79 6.03l.71.7 1.79-1.78-.71-.7-1.79 1.78zm.3 3.12l-9.2-9.19-1.93 3.23 7.9 7.9 3.23-1.94zm-5 3l-7.2-7.19-1.93 3.24 5.9 5.9 3.23-1.95zM10.73 6.32l.7.7 2.5-2.49-.7-.7-2.5 2.49z"}}]},j=m({name:"FriesIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=y(t),p=l(()=>["t-icon","t-icon-fries",a.value]),u=l(()=>s(s({},c.value),r.style)),f=l(()=>({class:p.value,style:u.value,onClick:v=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:v})}}));return()=>O(g,f.value)}});export{j as default};
