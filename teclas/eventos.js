var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT:37,
	RIGTH:39
};
console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

var estado = 0;
var colorLinea = "red";
var cuadrito = document.getElementById("area_de_dibujo");
var	papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujarTeclado(evento)
{
	var colorcito = "red";
	var movimiento = 5;

	switch(evento.keyCode)
	{
		case teclas.UP:
		dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
		y = y - movimiento;
		break;

		case teclas.DOWN:
		dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
		y = y + movimiento;
		break;

		case teclas.RIGTH:
		dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
		x = x + movimiento;
		break;

		case teclas.LEFT:
		dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
		x = x - movimiento;
		break;
	}
	
}

function dibujarMouse(evento)
{
	if (estado == 1) 
	{
		dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
	}
	x = evento.layerX;
	y = evento.layerY;
}

function presionarMouse(evento)
{
	estado = 1;
	x = evento.layerX;
	y = evento.layerY;
}

function soltarMouse (evento)
{
	estado = 0;
	x = evento.layerX;
	y = evento.layerY;
}