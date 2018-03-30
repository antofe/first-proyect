const mongoose = require ("mongoose");

var postSchema = new mongoose.Schema({
	title: {type: String, required: true},
	texto: { type: String},
	creacion: {type: Date, default: Date.now}
	
});