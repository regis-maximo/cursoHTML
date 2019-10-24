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

	document.write(semana[data.getDay()] + " - " + data.getDate() + "/" + meses[data.getMonth()] + "/" + data.getFullYear());
}