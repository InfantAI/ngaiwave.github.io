import{d as m,j as a,v as h,x as y,y as O}from"./index-651853eb.js";function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?o(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.3 2.89l3.54 3.54-1.41 1.41L2.89 4.3 4.3 2.9zm5.95-1.7v4.5h-2v-4.5h2zm-8.9 6.9h4.5v2h-4.5v-2zm13.48-2.46l-3.05 3.05-1.4-1.42 3.03-3.04a4.5 4.5 0 016.37 6.36l-3.05 3.05-1.41-1.42 3.04-3.04a2.5 2.5 0 10-3.53-3.54zm-9.2 9.2a2.5 2.5 0 103.54 3.53l3.05-3.04 1.41 1.41-3.04 3.05a4.5 4.5 0 01-6.37-6.37l3.05-3.04 1.41 1.41-3.04 3.05zm12.69-1.08h4.5v2h-4.5v-2zm-2.41 4.4v4.5h-2v-4.5h2zm1.66-2l3.54 3.54-1.42 1.42-3.53-3.54 1.41-1.41z"}}]},z=m({name:"LinkUnlinkIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:c}=h(t),v=a(()=>["t-icon","t-icon-link-unlink",l.value]),p=a(()=>s(s({},c.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var i;return(i=e.onClick)===null||i===void 0?void 0:i.call(e,{e:f})}}));return()=>y(d,u.value)}});export{z as default};
