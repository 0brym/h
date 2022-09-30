// enjoy
var h=h||{};
h.site=()=>location.origin+location.pathname;
h.log=x=>console.log(x);
h.msg=x=>window.alert(x);
h.pr=(x,y)=>window.prompt(x,y);
h.scroll=num=>window.scroll({top:num,behavior:"smooth"});
h.ref=()=>document.referrer;
h.title=x=>document.title=x;
h.element=x=>document.createElement(x);
h.js=file=>{let js=h.element("script");js.src=h.site()+file;document.body.appendChild(js);}
h.getEl=x=>document.getElementById(x);
h.val=x=>h.getEl(x).value;
h.addEl=(tag,id,where)=>{let t=h.getEl(where);let x=h.element(tag);x.id=id;t.appendChild(x);}
h.set=(elem,data)=>{h.getEl(elem).innerHTML=data;}
h.add=(elem,msg)=>!elem?h.log(`Error (h.add): Element '${elem}' not found`):h.getEl(elem).innerHTML+=msg;
h.remove=id=>h.getEl(id).remove();
h.styles=(id,styles)=>h.getEl(id).style=styles;
h.styleTag=x=>document.head.insertAdjacentHTML("beforeend",`<style>${x}</style>`);
h.classes=(id,classes)=>h.getEl(id).className=classes;
h.save=(a,b)=>localStorage.setItem(a,b);
h.get=x=>localStorage.getItem(x);
h.del=x=>localStorage.removeItem(x);
h.delAll=()=>localStorage.clear();
h.img=(img,alt)=>`<img src="${img}" alt="${alt}">`;
h.vid=(id,src) =>`<video id="${id}" width="100%" height="100%" controls><source src="${src}">Something went wrong!</video>`;
h.meta=(a,b,c,d)=>{let x=h.element("META");x.setAttribute(a,b);if(c&&d){x.setAttribute(c,d);};document.head.appendChild(x);}
h.link=(a,b,c,d,e,f,g,i)=>{
  let x=h.element("LINK");
  x.setAttribute(a,b);
  x.setAttribute(c,d);
  if(e&&f)x.setAttribute(e,f);
  if(g&&i)x.setAttribute(g,i);
  document.head.appendChild(x);
}
h.css=path=>h.link("rel","stylesheet","href",path,"media","none","onload","if(media!='all')media='all'");
h.imp=async(target,src)=>{fetch(src).then((res)=>res.text()).then((html)=>h.set(target,html)).catch((err)=>h.log(err));}
h.elBg=(x,y,z)=>h.styles(x,`background-image:url("${y}");background-size:cover;background-position:center center;background-blend-mode:"${z}";`);
document.addEventListener("DOMContentLoaded",()=>h.js("r.js"));
