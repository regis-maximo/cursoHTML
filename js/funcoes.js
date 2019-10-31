function validar() {
	if(document.cadastro.tnome.value === "") {
		alert("Campo nome é obrigatório");
		document.cadastro.tnome=focus();
		return false;
	}
}

function mudaCor(obj, tipo) {
	if(tipo === 1) {
		obj.style.backgroundColor = "#ff0000";
		obj.style.color = "#ffffff";

	} else if (tipo === 2) {
		obj.style.backgroundColor = "#ffffff";
		obj.style.color = "#000000";
	}
}

function dt() {
	var data = new Date();

	var meses = Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
	 "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
	
	var semana = Array("Domingo", "Segunda-feira", "Terça-feria",
	 "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");

	document.write(semana[data.getDay()] + " - " + data.getDate() + "/"
    + meses[data.getMonth()] + "/" + data.getFullYear());
}
//Funcôes da aula 38 Slider de Imagens


function preload() {
	imgs = Array('imagens/imagem1.jpg', 
   'imagens/imagem1.jpg', 'imagens/imagem1.jpg', 'imagens/imagem1.jpg', 'imagens/imagem1.jpg');
    qtdimgs = imgs.length;
	for(i = 0; i < qtdimgs; i++) {
		var preloading = new image();
		preloading.src = imgs[i];
	}
}
   
function carregar() {
    max = 4;
	min = 1;
	fi = min;
	fa = max;
    tr = true;
	trocar("imagens/imagem1.jpg");

	document.getElementById('moldura').addEventListener('transitionend', fim);
}

function fim() {
	tr = true;
}

function trocar(imagem) {
    
	document.getElementById('moldura').style.backgroundImage = "URL("+imagem+")";

}

function prox() {
     if(tr) { 
     	tr = false;
	 fi++;

     if(fi > max) {
	 fi = min;

	  }
	}
	 trocar("imagens/imagem"+fi+".jpg");
}
function ant() {

	if(tr) { 
     	tr = false;

	fa--;
	if(fa < min) {
		fa = max;
	}
}
	trocar("imagens/imagem"+fa+".jpg");
}