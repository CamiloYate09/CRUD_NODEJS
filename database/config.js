// port : = 3306
var config = {
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'nodejs',
  //esta linea sirve para que nos de un formate de fecha igual a la base de datos

  dateStrings : true // revisar no formatea la fecha 

};

module.exports = config;
