import React,{useState} from "react";
import {C} from "./data.js";
import {submitForm} from "./api.js";
const h=React.createElement;

export function ContactForm(){
  const[d,sd]=useState({nom:"",tel:"",msg:"",piege:""});
  const[s,ss]=useState("idle");
  const[er,se]=useState("");
  const set=k=>e=>sd({...d,[k]:e.target.value});
  const text="Message de "+d.nom+" ("+d.tel+") :\n"+d.msg;
  const send=async e=>{
    e.preventDefault();
    if(d.piege)return;
    if(!d.nom.trim()||!d.tel.trim()||d.msg.trim().length<5){se("Merci de renseigner votre nom, votre téléphone et votre message.");return}
    se("");ss("busy");
    try{await submitForm("Message depuis le site – "+d.nom,{name:d.nom,phone:d.tel,message:d.msg});ss("ok")}
    catch(x){ss("fail")}
  };
  if(s==="ok")return h("div",{className:"card"},h("h3",null,"✅ Message envoyé"),h("p",null,"Merci, nous vous répondons très vite."));
  if(s==="fail")return h("div",{className:"card"},h("h3",null,"⚠️ Envoi impossible"),h("p",null,"Écrivez-nous directement :"),h("a",{className:"btn b3",href:"https://wa.me/"+C.wa+"?text="+encodeURIComponent(text)},"💬 WhatsApp"));
  return h("form",{className:"card",onSubmit:send,noValidate:true},
    h("h3",null,"Écrivez-nous"),
    h("label",{htmlFor:"c-nom"},"Nom"),h("input",{id:"c-nom",value:d.nom,onChange:set("nom"),autoComplete:"name"}),
    h("label",{htmlFor:"c-tel"},"Téléphone"),h("input",{id:"c-tel",type:"tel",value:d.tel,onChange:set("tel"),autoComplete:"tel"}),
    h("label",{htmlFor:"c-msg"},"Message"),h("textarea",{id:"c-msg",value:d.msg,onChange:set("msg")}),
    h("div",{style:{position:"absolute",left:"-9999px"},"aria-hidden":true},h("input",{tabIndex:-1,value:d.piege,onChange:set("piege"),autoComplete:"off"})),
    er&&h("div",{className:"err",role:"alert"},er),
    h("div",{className:"row"},h("button",{className:"btn b1",type:"submit",disabled:s==="busy"},s==="busy"?"Envoi en cours…":"Envoyer"))
  );
}
