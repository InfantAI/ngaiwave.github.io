import{d as m,j as a,v as y,x as O,y as d}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 1.84l7 4.09v5.4A8.76 8.76 0 0121.61 13 4.2 4.2 0 0123 16c0 1.96-1.57 3.47-3.48 4.43A17.2 17.2 0 0112 22a17.2 17.2 0 01-7.52-1.57C2.57 19.47 1 17.96 1 16a4.2 4.2 0 011.39-2.99A8.76 8.76 0 015 11.33v-5.4l7-4.09zM5 13.56c-.5.28-.9.58-1.21.88C3.22 15 3 15.53 3 16c0 .8.67 1.79 2.38 2.64C7.02 19.46 9.36 20 12 20s4.98-.54 6.62-1.36C20.32 17.8 21 16.8 21 16c0-.47-.22-1-.79-1.56-.31-.3-.72-.6-1.21-.88v.51l-7 4.09-7-4.09v-.51zm12-.63V8.36l-4 2.23v4.67l4-2.33zm-6 2.33v-4.67L7 8.36v4.57l4 2.33zm-3.12-8.7L12 8.86l4.12-2.3L12 4.16l-4.12 2.4z"}}]},j=m({name:"Map3DIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),p=a(()=>["t-icon","t-icon-map-3d",l.value]),v=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(g,u.value)}});export{j as default};
