zul.fiddle.fiddletabs.Fiddletabs = zk.$extends(zul.tab.Tabs, {
  	$define: {
		addable:function(){
			if (this._addable) {
				var out = [];
				this.redrawEdges_(out);
				jq(this.$n("edge")).html(out.join(""));
			} else 
				jq(this.$n("edge")).childrens().remove();
			
		}
	},
	bind_: function () {
		this.$supers(zul.fiddle.fiddletabs.Fiddletabs,'bind_', arguments);
		this.domListen_(this.$n("edge"), "onClick", "doAdd_");
	},
	doAdd_: function () {
		if (this._addable) {
			this.fire("onAdd");
		}
	},
	unbind_: function () {
		this.domUnlisten_(this.$n("edge"), "onClick", "doAdd_")
		this.$supers(zul.fiddle.fiddletabs.Fiddletabs,'unbind_', arguments);
	},
	redrawEdges_: function (out) {
		out.push('<div class="z-tab-hl"><div class="z-tab-hr" >',
			'<div class="z-tab-hm" ><span class="z-tab-text">+</span></div>',
			'</div></div>');
	},
	getZclass: function () {
		return this._zclass != null ? this._zclass: "z-tabs";
	}
});
