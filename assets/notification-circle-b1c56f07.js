import{d as y,j as a,v as O,x as m,y as d}from"./index-651853eb.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 21a9 9 0 100-18 9 9 0 000 18zm11-9a11 11 0 11-22 0 11 11 0 0122 0zm-9.27 5a2 2 0 01-3.46 0H6v-2.74l1-2V10a5 5 0 0110 0v2.26l1 2V17h-4.27zM8 15h8v-.26l-1-2V10a3 3 0 10-6 0v2.74l-1 2V15z"}}]},h=y({name:"NotificationCircleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:i,style:s}=O(r),p=a(()=>["t-icon","t-icon-notification-circle",i.value]),v=a(()=>c(c({},s.value),t.style)),f=a(()=>({class:p.value,style:v.value,onClick:u=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:u})}}));return()=>m(g,f.value)}});export{h as default};
