import{d as h,j as a,v as y,x as O,y as m}from"./index-651853eb.js";function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?i(Object(r),!0).forEach(function(t){m(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M13 1v2.06c.74.1 1.44.29 2.1.56l1.03-1.78 1.73 1-1.03 1.78c.58.45 1.1.96 1.54 1.54l1.79-1.03 1 1.74-1.79 1.02c.28.67.48 1.37.57 2.11H22v2h-2.06c-.1.74-.29 1.44-.56 2.1l1.78 1.03-1 1.73-1.79-1.02A8.04 8.04 0 0116 17.93V21h3v2H5v-2h3v-3.07a8.04 8.04 0 01-2.38-2.1l-1.78 1.04-1-1.74 1.78-1.03a7.94 7.94 0 01-.56-2.1H2v-2h2.06c.1-.74.29-1.44.56-2.1L2.84 6.86l1-1.73 1.79 1.04c.44-.58.95-1.1 1.53-1.54l-1.03-1.8 1.73-1 1.04 1.8a7.95 7.95 0 012.1-.57V1h2zm-3 17.75V21h4v-2.25a8.02 8.02 0 01-4 0zm5.44-2.83a6.03 6.03 0 001.65-1.75l.2-.35a5.97 5.97 0 00-.01-5.68l-.16-.27a6.03 6.03 0 00-2.06-2.03l-.13-.08a6 6 0 00-6.37 10.16L12 8.67l3.44 7.25zm-5.07.86a6.01 6.01 0 003.26 0L12 13.33l-1.63 3.45z"}}]},b=h({name:"FerrisWheelIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:r}=n,t=a(()=>e.size),{className:l,style:s}=y(t),v=a(()=>["t-icon","t-icon-ferris-wheel",l.value]),p=a(()=>c(c({},s.value),r.style)),u=a(()=>({class:v.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(d,u.value)}});export{b as default};
