$(function () {
	
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