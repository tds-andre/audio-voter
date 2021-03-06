var PlayView = Mn.View.extend({
	template: "#play-template",
	
	className: "app-play",

	ui: {
		play: ".js-play",
		select: ".js-select"
	},

	events: {
		"click @ui.play": "onPlay",
		"click @ui.select": "onSelect"
	},

	modelEvents: {
		"change:selected": "toggle"
	},

	onRender: function(){		
		if(this.model.get("selected"))
			this.toggle();
	},

	templateContext: function(){
		return {cap: config.debug ? this.model.get("name") : ""}
	},

	toggle: function(){
		this.ui.select.toggleClass("active")
		//this.$el.toggleClass("selected")
	},

	onPlay: function(){
		var audio = new Audio(this.model.get("name"));
		audio.play();
		this.trigger("play", audio)
	},

	onSelect: function(){
		var t = this.model.get("selected");
		this.model.set("selected", !t);
		this.trigger("select", this);
	}
})