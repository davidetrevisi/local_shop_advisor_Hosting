import{o as e,c as t,a as l,t as s,u as n,N as u,F as a,k as r,Q as p,h as g,b as i,w as m,A as v,H as k}from"./index.008080eb.js";const b=l("br",null,null,-1),f=l("br",null,null,-1),x=l("br",null,null,-1),C=l("br",null,null,-1),N=l("h3",null,"Tags:",-1),w=l("br",null,null,-1),y=l("h3",null,"Immagini:",-1),z=["src"],B=l("br",null,null,-1),V=l("h3",null,"Prodotti in catalogo del negozio:",-1),D={setup(c){return(_,d)=>{const h=g("router-link");return e(),t(a,null,[l("h1",null,s(n(u).value.name),1),b,l("h3",null,"Categoria: "+s(n(u).value.category),1),f,l("h3",null,"position: "+s(n(u).value.position),1),x,l("h3",null,"Descrizione: "+s(n(u).value.description),1),C,N,(e(!0),t(a,null,r(n(u).value.tags,o=>(e(),t("div",null,[l("h3",null,s(o),1)]))),256)),w,y,(e(!0),t(a,null,r(n(u).value.images,o=>(e(),t("div",null,[l("img",{src:"https://local-shop-advisor.herokuapp.com/"+o,width:"200"},null,8,z)]))),256)),B,V,l("ul",null,[(e(!0),t(a,null,r(n(p).value,o=>(e(),t("li",{key:o.self},[i(h,{to:"/local_shop_advisor_Hosting/prodotto",onClick:F=>n(k)(o.id)},{default:m(()=>[v(s(o.name),1)]),_:2},1032,["onClick"])]))),128))])],64)}}},P={setup(c){return(_,d)=>(e(),t("div",null,[i(D)]))}};export{P as default};
