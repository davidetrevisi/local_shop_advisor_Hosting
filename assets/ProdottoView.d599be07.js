import{r as b,J as t,o,c as n,a as e,t as u,u as l,F as c,k as h,l as r,e as k,f as C,E as _,P as f,b as g,w as y,L as z,A as p,h as N}from"./index.8a9dbfb6.js";const V=e("br",null,null,-1),x=e("br",null,null,-1),$=e("br",null,null,-1),w=e("br",null,null,-1),A=e("h3",null,"Tags:",-1),B=e("br",null,null,-1),D=e("h3",null,"Immagini:",-1),I=["src"],T=e("br",null,null,-1),q={key:0},E=p("Inserisci la quantit\xE1 da aggiungere al carrello "),F=e("br",null,null,-1),H=e("br",null,null,-1),L=e("br",null,null,-1),P={key:2},U=p("vai a negozio"),J={setup(v){const i=b("");return console.log(t),(d,a)=>{const m=N("router-link");return o(),n(c,null,[e("h1",null,u(l(t).value.name),1),V,e("h3",null,"Categoria: "+u(l(t).value.category),1),x,e("h3",null,"Prezzo: "+u(l(t).value.price)+" $",1),$,e("h3",null,"Descrizione: "+u(l(t).value.description),1),w,A,(o(!0),n(c,null,h(l(t).value.tags,s=>(o(),n("div",null,[e("h3",null,u(s),1)]))),256)),B,D,(o(!0),n(c,null,h(l(t).value.images,s=>(o(),n("div",null,[e("img",{src:"https://local-shop-advisor.herokuapp.com/"+s,width:"200"},null,8,I)]))),256)),T,l(r).account=="Cliente"?(o(),n("span",q,[E,F,k(e("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>i.value=s),placeholder:"Quantit\xE1"},null,512),[[C,i.value]])])):_("",!0),H,l(r).account=="Cliente"?(o(),n("button",{key:1,class:"btn2",style:{margin:"1rem 0"},onClick:a[1]||(a[1]=s=>{l(f)(l(t).value,i.value),d.$router.push("/local_shop_advisor_Hosting/catalogo")})},"Aggiungi a carrello")):_("",!0),L,l(r).account=="Cliente"||l(r).account=="Venditore"||l(r).account=="Admin"?(o(),n("span",P,[g(m,{to:"/local_shop_advisor_Hosting/infoNegozio",onClick:a[2]||(a[2]=s=>l(z)(l(t).value.shopId))},{default:y(()=>[U]),_:1})])):_("",!0)],64)}}},Q={setup(v){return(i,d)=>(o(),n("div",null,[g(J)]))}};export{Q as default};
