/**
* Here's the mold file , a mold means a HTML struct that the widget really presented.
* yep, we build html in Javascript , that make it more clear and powerful.
*/
function (out) {
	var zcls = this.getZclass(),
		tbx = this.getTabbox(),
		uuid = this.uuid;
	out.push('<div ', this.domAttrs_(), '>');
	if (tbx.isVertical()) {
		out.push('<div id="', uuid, '-header" class="', zcls, '-header">',
				'<ul id="', uuid, '-cave" class="', zcls, '-cnt">');
		for (var w = this.firstChild; w; w = w.nextSibling)
			w.redraw(out);
		// Merge breeze: introduce a few small divs to achieve "button is always 
		// at the middle" feature
		out.push('<li id="', uuid, '-edge" class="', zcls, '-edge z-tab">');
		
		if (this._addable) this.redrawEdges_(out);
		
		out.push('</li></ul></div>',
				'<div id="', uuid, '-up"><div class="', zcls, '-up-scroll-hl">', 
				'</div><div class="',zcls,'-up-scroll-hr"></div></div><div id="', uuid, '-down"><div class="', zcls, 
				'-down-scroll-hl"></div><div class="',zcls,'-down-scroll-hr"></div></div></div><div id="', uuid,
				'-line" class="', zcls, '-space" ></div>');
	} else {
		var hasToolbar = tbx.isTabscroll() && tbx.toolbar;
		if (hasToolbar) {
			out.push('<div class="', tbx.toolbar.getZclass(), '-outer">');
				tbx.toolbar.redraw(out);	
		}
		out.push('<div id="', uuid, '-right">', '</div>',
			'<div id="', uuid, '-left">', '</div>', '<div id="', uuid, '-header"',
			' class="', zcls, '-header" >', '<ul id="', uuid, '-cave"', 'class="', zcls, '-cnt">');
			for (var w = this.firstChild; w; w = w.nextSibling)
				w.redraw(out);
		out.push('<li id="', uuid, '-edge"', ' class="', zcls, '-add-edge z-tab" >')
		
		if (this._addable) this.redrawEdges_(out);

		out.push('</li>',
			'<div id="',uuid,'-clear" class="z-clear"> </div>',
			'</ul></div>');
		if (hasToolbar)	out.push('</div>');	
		out.push('<div id="', uuid, '-line"',
			' class="', zcls, '-space" ></div></div>');
	}
}