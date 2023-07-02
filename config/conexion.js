var mysql = require("mysql");
var con = mysql.createConnection({
host:'localHost',
port:3306,
database: 'crud',
user:'root',
password:'Miercolesenlatarde1*',
}
);

con.connect(
  (error)=>{
     if(!error){
      console.log("conexion establecida")
     }else{
        console.log("conexion establecida")
     }
  }
 );
 module.exports=con;