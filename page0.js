h.title("Demo Page");
h.meta("name","description","content","Demo Single Page Application created using h.js");
h.meta("name","keywords","content","demo,vanilla,javascript,js,dom");

document.body.style.backgroundColor="#343330";
h.styleTag("a{color:#6ED9E5;}");
let centre = "text-align:center;";

h.addEl("div","grid","main");
h.styles("grid","font-family:'Ubuntu',Sans-Serif;color:white;");
h.add("grid",`
	<h2>Sample Heading</h2>
	<p>Sample paragraph tag to slot some fancy looking Lorem Ipsums into.</p>
	<p>Another paragraph tag because, well, why not!</p>
`);
h.addEl("div","img","grid");
h.styles("img",centre);
h.add("img",`
	<figure>
	${h.img("https://c.tadst.com/gfx/600x337/full-moon-phase2.jpg","moon")}
	<figcaption>The Moon. Because science.</figcaption>
	</figure>
`);
h.addEl("div","imgtest","grid");
h.styles("imgtest",centre);
h.add("imgtest",`
	<a href="javascript:h.set('imgtest',h.img('https://c.tadst.com/gfx/600x337/full-moon-phase2.jpg','moon'));">Click to load image</a>
	<div>Look at Rock Rippers h.img for the answer!</div>
`);
