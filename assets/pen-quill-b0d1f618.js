import{d as y,j as l,v as O,x as m,y as d}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M23.3 8.12l-11.14 11.1-5.41-.7-3.68 3.67-1.41-1.42 3.67-3.67-.74-5.4L15.67.55l1.82 5.8 5.81 1.76zm-7.74-1.24l-.8-2.56L6.7 12.4l.4 2.93 8.46-8.45zm-7.03 9.85l2.92.37 8.07-8.04-2.54-.77-8.45 8.44z"}}]},b=y({name:"PenQuillIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=l(()=>e.size),{className:a,style:c}=O(t),p=l(()=>["t-icon","t-icon-pen-quill",a.value]),u=l(()=>s(s({},c.value),r.style)),v=l(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>m(g,v.value)}});export{b as default};
