import{d as E,z as I,r as W,j as N,C as z,K as D,L as F,N as _,h as r,o as L,e as V,w as e,a as t,n as g,u as A,i as p,t as h,b as s,p as H,f as j,Q as J,g as K}from"./index-651853eb.js";import{T as C}from"./index-e42281fc.js";import{i as M,a as Q,b as Y,L as x}from"./date-8774eb28.js";import{c as O}from"./index-58dda413.js";import{F as q,H as G,I as P,J as R}from"./charts-bdc98a47.js";const m=i=>(H("data-v-984d8964"),i=i(),j(),i),U=m(()=>s("div",{id:"stokeContainer",style:{width:"100%",height:"351px"},class:"dashboard-chart-container"},null,-1)),X={class:"inner-card__content"},Z=m(()=>s("div",{class:"inner-card__content-title"},"1726",-1)),ee={class:"inner-card__content-footer"},te={class:"inner-card__content"},ae=m(()=>s("div",{class:"inner-card__content-title"},"226",-1)),se={class:"inner-card__content-footer"},oe={name:"DashboardBase"},ne=E({...oe,setup(i){q([M,Q,Y,G,P]);const l=I(),u=W(1),v=N(()=>l.chartColors);let n,o;const k=()=>{n||(n=document.getElementById("stokeContainer")),o=R(n),o.setOption(O({dateTime:x,...v.value}))},f=()=>{k()},b=()=>{document.documentElement.clientWidth>=1400&&document.documentElement.clientWidth<1920?u.value=Number((document.documentElement.clientWidth/2080).toFixed(2)):document.documentElement.clientWidth<1080?u.value=Number((document.documentElement.clientWidth/1080).toFixed(2)):u.value=1,o.resize({width:n.clientWidth,height:n.clientHeight})};z(()=>{f(),D(()=>{b()})});const{width:B,height:S}=F();_([B,S],()=>{b()}),_(()=>l.brandTheme,()=>{J([o])}),_(()=>l.mode,()=>{[o].forEach(a=>{a.dispose()}),f()});const $=a=>{o.setOption(O({dateTime:a,...v.value}))};return(a,de)=>{const T=r("t-date-range-picker"),d=r("t-card"),c=r("t-col"),y=r("t-button"),w=r("t-row");return L(),V(d,{bordered:!1},{default:e(()=>[t(w,null,{default:e(()=>[t(c,{xs:12,xl:9},{default:e(()=>[t(d,{bordered:!1,title:a.$t("pages.dashboardBase.outputOverview.title"),subtitle:a.$t("pages.dashboardBase.outputOverview.subtitle"),class:g({"dashboard-overview-card":!0,"overview-panel":!0})},{actions:e(()=>[t(T,{class:"card-date-picker-container",theme:"primary",mode:"date","default-value":A(x),onChange:$},null,8,["default-value"])]),default:e(()=>[U]),_:1},8,["title","subtitle"])]),_:1}),t(c,{xs:12,xl:3},{default:e(()=>[t(d,{bordered:!1,class:g({"dashboard-overview-card":!0,"export-panel":!0})},{actions:e(()=>[t(y,null,{default:e(()=>[p(h(a.$t("pages.dashboardBase.outputOverview.export")),1)]),_:1})]),default:e(()=>[t(w,null,{default:e(()=>[t(c,{xs:6,xl:12},{default:e(()=>[t(d,{bordered:!1,subtitle:a.$t("pages.dashboardBase.outputOverview.month.input"),class:"inner-card"},{default:e(()=>[s("div",X,[Z,s("div",ee,[p(h(a.$t("pages.dashboardBase.outputOverview.since"))+" ",1),t(C,{class:"trend-tag",type:"down","is-reverse-color":!1,describe:"20.3%"})])])]),_:1},8,["subtitle"])]),_:1}),t(c,{xs:6,xl:12},{default:e(()=>[t(d,{bordered:!1,subtitle:a.$t("pages.dashboardBase.outputOverview.month.output"),class:"inner-card"},{default:e(()=>[s("div",te,[ae,s("div",se,[p(h(a.$t("pages.dashboardBase.outputOverview.since"))+" ",1),t(C,{class:"trend-tag",type:"down","is-reverse-color":!1,describe:"20.3%"})])])]),_:1},8,["subtitle"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const _e=K(ne,[["__scopeId","data-v-984d8964"]]);export{_e as default};
