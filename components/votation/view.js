var VotationView = Mn.View.extend({
	template: "#votation-template",

	regions:{
		list: ".js-list-el"
	},

	ui: {
		vote: ".js-vote"
	},

	events: {
		"click @ui.vote": "onVote"
	},

	onVote: function() {
		var 
			self = this,
			data =  this.collection.models.map(dupla => {
				return { 
					a: dupla.get("a").toJSON(),
					b: dupla.get("b").toJSON()
				}
		});
		
		Backbone.$.ajax({
			url: "vote.php",
			type: "post",
			data: {uuid: localStorage.getItem("uuid"), data: JSON.stringify(data)},//JSON.stringify(data),
			//dataType: "json",
			//contentType: "application/json",
			success: () => self.thankYou()
		});
	},

	thankYou: function(){
		console.log("obrigado!")
		this.$el.html("<h1 style='margin-top:60px' class='display-4'> Votos enviados. Obrigado! </h1>");
	},
	
	onChildviewSelect: function(){
		
		localStorage.setItem(config.matchup, JSON.stringify(this.storage))
	},

	onRender: function(){
		var 
			self = this,
			collection = [],
			a = this.options.a.models,
			b = this.options.b.models,
			randomizer = () => {
	  			min = Math.ceil(-1);
	  			max = Math.floor(2);
	  			return Math.floor(Math.random() * (max - min)) + min; 
			};

		this.storage = {a: a, b: b};

		a.forEach( (d, index) => {collection.push({a: a[index], b: b[index]})})

		//collection.sort(randomizer);
		this.collection = new Backbone.Collection(collection);

		this.showChildView("list", new VotationStub({collection: this.collection}))
	},
})


var VotationStub = Mn.CollectionView.extend({	
	tagName: "div",
	childView: PairView,
	childViewTriggers:{
		"select": "select"
	}
})