
$(function(){
	displayVehicules();

	$("#form-ajout").submit(function(e){
		e.preventDefault();
		$.ajax({
			url:"php/api.php",
			method:"post",
			data: $('form').serialize(),
		})
		.done(function(data){
			$('#message_ajax').html("<div class='alert alert-success'><strong>Success !</strong></div>");
			console.log("Yeah ! Le véhicule a bien été ajouté !");
			displayVehicules();
		})
		.fail(function(jqXHR, textStatus){
			$error_message = "<div class='alert alert-danger'><strong>Failed !</strong></div>";
			$('#message_ajax').html($error_message);
			alert("Request failed: " + textStatus);

		});
	
	$errorMessage = "Erreur du chargement des véhicules";

	function displayVehicules () {
		$.ajax({
			url: "php/api.php",
			method : "GET"
		})

		.done(function(data){
			var content;
			for (var i = 0; i < data.length; i++) {
				content += "<li>Marque : " + data[i].Marque + " Modèle : " + data[i].Modele + "</li>";
			}
			$('#right_column nav ul').html(content);
		})

		.fail(function(jqXHR, textStatus){
			$('#affichage_vehicules').html($errorMessage);
		});
	}
    
})