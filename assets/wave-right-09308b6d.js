import{d as y,j as n,v as O,x as g,y as d}from"./index-651853eb.js";function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M19.05.37l.82.57c1.2.83 2.25 1.88 3.09 3.09l.56.82-1.64 1.13-.57-.82c-.7-1-1.57-1.88-2.57-2.57l-.83-.57L19.05.37zM12.2 4.3a2.39 2.39 0 013.65.33 2.39 2.39 0 013.32 3.32 2.4 2.4 0 01.33 3.65l-.42.42.3.25c.93.94.93 2.45 0 3.38l-4.33 4.32a7.19 7.19 0 01-10.16 0l-.85-.85a7.19 7.19 0 01-1.12-8.7l2.22-3.82a2.15 2.15 0 013.98.78l3.08-3.08zm5.89 5.89a.39.39 0 00-.55-.55l-5.24 5.24-1.41-1.42 6.6-6.6a.39.39 0 00-.55-.55l-6.6 6.6-1.42-1.4 5.24-5.25a.39.39 0 00-.55-.54l-5.47 5.46a1 1 0 01-1.67-.96l.67-2.5a.15.15 0 00-.27-.11l-2.23 3.81a5.19 5.19 0 00.82 6.29l.84.84a5.19 5.19 0 007.34 0l4.32-4.32a.39.39 0 00-.55-.54l-3.15 3.15-1.41-1.41 5.24-5.24z"}}]},b=y({name:"WaveRightIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,a){var{attrs:t}=a,r=n(()=>e.size),{className:l,style:s}=O(r),p=n(()=>["t-icon","t-icon-wave-right",l.value]),v=n(()=>c(c({},s.value),t.style)),u=n(()=>({class:p.value,style:v.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>g(m,u.value)}});export{b as default};
