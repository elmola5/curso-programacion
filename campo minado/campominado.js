//campo minado


function ganador()
{

	alert(" gantaste ")
	document.write("<h1> Eres un ganador </h1>");

}

function perdedor()
{
	alert("BOOM!!!!!!!!")
	document.write("<h1>perdedor ,pisaste una mina</h1>");
}


var opcionUsuariox
var opcionUsuarioy
opcionUsuariox = prompt("elije una opcion en x entre (0-2)");
opcionUsuarioy = prompt("elije una opcion en y entre (0-2)");


var campo
campo = [ [1,0,0] , [0,1,0] , [1,1,1] ];





if(opcionUsuariox <= 2 && opcionUsuarioy <=2)

	
{
	var terreno = ["cesped" ,"BOMBA"];
	var opcion = campo[opcionUsuariox][opcionUsuarioy];
	var pantalla = terreno[opcion];
	

	

	if (opcion == 0) 
	{	

		document.write("<h1>pisaste</h1>" + pantalla);
		ganador();
	}

	else
	{
		document.write("<h1>pisaste</h1>" + pantalla);
		perdedor();
	}


}

else
{
	document.write("pisaste afuera del campo");
	perdedor();
}