


var c;
var t;
var b;

function calcular()
{
	var numero = Number(t.value);
	calcular = 2;

	for(n=1;n<=3;n++)

	{

		numero = (numero * 2)
	}

	c.innerHTML = numero + " ";
}



function inicio ()
{
	c = document.getElementById("caja");
	t = document.getElementById("text");
	b = document.getElementById("botoncito");

	b.addEventListener("click",calcular);

	var numero  = 1;
	var residuo;
	while (numero <= 50)
	{

		var residuo = numero % 2;

		if (residuo == 0) 
		{
			c.innerHTML += numero + " ";
		}

		numero++;
	}

	
	

}


