import{d,j as a,v as y,x as O,y as h}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.5 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM6 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM18 14c-.69 0-1.25.56-1.25 1.25V16h5.75v6.5h-9V16h1.25v-.75a3.25 3.25 0 015.54-2.3l.71.7-1.41 1.42-.7-.7A1.24 1.24 0 0018 14zm-2.5 4v2.5h5V18h-5zM8 16a4 4 0 00-4 4h7.55v2H2v-2a6 6 0 016-6h3.5v2H8z"}}]},b=d({name:"UserUnlockedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=y(t),p=a(()=>["t-icon","t-icon-user-unlocked",o.value]),v=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
