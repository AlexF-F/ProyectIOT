
{

    "nombre": Ramon lozano",
    "edad": 51,
    "nacionalidad":"mexicana"
   
   }
   var json = '{"nombre":"Ramon":, "edad":51, "nacionalidad":"mexicana"}';
   var obj= JSON.parse(json);console.log(obj.nombre);obj.nombre="pedro";
   console.log(obj.nombre);
   
   var json = '{"nombre":"Manuel":, "edad":51, "nacionalidad":"mexicana","hobies":["ajedrez","video jugos","comics"]}';
   
   var obj =JSON.parse(json);
   console.log(obj.hobies[0]);
   obj.hobies[0] = "peliculas";
   console.log(obj.hobies [0]);
   