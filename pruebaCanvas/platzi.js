var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var xCerdo = 420;
var yCerdo = -15;

var fondo = {
  url: "tile.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var pollo = {
  url:"pollo.png",
  cargaOK: false
};

var cerdo = {
  url:"cerdo.png",
  cargaOK: false,
  posX: xCerdo,
  posY: yCerdo
};

var posVacas = {    //Arreglo posición vacas
    vacasX: [],
    vacasY: []
};

var posPollos = {   //Arreglo posición pollos
    pollosX: [],
    pollosY: []
};

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var cantidad = aleatorio(5, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


document.addEventListener('keydown', moverCerdo);
function moverCerdo(evento) //El animal se mueve.
{
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            if(0 <= yCerdo)
            {
                yCerdo = yCerdo - movimiento;
                reDibujar();
            } 
        break;
        case teclas.DOWN:
            if(yCerdo <= 420)
            {
                yCerdo = yCerdo + movimiento;
                reDibujar();
            }
        break;
        case teclas.LEFT:
            if(0 <= xCerdo)
            {
                xCerdo = xCerdo - movimiento;
                reDibujar();
            }
        break;
        case teclas.RIGHT:
            if(xCerdo <= 420)
            {
                xCerdo = xCerdo + movimiento;
                reDibujar();
            }            
        break;
        default:
            console.log("otra tecla");
        break;
    }
}


function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdo ()
{
  cerdo.cargaOK = true;
  dibujar();
}


function dibujar()
{

  if(fondo.cargaOK)

  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)

  {

    console.log(cantidad);

   for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
      posVacas.vacasX[v] = x;
      posVacas.vacasY[v] = y;
    }
  }

  if(pollo.cargaOK)
  {

    console.log(cantidad);

    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
      posPollos.pollosX[v] = x;
      posPollos.pollosY[v] = y;
    }
  }

  if(cerdo.cargaOK)
  {

    console.log(cantidad);
    papel.drawImage(cerdo.imagen, cerdo.posX, cerdo.posY);
  }
}


function reDibujar()    //Redibuja con posiciones de vacas y pollos bloqueada.
{
    
    papel.drawImage(fondo.imagen, 0, 0);

    for(var i=0; i < cantidad; i++)
    {
        papel.drawImage(vaca.imagen, posVacas.vacasX[i], posVacas.vacasY[i]);
    }
    
    papel.drawImage(cerdo.imagen, xCerdo, yCerdo);

    for(var i=0; i < cantidad; i++) 
    {
        papel.drawImage(pollo.imagen, posPollos.pollosX[i], posPollos.pollosY[i]);
    }
}


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}