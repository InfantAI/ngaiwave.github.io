import{d as m,j as a,v as y,x as O,y as h}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M18 .6L1.6 17l.69.7a16.04 16.04 0 004.12 2.92c1.6.8 3.4 1.38 5.08 1.38C17.85 22 23 16.85 23 10.49 23 8.8 22.42 7 21.62 5.4c-.8-1.6-1.86-3.08-2.92-4.12l-.7-.7zm2.94 9.06a9.51 9.51 0 01-10.28 10.28A11.52 11.52 0 0020.94 9.66zM17.9 3.51c.47.79.75 1.77.91 2.7a13.57 13.57 0 01.19 2.1v.21A9.51 9.51 0 019.49 18h-.06A4.78 4.78 0 018.9 18c-.36-.02-.88-.07-1.47-.17a9.61 9.61 0 01-2.87-.98L17.9 3.51zM17 8h-2v2h2V8zm-3 3h-2v2h2v-2zm-3 3H9v2h2v-2z"}}]},b=m({name:"WatermelonIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:s}=y(t),p=a(()=>["t-icon","t-icon-watermelon",o.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
