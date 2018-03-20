
var mysql = require('mysql');
//modulo de fecha
var dateFormat = require('dateformat');

// PRODUCTOS CONTROLLER
// PASO 10

module.exports = {

  getProductos : function(req, res, next){
    var config = require('.././database/config');

    var db = mysql.createConnection(config);
    //para que se conecte a la base de datos
    db.connect();

    var productos = null;

    db.query('SELECT * FROM productos ', function(err,rows,fields){

    if(err) throw err;

    productos = rows;
    db.end();

    res.render('productos/productos', {productos : productos});
    });
  },

  //PASO 10

    getNuevoProducto : function(req,res,next){
      res.render('productos/nuevo');

    },

    postNuevoProducto : function(req,res,next){


      //darle formato a la fecha con la del servidor
      var fechaactual = new Date();
      var fecha = dateFormat(fechaactual, 'yyyy-mm-dd h:MM:ss')

      //una variable para tomar los datos del formulario

      var producto ={
         nombre : req.body.nombre,
         precio : req.body.precio,
         stock : req.body.stock,
         fecha_creacion : fecha

      }
      //revisar que llegue la imformacion

      //console.log(producto);

      var config = require('.././database/config');

      var db = mysql.createConnection(config);
      //para que se conecte a la base de datos
      db.connect();
      db.query('INSERT INTO productos SET ?',producto, function(err,rows,fields){
          if(err) throw err;
          db.end();

      });

      res.render('productos/nuevo', {info : 'Producto creado correctamente'});


      //console.log(req.body);

    },

    // funcion para el boton de eliminar

    eliminarProducto : function(req,res,next){


      var id = req.body.id;
      // codigo para conectarnos a la base de datos
      var config = require('.././database/config');

      var db = mysql.createConnection(config);
      //para que se conecte a la base de datos
      db.connect();

      var respuesta = {res : false};
      // vamos a generar la consulta a la base de datos
      db.query('DELETE FROM productos WHERE id_producto = ?', id, function(err,rows,fields){
          // try catch
          if(err) throw err;

          db.end();
          respuesta.res = true;
          res.json(respuesta);

      });

    },

    // funcion con el boton para mopdificar un producto
    // esto se conecta con el controlador routes.js
    getModificarProducto : function(req,res,next){
      var id = req.params.id;
      //para que se conecte a la base de datos
      var config = require('.././database/config');
      var db = mysql.createConnection(config);
      db.connect();

      db.query('SELECT * FROM productos WHERE id_producto = ?', id, function(err,rows,fields){
          if(err) throw err;
          producto = rows;
          db.end();

          res.render('productos/modificar',{producto: producto});
      });



    },

    postModificarProducto : function(req,res,next){


      var producto ={
         nombre : req.body.nombre,
         precio : req.body.precio,
         stock : req.body.stock

      };
      var config = require('.././database/config');
      var db = mysql.createConnection(config);
      db.connect();

      db.query('UPDATE productos SET ? WHERE ?',[producto, {id_producto : req.body.id_producto}], function(err,rows,fields){
          if(err) throw err;
          db.end();

      });

      res.redirect('/productos');




    }

}
// PASO 10
