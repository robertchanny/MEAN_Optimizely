var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
	title: String,
	description: String
});

projectSchema.methods.summary = function(){
	var summary = {
		title: this.title,
		description: this.description
	}
	return summary;
}

module.exports = mongoose.model('projectSchema', projectSchema);