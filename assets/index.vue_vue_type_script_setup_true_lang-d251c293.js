import{d as p,r as a,h as r,o as i,e as _}from"./index-651853eb.js";const h=p({__name:"index",emits:["select-change"],setup(d,{emit:o}){const t=o,e=a("zh"),s=l=>{t("select-change",l)},c=a([{label:"中文",value:"zh"},{label:"英文",value:"en"},{label:"印尼语",value:"id"}]);return(l,n)=>{const u=r("t-select");return i(),_(u,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=m=>e.value=m),clearable:"",options:c.value,onChange:s},null,8,["modelValue","options"])}}});export{h as _};
