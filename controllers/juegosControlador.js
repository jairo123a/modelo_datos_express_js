var conexion=require('../config/conexion');
var juego=require('../model/juego')
module.exports={

  index:function (req,res){
   console.log(conexion)
     juego.obtener(conexion,function (err,datos){
     console.log(datos)
      res.render("juegos/index", {title: "Crud creado por jairo para desarrollo web a continuacion el modelo de datos lista de juegos " + datos});
     });
   }
};
