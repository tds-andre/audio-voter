var App = Backbone.Router.extend({
	routes: {
		":a/:b": "showMatchup"
	},

	showMatchup: function(a,b){
		var ab = this.toCollection(a,b)
		var view = new VotationView(ab);
		$("#main-el").append(view.render().$el);
	},

	toCollection: function(a,b){
				this.a = a;
		this.b = b;
		this.matchup = a + "x" + b;
		this.uuid = this.retrieveUUID();
		var BC = Backbone.Collection;
		var opt = this.retrieveMatchup(this.matchup);
		if(!opt || !this.uuid){
			this.clearStorage();
			this.createUUID();
			opt = this.createMatchup();			
			return {a: new BC(opt.a), b: new BC(opt.b)};
		}		
		return {a: new BC(opt.a), b: new BC(opt.b), dunno: new BC(opt.dunno)};		
		
	},

	getPath: function(ab, audio){
		return config.basedir + this[ab] +"/" + audio + config.extension;
	},

	createMatchup: function(){
		var self = this;
		var a = config.names.map(
			audio => {return {audio: audio, selected: false, source: self.a, name: self.getPath("a", audio)}}
		);

		var b = config.names.map(
			audio => {return {audio: audio, selected: false, source: self.b, name:  self.getPath("b", audio)}}
		);
		return {a: a, b: b}
	},

	retrieveMatchup: function(matchup){
		return JSON.parse(localStorage.getItem(this.matchup))
	},

	clearStorage: function(){
		localStorage.removeItem("uuid");
		localStorage.removeItem(config.matchup);
	},

	retrieveUUID: function(){
		return localStorage.getItem("uuid");
	},

	createUUID: function(){
		localStorage.setItem("uuid", Math.random() * 1000000000000000000);
	},

	saveMatchup: function(col){
		localStorage.setItem(this.matchup, JSON.stringify(col))
	}
})