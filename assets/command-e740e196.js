import{d as f,j as a,v as h,x as d,y}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.5 4.5a2 2 0 012 2v2h-2a2 2 0 110-4zm4 4v-2a4 4 0 10-4 4h2v3h-2a4 4 0 104 4v-2h3v2a4 4 0 104-4h-2v-3h2a4 4 0 10-4-4v2h-3zm0 2h3v3h-3v-3zm5-2v-2a2 2 0 112 2h-2zm0 7h2a2 2 0 11-2 2v-2zm-7 0v2a2 2 0 11-2-2h2z"}}]},b=f({name:"CommandIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:o,style:c}=h(t),s=a(()=>["t-icon","t-icon-command",o.value]),p=a(()=>v(v({},c.value),r.style)),m=a(()=>({class:s.value,style:p.value,onClick:u=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:u})}}));return()=>d(O,m.value)}});export{b as default};
