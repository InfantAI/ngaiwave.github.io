import{d,j as a,v as y,x as O,y as m}from"./index-651853eb.js";function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var g={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15 1.29v21.42L5.74 17.5H1v-11h4.74L15 1.29zM5 8.5H3v7h2v-7zm2 7.41l6 3.38V4.71L7 8.08v7.83zm10.88-7.45L20 10.6l2.12-2.13 1.42 1.42L21.4 12l2.13 2.12-1.42 1.42L20 13.4l-2.12 2.13-1.42-1.42L18.6 12l-2.13-2.12 1.42-1.42z"}}]},h=d({name:"SoundMute1Icon",props:{size:{type:String},onClick:{type:Function}},setup(e,n){var{attrs:t}=n,r=a(()=>e.size),{className:o,style:c}=y(r),u=a(()=>["t-icon","t-icon-sound-mute-1",o.value]),p=a(()=>s(s({},c.value),t.style)),v=a(()=>({class:u.value,style:p.value,onClick:f=>{var l;return(l=e.onClick)===null||l===void 0?void 0:l.call(e,{e:f})}}));return()=>O(g,v.value)}});export{h as default};
