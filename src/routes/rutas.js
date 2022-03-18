const {Router, json} = require('express');
const router = Router();

const recetas = require('./data.json');
//console.log(recetas); //comprobamos 

router.get('/lista',(req,res) =>{
    console.log(req.body);
    //res.json(recetas);
    res.send(recetas);
});
router.get('/buscar/nombre/:nombre',(req,res)=>{
    //console.log(recetas);
    const {nombre} = req.params;
    recetas.forEach(actual => {
        if(actual.receta == nombre) {
            res.send(actual);
            console.log(actual);
            res.send('Done');
        }
    });
});

router.get('/buscar/id/:id',(req,res)=>{
    const {id} = req.params;
    recetas.forEach(rec => {
        if(rec.id == id) {
            res.send(rec);
            console.log(rec);
            res.send('Done');
        }
    });    
});

router.post('/agregar',(req,res)=>{
    const {receta,tipo,ingredientes,personas} = req.body;
    if(receta && tipo && ingredientes && personas){
        const id = recetas.length +1; 
        const nuevaReceta = {id, ...req.body};
        recetas.push(nuevaReceta);
        res.send('Nueva receta agregada');
     } else{
         res.send('Data not found');
     } 
}); 

router.get('/eliminar/:comida',(req,res)=>{
   const {comida} = req.params;
   console.log(comida);
   recetas.forEach(lista =>{
       console.log(lista.receta);
       if(lista.receta == comida){
            recetas.pop(lista);
            console.log(recetas);
            res.send('Done');
       }
    });
});

module.exports = router;