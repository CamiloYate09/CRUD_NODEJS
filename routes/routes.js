var express = require('express');
var router = express.Router();

/*PASO 6*/
var controllers = require('.././controllers');
/*PASO 6*/

/* TODAS NUESTRAS RUTAS */
/*PASO 7*/
router.get('/',controllers.homecontroller.index);
/*PASO 7*/

//RUTAS PARA Productos
router.get('/productos', controllers.productoscontroller.getProductos);
//RUTA PARA UN NUEVO PRODUCTO
router.get('/nuevo', controllers.productoscontroller.getNuevoProducto);
//crear producto
router.post('/crearproducto', controllers.productoscontroller.postNuevoProducto);

// ruta para eliminar producto
router.post('/eliminarproducto', controllers.productoscontroller.eliminarProducto);
//ruta para modificar producto
router.get('/modificar/:id', controllers.productoscontroller.getModificarProducto);


// ruta para la editacion del producto 

router.post('/editar', controllers.productoscontroller.postModificarProducto);


//ruta para el formulario
module.exports = router;
