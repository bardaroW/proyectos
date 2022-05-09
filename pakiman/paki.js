var imagenes = [];
imagenes["Vaca"] = "vaca.png";
imagenes["Gallina"] = "pollo.png";
imagenes["Cerdo"] = "cerdo.png";

var pakimanes = [];
pakimanes.push(new Pakiman("Vaca", 100, 30));
pakimanes.push(new Pakiman("Gallina", 80, 50));
pakimanes.push( new Pakiman("Cerdo", 120, 40));

for( var pakin of pakimanes)
{
	pakin.mostrar();
}

for( var x in pakimanes[0])
{
	console.log(x);
}