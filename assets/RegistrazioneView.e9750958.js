import{r as t,d as M,o as T,c as $,b as k,w as q,a as n,e as o,v as G,f as a,n as u,u as s,t as H,F as J,s as K,g as L,h as O}from"./index.008080eb.js";const Q=n("h1",null,"Form registrazione",-1),W=n("br",null,null,-1),X=n("option",{value:"cliente"},"Cliente",-1),Z=n("option",{value:"venditore"},"Venditore",-1),ee=[X,Z],le=n("div",null,"Dati personali",-1),ne=["hidden"],te=["hidden"],oe=["hidden"],de=["hidden"],ae=["hidden"],ue=["hidden"],se=["hidden"],ie=["hidden"],re=["hidden"],ve=["hidden"],pe=["hidden"],me=["hidden"],he=["hidden"],ce=["hidden"],_e=["hidden"],ge=["hidden"],Ve=n("div",null,null,-1),Ue=["disabled"],Ce={setup(R){const v=t("cliente"),p=t(""),m=t(""),_=t(""),g=t(""),h=t(""),c=t(j(new Date)),V=t(""),U=t(""),C=t(""),b=t(""),f=t(""),z=t(""),w=t(""),y=t(""),D=t(""),A=t(""),P=t(""),S=t(""),N=t(""),i=M(()=>v.value==="venditore"),d=t(!0);function E(){K(v.value,p.value,m.value,_.value,g.value,h.value,F(c.value),V.value,U.value,C.value,b.value,f.value,z.value,w.value,y.value,D.value,A.value,P.value,S.value,N.value),setTimeout(()=>L(p.value,m.value),2e3)}function Y(r){return Number.isInteger(r)}const B=M(()=>Y(h.value)&&F(c.value)<new Date);function F(r){const[e,x,l]=r.split("-");return new Date(+e,x-1,+l)}function j(r){return r.getFullYear()+"-"+I(r.getMonth()+1)+"-"+I(r.getDate())}function I(r,e=String(r)){return e.length<2?`0${e}`:e}return(r,e)=>{const x=O("center");return T(),$(J,null,[k(x,null,{default:q(()=>[Q]),_:1}),W,n("form",null,[o(n("select",{"onUpdate:modelValue":e[0]||(e[0]=l=>v.value=l)},ee,512),[[G,v.value]]),le,o(n("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>p.value=l),class:u({red:d.value}),placeholder:"Email"},null,2),[[a,p.value]]),o(n("input",{"onUpdate:modelValue":e[2]||(e[2]=l=>m.value=l),class:u({red:d.value}),placeholder:"Password"},null,2),[[a,m.value]]),o(n("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>_.value=l),class:u({red:d.value}),placeholder:"Nome"},null,2),[[a,_.value]]),o(n("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>g.value=l),class:u({red:d.value}),placeholder:"Cognome"},null,2),[[a,g.value]]),o(n("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>h.value=l),class:u({red:d.value}),placeholder:"Numero di telefono"},null,2),[[a,h.value,void 0,{number:!0}]]),o(n("input",{type:"date","onUpdate:modelValue":e[6]||(e[6]=l=>c.value=l),class:u({red:d.value})},null,2),[[a,c.value]]),o(n("input",{"onUpdate:modelValue":e[7]||(e[7]=l=>V.value=l),hidden:s(i),class:u({red:d.value}),placeholder:"Metodo di pagamento"},null,10,ne),[[a,V.value]]),n("div",{hidden:s(i)},"Indirizzo di spedizione",8,te),o(n("input",{"onUpdate:modelValue":e[8]||(e[8]=l=>U.value=l),hidden:s(i),class:u({red:d.value}),placeholder:"Citt\xE0"},null,10,oe),[[a,U.value]]),o(n("input",{"onUpdate:modelValue":e[9]||(e[9]=l=>C.value=l),hidden:s(i),class:u({red:d.value}),placeholder:"CAP"},null,10,de),[[a,C.value]]),o(n("input",{"onUpdate:modelValue":e[10]||(e[10]=l=>b.value=l),hidden:s(i),class:u({red:d.value}),placeholder:"Via / Strada"},null,10,ae),[[a,b.value]]),o(n("input",{"onUpdate:modelValue":e[11]||(e[11]=l=>f.value=l),hidden:s(i),class:u({red:d.value}),placeholder:"Civico"},null,10,ue),[[a,f.value]]),n("div",{hidden:s(i)},"Indirizzo di fatturazione",8,se),o(n("input",{"onUpdate:modelValue":e[12]||(e[12]=l=>z.value=l),hidden:s(i),class:u({red:d.value}),placeholder:"Citt\xE0"},null,10,ie),[[a,z.value]]),o(n("input",{"onUpdate:modelValue":e[13]||(e[13]=l=>w.value=l),hidden:s(i),class:u({red:d.value}),placeholder:"CAP"},null,10,re),[[a,w.value]]),o(n("input",{"onUpdate:modelValue":e[14]||(e[14]=l=>y.value=l),hidden:s(i),class:u({red:d.value}),placeholder:"Via / Strada"},null,10,ve),[[a,y.value]]),o(n("input",{"onUpdate:modelValue":e[15]||(e[15]=l=>D.value=l),hidden:s(i),class:u({red:d.value}),placeholder:"Civico"},null,10,pe),[[a,D.value]]),n("div",{hidden:!s(i)},"Indirizzo personale",8,me),o(n("input",{"onUpdate:modelValue":e[16]||(e[16]=l=>A.value=l),hidden:!s(i),class:u({red:d.value}),placeholder:"Citt\xE0"},null,10,he),[[a,A.value]]),o(n("input",{"onUpdate:modelValue":e[17]||(e[17]=l=>P.value=l),hidden:!s(i),class:u({red:d.value}),placeholder:"CAP"},null,10,ce),[[a,P.value]]),o(n("input",{"onUpdate:modelValue":e[18]||(e[18]=l=>S.value=l),hidden:!s(i),class:u({red:d.value}),placeholder:"Via / Strada"},null,10,_e),[[a,S.value]]),o(n("input",{"onUpdate:modelValue":e[19]||(e[19]=l=>N.value=l),hidden:!s(i),class:u({red:d.value}),placeholder:"Civico"},null,10,ge),[[a,N.value]]),Ve,n("button",{class:"btn2",disabled:!s(B),type:"button",onClick:e[20]||(e[20]=l=>{E(),r.$router.push("/")})}," Registrati ",8,Ue),n("p",null,H(s(B)?"":"Alcuni parametri sono errati."),1)])],64)}}},fe={setup(R){return(v,p)=>(T(),$("div",null,[k(Ce)]))}};export{fe as default};
