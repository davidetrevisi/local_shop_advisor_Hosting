import{r as u,o as l,c as a,b as s,w as i,a as e,F as h,k as g,u as _,G as x,h as d,e as b,f as w,t as p,A as y,H as B,I as C}from"./index.008080eb.js";const V=e("h1",null,"Ricerca un prodotto nel catalogo",-1),N=e("br",null,null,-1),P=e("br",null,null,-1),$={style:{color:"red"}},D={setup(v){const o=u(""),n=u("");function f(){if(o.value==""){n.value="inserisci il prodotto da cercre";return}n.value="",C(o.value).catch(c=>console.error(c))}return(c,r)=>{const m=d("center"),k=d("router-link");return l(),a("form",null,[s(m,null,{default:i(()=>[V,N,b(e("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>o.value=t)},null,512),[[w,o.value]]),e("button",{type:"button",onClick:r[1]||(r[1]=t=>f())},"cerca"),P,e("span",$,p(n.value),1)]),_:1}),e("ul",null,[(l(!0),a(h,null,g(_(x).value,t=>(l(),a("li",{key:t.self},[s(k,{to:"/local_shop_advisor_Hosting/prodotto",onClick:F=>_(B)(t)},{default:i(()=>[y(p(t.name),1)]),_:2},1032,["onClick"])]))),128))])])}}},M={setup(v){return(o,n)=>(l(),a("div",null,[s(D)]))}};export{M as default};
