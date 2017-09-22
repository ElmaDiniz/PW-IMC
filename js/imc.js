function calcularIMC ()
{
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;

	peso = (peso); 
	altura = (altura / 100);

	var imc = (peso/(altura*altura)).toFixed(2);

	//validar para que nenhum dos campos fique vazio
	if (isNaN(imc) || imc == "Infinity" || imc == 0)
	{
		document.getElementById("resultado").innerHTML = "Digite Peso e altura";
	}
	else{

	
	document.getElementById("resultado").innerHTML = imc;
	
	
	var parent = document.getElementById("representacao");
	var child = document.getElementById("imagemIMC");
	var imagem = document.createElement("img");
	imagem.setAttribute("id", "imagemIMC");

	if (imc >= 40)
	{
	imagem.setAttribute("src", "imagens/grau3.png");
	parent.replaceChild(imagem,child);
	}
	else if (imc >=30 && imc <= 39.9)
	{
	imagem.setAttribute("src", "imagens/grau2.png");
	parent.replaceChild(imagem,child);
	}
	else if (imc >=27 && imc <=29.9)
	{
	imagem.setAttribute("src", "imagens/grau1.png");
	parent.replaceChild(imagem,child);
	}
	else if (imc >=25 && imc <=26.9)
	{
	imagem.setAttribute("src", "imagens/sobrepeso.png");
	parent.replaceChild(imagem,child);
	}
	else if (imc >=18 && imc <=24.9)
	{
	imagem.setAttribute("src", "imagens/normal.png");
	parent.replaceChild(imagem,child);
	}
	else if (imc >=0 && imc <=17.9)
	{
	imagem.setAttribute("src", "imagens/baixo.png");
	parent.replaceChild(imagem,child);
	}


	
	notificacao.requestPermission();

	var nomes = document.getElementById("nomes").value;
	var sobrenome = document.getElementById("sobrenome").value;
	var sexo = document.getElementById("sexo").value;
	var icone = '';
	var mensagem = '';

	if (sexo == 1)
	{
		icone = 'imagens/woman.png';
		mensagem = 'Olá '+nomes+' '+sobrenome+' Seu IMC é: '+imc;
	}
	else 
	{
		icone = 'imagens/man.png';
		mensagem = 'Olá '+nomes+' '+sobrenome+' Seu IMC é: '+imc;
	}

	var title = 'ÍNDICE DE MASA CORPORAL';
	var extra = {
		icon:icone,
		body:mensagem + "Seu IMC"
	}
	
	var notificacao = new Notificacao(title,extra);
	setTimeout(function(){ notificacao.close()},5000);
	
	}//Fim do else

	notificacao.onclick = function()
	{
		if (sexo == 1)
		{
			window.open('#','_blank');
		}
		else 
		{
			window.open('#','_blank');
		}
	}

}