import{d as m,j as l,v as y,x as O,y as d}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M18 .6L1.6 17l.69.7a16.04 16.04 0 004.12 2.92c1.6.8 3.4 1.38 5.08 1.38A11.48 11.48 0 0023 10.49C23 8.8 22.42 7 21.62 5.4c-.8-1.6-1.86-3.08-2.92-4.12l-.7-.7zm2.9 8.79l-8.17-.7 5.24-5.25c.67.8 1.33 1.8 1.86 2.87.52 1.04.9 2.1 1.07 3.08zm-7.75 1.34l7.8.67a9.46 9.46 0 01-2.07 5.07l-5.73-5.74zm4.32 7.15a9.46 9.46 0 01-5.07 2.08l-.67-7.82 5.74 5.74zm-7.78-6.15l.7 8.17c-.98-.17-2.04-.55-3.08-1.07a14.97 14.97 0 01-2.87-1.86l5.25-5.24z"}}]},j=m({name:"LemonSliceIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:s}=y(t),p=l(()=>["t-icon","t-icon-lemon-slice",a.value]),u=l(()=>c(c({},s.value),r.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,v.value)}});export{j as default};
