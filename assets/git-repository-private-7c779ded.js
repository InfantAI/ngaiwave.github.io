import{d as y,j as a,v as O,x as m,y as d}from"./index-651853eb.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5.5 7.5a6.5 6.5 0 0113 0V9H21v14H3V9h2.5V7.5zm2 1.5h9V7.5a4.5 4.5 0 10-9 0V9zM5 11v10h14V11H5zm2 1.5h2V15H7v-2.5zm0 4h2V19H7v-2.5z"}}]},P=y({name:"GitRepositoryPrivateIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:p}=O(r),c=a(()=>["t-icon","t-icon-git-repository-private",o.value]),v=a(()=>s(s({},p.value),t.style)),u=a(()=>({class:c.value,style:v.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>m(g,u.value)}});export{P as default};
