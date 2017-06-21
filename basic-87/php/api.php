<?php 

try {
	$pdo = new PDO("mysql:host=localhost;dbname=mikemonroi","root","");
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
}

catch (PDOException $e) {
	echo "Message d'erreur : ".$e;
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {

	$request = "INSERT INTO vehicules (Marque, Modele, Annee, Couleur, Image) VALUES (:Marque, :Modele, :Annee, :Couleur, :Image)";

	$prep = $pdo->prepare($request);

	$prep->bindValue(':Marque', $_POST['Marque'], PDO::PARAM_STR);
	$prep->bindValue(':Modele', $_POST['Modele'], PDO::PARAM_STR);
	$prep->bindValue(':Annee', $_POST['Annee'], PDO::PARAM_STR);
	$prep->bindValue(':Couleur', $_POST['Couleur'], PDO::PARAM_STR);
	$prep->bindValue(':Image', $_POST['Image'], PDO::PARAM_STR);
	$prep->execute();

}

else if($_SERVER['REQUEST_METHOD'] == 'GET') {

	$request = "SELECT * FROM vehicules";

	$prep = $pdo->prepare($request);
	$prep->execute();

	echo json_encode($prep->fetchAll(PDO::FETCH_ASSOC));

}


?>