let s=h.site();
let d=document.URL;
switch (d) {
	case s+'?page1':h.js("page1.js");break;
	case s+'?page2':h.js("page2.js");break;
	default:h.js("page0.js");break;
}
