const {Router, json} = require('express');
const router = Router();

//const express = require('express');
//const router = express.Router()

const recetas = require('./data.json');
console.log(recetas); //comprobamos 
router.get('/lista',(req,res) =>{
    res.json(recetas)
});

router.get('/user',(req,res) =>{
    const data = {
        "name":"dimas", 
        "id" : "37211"
    };
    res.json(data)
});




router.post('/',(req,res)=>{
    console.log(req.body);
    res.send('Received');
});
router.post('/agregar',(req,res)=>{
    /* const {tipo, ingredientes, personas} = req.body;
     if(tipo && ingredientes && personas){
        const id = recetas.length +1; 
        const nuevaReceta = {...req.body, id};
        console.log(nuevaReceta);
        res.send(recetas);
        recetas.push(nuevaReceta)
     } else{
         res.send('ERROR');
     } */
}); 
router.post('/modificar',(req,res)=>{
   
});
router.post('/eliminar',(req,res)=>{
   
});

module.exports = router;