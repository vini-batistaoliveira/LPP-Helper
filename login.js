$(document).ready(function(){
	$(document).on("click", "#btn-enter-login", function(){
		var valor = $("#text-login").val();

		console.log("Valor " + valor);
		
		if(valor == "adm"){
			window.location = "adm.html";
		} else{
			window.location = "tela.html";
		}	
	});

	$(document).on("click", "#indicadores", function(){
			window.location = "indicadores.html";
	});
});