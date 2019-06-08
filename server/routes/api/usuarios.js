const express = require('express');
const router=express.Router();
const Usuario=require("../../models/usuario");
router.get('/',async(req,res)=>{
    var usuarios=await Usuario.find();
    res.json(usuarios);
    // res.send('API usuarios is goes here');
});

router.post("/",async (req,res)=>{
    const usuario= new Usuario(req.body);
    await usuario.save();
   console.log(usuario);
   res.json({
       status:"tarea terminada"
   });
});

router.put('/:id',async(req,res)=>{
    await Usuario.findByIdAndUpdate(req.params.id,req.body);
    res.json({
        res:req.body,
        status:"Se modifico correctamente"
    });

});

router.delete('/:id',async(req,res)=>{
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({
        status:"Se elimino correctamente"
    });
});

module.exports=router;