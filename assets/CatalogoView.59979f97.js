import{r as i,B as w,d as h,i as $,C as D,o,c as n,b as u,w as d,u as s,a as t,F as _,k as m,D as H,E as k,G as M,h as g,e as E,f as F,t as p,A as C,H as y,I as T}from"./index.8a9dbfb6.js";const A=t("h1",null,"Ricerca un prodotto nel catalogo",-1),G=t("br",null,null,-1),I=t("br",null,null,-1),L={style:{color:"red"}},R={key:0},S=t("h1",null,"Prodotti in catalogo:",-1),U={key:1},j=t("h1",null,"Prodotto ricercato:",-1),q={setup(b){const a=i(""),r=i("");i("");const l=w([]),x=h(()=>l.value===!1),N=h(()=>l.value===!0);l.value=!1;function P(){if(console.log(l),a.value==""){r.value="inserisci il prodotto da cercre";return}l.value=!0,r.value="",T(a.value).catch(v=>console.error(v))}return $(()=>{D()}),console.log(l),(v,c)=>{const B=g("center"),f=g("router-link");return o(),n(_,null,[u(B,null,{default:d(()=>[A,G,E(t("input",{"onUpdate:modelValue":c[0]||(c[0]=e=>a.value=e),placeholder:"cerca"},null,512),[[F,a.value]]),t("button",{class:"btn2",type:"button",onClick:c[1]||(c[1]=e=>{P()})},"cerca"),I,t("span",L,p(r.value),1)]),_:1}),s(x)?(o(),n("form",R,[S,t("ul",null,[(o(!0),n(_,null,m(s(H).value,e=>(o(),n("li",{key:e.self},[u(f,{to:"/local_shop_advisor_Hosting/prodotto",onClick:V=>s(y)(e.id)},{default:d(()=>[C(p(e.name),1)]),_:2},1032,["onClick"])]))),128))])])):k("",!0),s(N)?(o(),n("form",U,[j,t("ul",null,[(o(!0),n(_,null,m(s(M).value,e=>(o(),n("li",{key:e.self},[u(f,{to:"/local_shop_advisor_Hosting/prodotto",onClick:V=>s(y)(e.id)},{default:d(()=>[C(p(e.name),1)]),_:2},1032,["onClick"])]))),128))])])):k("",!0)],64)}}},J={setup(b){return(a,r)=>(o(),n("div",null,[u(q)]))}};export{J as default};
