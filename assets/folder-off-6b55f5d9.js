import{d as O,j as l,v as d,x as y,y as m}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.48 2.5l2 2.5H14v2h-3.48l-2-2.5H3v12.91l-2 2V2.5h8.48zM21.41 4l-1 1H23v15H5.41L3 22.41 1.59 21 20 2.59 21.41 4zm-3 3l-11 11H21V7h-2.59z"}}]},b=O({name:"FolderOffIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=d(t),f=l(()=>["t-icon","t-icon-folder-off",a.value]),p=l(()=>s(s({},c.value),r.style)),v=l(()=>({class:f.value,style:p.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>y(g,v.value)}});export{b as default};
