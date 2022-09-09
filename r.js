// lol
let head=h.element("header");head.id="header";document.body.appendChild(head);
let shoulders=h.element("main");shoulders.id="main";shoulders.setAttribute("role","main");document.body.appendChild(shoulders);
let kneesntoes=h.element("footer");kneesntoes.id="footer";kneesntoes.setAttribute("role","footer");document.body.appendChild(kneesntoes);

let s=h.site();
let d=document.URL;
switch (d) {
	case s+'?page1':h.js("page1.js");break;
	case s+'?page2':h.js("page2.js");break;
	default:h.js("page0.js");break;
}
