// lol
let head=h.element("header");head.id="header";document.body.appendChild(head);
let shoulders=h.element("main");shoulders.id="main";shoulders.setAttribute("role","main");document.body.appendChild(shoulders);
let kneesntoes=h.element("footer");kneesntoes.id="footer";kneesntoes.setAttribute("role","footer");document.body.appendChild(kneesntoes);

let s=h.site();
let d=document.URL;
switch (d) {
	case s+'?page1':h.set("main",`Hello from Page 1. Kind of.`);break;
	default:h.js("page0.js");break;
}
