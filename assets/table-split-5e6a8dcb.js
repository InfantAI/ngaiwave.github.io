import{d as m,j as a,v as f,x as y,y as O}from"./index-651853eb.js";function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var z={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v2h7V4H4zm9 0v2h7V4h-7zm7 4H4v12h16V8zm-9 2h2v2h-2v-2zm-6 3h2v2H5v-2zm3 0h2v2H8v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h2v2h-2v-2z"}}]},d=m({name:"TableSplitIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:l,style:s}=f(r),p=a(()=>["t-icon","t-icon-table-split",l.value]),c=a(()=>i(i({},s.value),t.style)),h=a(()=>({class:p.value,style:c.value,onClick:u=>{var v;return(v=e.onClick)===null||v===void 0?void 0:v.call(e,{e:u})}}));return()=>y(z,h.value)}});export{d as default};
