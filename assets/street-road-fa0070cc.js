import{d,j as a,v as y,x as O,y as m}from"./index-651853eb.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2 2h20v20H2V2zm2 2v16h16V4H4zm14.37 2.34L6.66 13.37l-1.03-1.71 2.1-1.27-2.09-3.78 1.75-.97 2.07 3.72 7.88-4.73 1.03 1.71zm0 6l-2.11 1.27 2.1 3.78-1.75.97-2.07-3.72-7.88 4.73-1.03-1.71 11.71-7.03 1.03 1.71z"}}]},h=d({name:"StreetRoadIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=y(r),p=a(()=>["t-icon","t-icon-street-road",o.value]),v=a(()=>s(s({},c.value),t.style)),u=a(()=>({class:p.value,style:v.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,u.value)}});export{h as default};
