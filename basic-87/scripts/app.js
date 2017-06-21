$(function () {
	

	function displayVehicules () {
		$.ajax({
			url: "php/api.php",
			method : "GET"
		})

		.done(function(data){
			var content;
			for (var i = 0; i < data.length; i++) {
				content += "Marque : " + data[i].Marque + " Modèle : " + data[i].Modele
			}
			$('#right_column nav ul').html(content);
		})

		.fail(function(jqXHR, textStatus){
			
		});
	}

})