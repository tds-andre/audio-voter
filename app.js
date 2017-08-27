


function clearStorage(){
	localStorage.removeItem("uuid");
	localStorage.removeItem(config.matchup);
}

var BC = Backbone.Collection;

var uuid = localStorage.getItem("uuid");
var opt = JSON.parse(localStorage.getItem(config.matchup));
if(!opt || !uuid){
	clearStorage();
}

if(!uuid){
	localStorage.setItem("uuid", Math.random() * 1000000000000000000);
}

if(!opt){
	
	var a = config.names.map(
		audio => {return {audio: audio, selected: false, source: config.a.name, name: config.a.dir + audio + config.extension}}
	);

	var b = config.names.map(
		audio => {return {audio: audio, selected: false, source: config.b.name, name: config.b.dir + audio + config.extension}}
	);
	opt = {a: a, b: b}
}

opt = {a: new BC(opt.a), b: new BC(opt.b)};

var view = new VotationView(opt);
$("#main-el").append(view.render().$el);