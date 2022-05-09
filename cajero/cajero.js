class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
	}
}

var imagenes = [];
imagenes["1000"] = "1000.png";
imagenes["500"] = "500.png";
imagenes["200"] = "200.png";
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";

var caja = [];
var entregado = [];
caja.push(new Billete(1000,15) );
caja.push(new Billete(500,10) );
caja.push(new Billete(200,5) );
caja.push(new Billete(100,10) );
caja.push(new Billete(50,4) );
caja.push(new Billete(20,10) );
caja.push(new Billete(10,10) );

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var boton = document.getElementById("extraer");
cantidad.addEventListener("click", existencia);
boton.addEventListener("click", entregarDinero);

function entregarDinero() 
{
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	for (var bi of caja)
	{

		if(dinero > 0)
		{
			div = Math.floor(dinero / bi.valor);

			if(div > bi.cantidad)
			{
				papeles = bi.cantidad;
			}
			else
			{
				papeles = div;
			}

			entregado.push( new Billete(bi.valor, papeles) );
			dinero = dinero - (bi.valor * papeles);
			bi.cantidad -= papeles;
		}
	}
	if (dinero > 0 && caja <= 0) 
	{
		resultado.innerHTML = "Soy un cajero malo y no puedo darte esa cantidad";
	}
	
	else 
	{
		resultado.innerHTML += "<p>Retiraste:<br/>";
		for(var e of entregado)
		{
			if (e.cantidad > 0) 
			{
				resultado.innerHTML +=  e.cantidad + " billetes de $" + e.valor + "<br/>";
				for(var bi = 1; bi <= e.cantidad ;bi++)
    				{
    					resultado.innerHTML += "<img src=" + e.imagen.src + " />" + "<br/>";
					}
	
			}
		}
	}
}

function existencia()
{
  var total = 0;

  	for(var bi of caja)
  	{
    	total += bi.valor * bi.cantidad;
  	}
  alert("La cantidad actual de dinero es de $" + total);
}