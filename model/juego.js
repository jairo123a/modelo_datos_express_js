module.exports={
    obtener:function (conexion,funcion){
            conexion.query("SELECT * FROM bd_crud",funcion)

    }

}