var PairView = Mn.View.extend({
	template: "#pair-template",

	className: "app-pair row",

	ui:{
		"dunno": ".js-dunno"
	},

	events: {
		"click @ui.dunno": "onDunnoClick"
	},

	regions: {
		left: ".js-left-el",
		right: ".js-right-el"
	},

	onDunnoClick: function(){
		console.log("dunno");
		a = this.model.get("a");
		b = this.model.get("b");
		b.set("selected", false);
		a.set("selected", false);
		this.model.get("dunno").set("selected", true)
		this.ui.dunno.addClass("active");
		this.trigger("select");
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
		console.log("dunno", this.model.get("dunno").get("selected"))
		if(this.model.get("dunno").get("selected") == true)
			this.ui.dunno.addClass("active");

		this.showChildView("left", new PlayView({model: left}));
		this.showChildView("right", new PlayView({model: right}));
	},

	onChildviewPlay: function(audio){
		this.trigger("play", audio);
	},

	onChildviewSelect: function(view){
		this.ui.dunno.removeClass("active");
		this.model.get("dunno").set("selected", false)

		

		a = this.model.get("a");
		b = this.model.get("b");


		if(view.model == a && a.get("selected")){
			
			b.set("selected", false)
		}

		if(view.model == b && b.get("selected")){
			
			a.set("selected", false)
		}
		
		this.trigger("select");

	}
})