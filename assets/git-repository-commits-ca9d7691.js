import{d as m,j as o,v as y,x as h,y as O}from"./index-651853eb.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3 5.5A4.5 4.5 0 017.5 1H21v22h-5v-2h3v-5h-2.5v-2H19V3H7.5A2.5 2.5 0 005 5.5v9.26A4.48 4.48 0 017.5 14h2v2h-2a2.5 2.5 0 000 5H10v2H7.5A4.5 4.5 0 013 18.5v-13zM8 5h2v2H8V5zm0 3h2v2H8V8zm5 6.62l3.91 3.74-1.38 1.45L14 18.34V23h-2v-4.66l-1.53 1.47-1.38-1.45L13 14.62z"}}]},b=m({name:"GitRepositoryCommitsIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=o(()=>e.size),{className:a,style:v}=y(r),c=o(()=>["t-icon","t-icon-git-repository-commits",a.value]),p=o(()=>s(s({},v.value),t.style)),u=o(()=>({class:c.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>h(d,u.value)}});export{b as default};
