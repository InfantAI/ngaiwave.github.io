import{d as f,j as a,v as y,x as O,y as m}from"./index-651853eb.js";function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.17 1.44L12 .2l.83 1.24v.01l.03.03a12.89 12.89 0 00.43.6c.3.4.72.96 1.25 1.57a16.71 16.71 0 003.96 3.48c.46.27.95.37 1.5.37h1v2h-1c-.33 0-.66-.02-1-.09V17h2v2h-1v3h-2v-3h-5v3h-2v-3H6v3H4v-3H3v-2h2V9.41c-.34.07-.68.09-1 .09H3v-2h1c.54 0 1.03-.1 1.5-.37a16.71 16.71 0 003.96-3.48 27.59 27.59 0 001.68-2.17l.02-.03zM7 9v8h2v-2.2a3 3 0 016 0V17h2V9H7zm8-2a24.3 24.3 0 01-3-3.3A29.66 29.66 0 019 7h6zm-2 10v-2.2a1 1 0 10-2 0V17h2z"}}]},b=f({name:"Attic1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:v}=y(r),s=a(()=>["t-icon","t-icon-attic-1",l.value]),p=a(()=>i(i({},v.value),t.style)),u=a(()=>({class:s.value,style:p.value,onClick:h=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:h})}}));return()=>O(d,u.value)}});export{b as default};
