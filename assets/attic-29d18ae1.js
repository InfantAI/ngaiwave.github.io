import{d as h,j as a,v as y,x as O,y as d}from"./index-651853eb.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){d(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var m={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12.81 1.41L12 .3l-.81 1.12-.01.02-.03.04a32.89 32.89 0 01-.64.85c-.43.55-1.03 1.3-1.71 2.1A33.3 33.3 0 016.6 6.8c-.77.74-1.49 1.3-2.07 1.62-.39.21-.73.36-1 .46-.3.1-.47.13-.53.13H2v2h1c.33 0 .67-.07 1-.18V20H2v2h20v-2h-2v-9.18c.33.1.67.18 1 .18h1V9h-1c-.06 0-.23-.02-.52-.13-.28-.1-.62-.25-1-.46-.6-.31-1.3-.88-2.07-1.62a33.29 33.29 0 01-2.2-2.36 54.47 54.47 0 01-2.36-2.96l-.03-.04v-.01h-.01zM16.87 9H7.13c.29-.24.57-.5.85-.76.82-.79 1.63-1.68 2.34-2.51.66-.78 1.25-1.5 1.68-2.07.43.56 1.02 1.3 1.68 2.07A35.24 35.24 0 0016.87 9zM6 11h12v9h-3v-3a3 3 0 00-6 0v3H6v-9zm5 9v-3a1 1 0 112 0v3h-2z"}}]},b=h({name:"AtticIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:c,style:v}=y(r),s=a(()=>["t-icon","t-icon-attic",c.value]),p=a(()=>l(l({},v.value),t.style)),u=a(()=>({class:s.value,style:p.value,onClick:f=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:f})}}));return()=>O(m,u.value)}});export{b as default};
