<?php	
	$username = $_POST['username'];
	$password = $_POST['password'];
	// Database connection
	$conn = new mysqli('localhost','root','','test1');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die('Connection Failed : '. $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(username, password) values(?, ?)");

		// Check if the prepare statement was successful
		if(!$stmt) {
			die('Prepare statement failed: ' . $conn->error);
		}

		$stmt->bind_param("ss", $username, $password);
		
		// Check if the binding of parameters was successful
		if(!$stmt) {
			die('Binding parameters failed: ' . $stmt->error);
		}

		$stmt->execute();

		// Check if the execution was successful
		if($stmt->affected_rows > 0) {
			echo "Registration successfully...";
		} else {
			echo "Registration failed: " . $stmt->error;
		}

		$stmt->close();
		$conn->close();
	}
?>