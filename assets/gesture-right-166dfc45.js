import{d as g,j as n,v as y,x as O,y as d}from"./index-651853eb.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var h={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M19.5 7.57a3 3 0 110 6H16v1.46a3 3 0 01-.4 1.51l-2.42 4.13a3 3 0 01-3.54 1.34l-6.09-2.04a3 3 0 01-2.05-2.84V9.06a3 3 0 011.17-2.38l6.29-4.84 1.52 1.02a2 2 0 01.85 2.1l-.58 2.61h8.75zm1 3a1 1 0 00-1-1H8.25l1.13-5.05-.34-.22L3.9 8.26a1 1 0 00-.39.8v8.07a1 1 0 00.68.95l6.1 2.03a1 1 0 001.17-.45l2.41-4.13a1 1 0 00.14-.5v-3.46h5.5a1 1 0 001-1z"}}]},b=g({name:"GestureRightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:c}=y(r),p=n(()=>["t-icon","t-icon-gesture-right",l.value]),u=n(()=>s(s({},c.value),t.style)),v=n(()=>({class:p.value,style:u.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(h,v.value)}});export{b as default};
