var mongoose = require('mongoose'),
	express = require('express'),
	Project = require('../models/Projects'),
	optimizely = require('optimizely-node')('92e37e45ed438eb37e735862c4b4dd62:7e9a7cc3'),
	router = express.Router();

function createErrorObject(msg){
	var error = {
		confirmation: 'Fail',
		message: msg
	}
	return error;
}

router.get('/:project', function(req,res,next){
	var project = req.params.project;
	optimizely.projects.fetch(project).then(function(data){
		res.render('index', {data:data, title:'Optimizely'});
	}, function(err){
		res.send(err);
	});
});

module.exports = router;