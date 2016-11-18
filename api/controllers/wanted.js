var Wanted = require('../models').Wanted;

module.exports = function(app){

	var wanteds = [{id:1, name:'Algo', description:'Tiene una descripcion'}];
	var nextId = 2;

	app.get('/wanted', function(req, res){
		Wanted.findAll().then(function(wantedList){
			res.json(wantedList);
		});
	});

	app.post('/wanted', function(req, res){
		Wanted.create(req.body)
			.then(function(saved){
				res.json(saved);
			});


		// var newItem = req.body;
		// newItem.id = nextId;
		// nextId++;
		// wanteds.push(newItem);
		// res.json(newItem);
	});

	app.get('/wanted-type', function(req, res){
		res.json([{id:1,name:'Algo'}]);
	});
}