var PairView = Mn.View.extend({
	template: "#pair-template",

	className: "app-pair row",

	regions: {
		left: ".js-left-el",
		right: ".js-right-el"
	},

	onRender: function(){
		var left, right;
		if(Math.random(1) > 0.5){
			left = this.model.get("a")
			right = this.model.get("b")
		}
		else{
			left = this.model.get("b")
			right = this.model.get("a")
		}

		this.showChildView("left", new PlayView({model: left}));
		this.showChildView("right", new PlayView({model: right}));
	},

	onChildviewSelect: function(view){
		this.trigger("select")

		a = this.model.get("a");
		b = this.model.get("b");


		if(view.model == a && a.get("selected")){
			
			b.set("selected", false)
		}

		if(view.model == b && b.get("selected")){
			
			a.set("selected", false)
		}
		

	}
})