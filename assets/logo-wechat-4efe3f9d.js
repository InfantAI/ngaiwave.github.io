import{d as y,j as a,v as O,x as g,y as m}from"./index-651853eb.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.8 17.03h-.05c-1.15 0-2.25-.2-3.26-.53l-2.84 1.42.35-2.71a6.95 6.95 0 01-3-5.57c0-4.08 3.92-7.39 8.75-7.39 4.17 0 7.66 2.47 8.54 5.77a9.4 9.4 0 00-.6-.02c-4.36 0-8.19 3.04-8.19 7.11 0 .67.1 1.31.3 1.92zM6 8a1 1 0 100-2 1 1 0 000 2zm5.5 0a1 1 0 100-2 1 1 0 000 2z"}},{tag:"path",attrs:{fill:"currentColor",d:"M21.87 19.52A5.72 5.72 0 0024 15.16C24 11.76 20.75 9 16.75 9S9.5 11.76 9.5 15.16c0 3.4 3.25 6.16 7.25 6.16.95 0 1.86-.15 2.69-.43l2.43 1.4v-2.77zm-7.56-5.36a1 1 0 110-2 1 1 0 010 2zm4.88 0a1 1 0 110-2 1 1 0 010 2z"}}]},b=y({name:"LogoWechatIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=O(r),p=a(()=>["t-icon","t-icon-logo-wechat",o.value]),u=a(()=>i(i({},s.value),t.style)),v=a(()=>({class:p.value,style:u.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>g(d,v.value)}});export{b as default};
