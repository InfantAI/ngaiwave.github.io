import{d,j as a,v as h,x as m,y}from"./index-651853eb.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){y(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v12h-2v-1H4v7h8.5v2H2V2zm2 9h16V4H4v7zm2-4.5h2v2H6v-2zm0 9h2v2H6v-2zm17.6 1.44l-5.66 5.66-3.54-3.54 1.42-1.41 2.12 2.12 4.24-4.24 1.42 1.4z"}}]},b=d({name:"DataCheckedIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:s}=h(r),v=a(()=>["t-icon","t-icon-data-checked",o.value]),p=a(()=>c(c({},s.value),t.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>m(O,u.value)}});export{b as default};
