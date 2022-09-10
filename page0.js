h.title("Demo Page");
h.meta("name","description","content","Demo Single Page Application created using h.js");
h.meta("name","keywords","content","demo,vanilla,javascript,js,dom");

document.body.style.backgroundColor="#343330";

h.addEl("div","grid","main");
h.styles("grid","font-family:'Ubuntu',Sans-Serif;color:white;");
h.set("grid",`
	<h2>Sample Heading</h2>
	<p>Sample paragraph tag to slot some fancy looking Lorem Ipsums into.</p>
	<p>Another paragraph tag because, well, why not!</p>
`);
h.addEl("div","img","grid");
h.styles("img","text-align:center;");
h.set("img",`
	<figure>
	${h.img("https://c.tadst.com/gfx/600x337/full-moon-phase2.jpg","moon")}
	<figcaption>The Moon. Because science.</figcaption>
	</figure>
`);
