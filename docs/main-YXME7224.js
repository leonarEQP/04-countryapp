import{J as l,K as d,L as f,N as u,Q as a,R as h,S as C,V as M,W as g,f as r,h as c,i,q as m,r as s,s as p}from"./chunk-M52DEXLJ.js";var N=[{path:"about",component:h},{path:"contact",component:C},{path:"countries",loadChildren:()=>import("./chunk-ERYS5C2S.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],y=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(N),a]});let o=t;return o})();var v=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,j){e&1&&(m(0,"div",0)(1,"div",1),p(2,"shared-sidebar"),s(),m(3,"div",2),p(4,"router-outlet"),s()())},dependencies:[u,M]});let o=t;return o})();var w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[v]}),t.\u0275inj=r({imports:[f,y,g,l]});let o=t;return o})();d().bootstrapModule(w).catch(o=>console.error(o));
