import{r as f,o as g,E as m,a5 as n,a as s,b as a,d as e,t,u as l,F as p,p as y,l as v,h as k,i as V,H as d,a6 as z,C,f as I}from"./index.45468242.js";const M=e("br",null,null,-1),N=e("br",null,null,-1),P={key:0},S={key:1,style:{color:"red"}},x=e("br",null,null,-1),T=e("br",null,null,-1),B=e("br",null,null,-1),$=e("br",null,null,-1),D=e("br",null,null,-1),E={key:0},F=C("Modifica lo stato dell'ordine "),H=e("br",null,null,-1),U=e("br",null,null,-1),q={setup(b){const u=f("");return g(()=>{m()}),console.log(n),(i,r)=>(s(),a(p,null,[e("h1",null,"Ordine: "+t(l(n).value.id),1),M,e("h3",null,"Cliente: "+t(l(n).value.customerId),1),N,e("ul",null,[(s(!0),a(p,null,y(l(n).value.items,o=>{var c,_,h;return s(),a("li",{key:o.value},[((c=o.productId)==null?void 0:c.name)!==void 0?(s(),a("h3",P,"Nome: "+t((_=o==null?void 0:o.productId)==null?void 0:_.name),1)):d("",!0),((h=o.productId)==null?void 0:h.name)===void 0?(s(),a("h3",S,"Prodotto eliminato dal catalogo")):d("",!0),e("h3",null,"Prezzo: "+t(o.price)+" \u20AC",1),e("h3",null,"Quantit\xE1: "+t(o.quantity),1),e("h3",null,"Parziale: "+t(o.total)+" \u20AC",1)])}),128))]),x,e("h3",null,"Totale: "+t(l(n).value.subTotal)+" \u20AC",1),T,e("h3",null,"Metodo di pagamento: "+t(l(n).value.payment),1),B,e("h3",null,"Indirizzo di spedizione: "+t(l(n).value.shipping_address.street)+", "+t(l(n).value.shipping_address.number)+" "+t(l(n).value.shipping_address.city)+" "+t(l(n).value.shipping_address.CAP),1),$,e("h3",null,"Stato: "+t(l(n).value.status),1),D,l(v).account=="Venditore"?(s(),a("span",E,[F,H,k(e("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>u.value=o),placeholder:"Stato"},null,512),[[V,u.value]])])):d("",!0),U,l(v).account=="Venditore"?(s(),a("button",{key:1,class:"btn2",onClick:r[1]||(r[1]=o=>{l(z)(u.value,l(n).value.self),i.$router.push("/local_shop_advisor_Hosting/ordiniVenditore")})},"Modifica Stato")):d("",!0)],64))}},A={setup(b){return(u,i)=>(s(),a("div",null,[I(q)]))}};export{A as default};
