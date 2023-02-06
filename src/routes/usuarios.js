//rutas
const router = require('express').Router();

// obtener usuarios
router.get("/", (req, res)=>{
    res.json([]);
});

//obtener un solo usuario
router.get("/:id", (req, res)=>{
    const { id } =req.params
    res.json({
       id,
       nombre: "usuario"
    });
});

//Crear usuario
router.post("/", (req, res)=>{                                 //metodo post nos manda informacion
    const { nombre,email,password,roles,creado,ultimoAcceso } =req.body           //esto es lo que va aresivir
    res.json({
       nombre,
       email,
       password,
       roles,
       creado,
       ultimoAcceso
    });
});
module.exports = router;
