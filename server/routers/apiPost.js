const express = require("express");
var router =express.Router();
var Post = require("../models/post");

router.get ("/perritos",  (req,res) =>{
	res.send ("los poodles son animales agresivos");

})

router.get ("/perritos/:id", (req,res) =>{

	var id = req.params.id;
	res.send (req.params.id);
})

router.post("/", (req,res)=>{          //Crear post
	console.log(req.body.title)
	console.log(req.body.texto)
	var newPost = new Post({
		title: req.body.title,
		texto: req.body.texto
	});
	newPost.save()
           .then(post => {
           	res.status(201).json(post);
           })
           .catch(error => {
           	res.status(500).json({
           		mensaje:"lo siento error de servidor"
           	})
           })
});

router.get("/", (req,res)=>{         //Ver todos los post index muestra todos losp post
	Post.find({	})
	.exec()
	.then(post => {
		res.status(200).json(post);
	})
	.catch(error => {
		res.status(500).json({
			mensaje:"sin poder accesar"
		})
	})
	
})

router.get("/:id", (req,res) =>{    //show solo muestra uno
	Post.findById(req.params.id)
	.exec()
	.then(post => {
		res.status(200).json(post);
	})
	.catch(error => {
		res.status(500).json({
			mensaje: "no realizado"
		})
	})
})


router.delete("/:id", (req,res) =>{    //para eliminar un post
	Post.remove({_id:req.params.id})
	.exec()
	.then(post => {
		res.status(200).json(post);
	})
	.catch(error => {
		res.status(500).json({
			mensaje: "no realizado"
		})
	})
})

router.patch("/:id", (req,res) =>{    //actualizar
	Post.update({_id:req.params.id}, {$set: {title: req.body.title, texto: req.body.texto}})
	.exec()
	.then(post => {
		res.status(200).json({ mensaje: "post actualizado"});
	})
	.catch(error => {
		res.status(500).json({
			mensaje: "no realizado"
		})
	})
})


	

module.exports = router;