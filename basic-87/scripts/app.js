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
	
})