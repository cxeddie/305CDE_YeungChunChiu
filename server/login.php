<?php

require("common.php");

  	// Get username
	$username = $_POST['username'];
	// Get password
	$password = $_POST['password']; 

	  $sql = "select * from users where username = '$username' and password = '$password'";

      $result = mysqli_query($link, $sql);
      $row = mysqli_fetch_assoc($result);

      if ($row['username'] == $username && $row['password'] == $password) {
        $response_array['status'] = 'success';
      } else {
        $response_array['status'] = 'error'; 
      }

	  echo json_encode($response_array);

// close mysql connection
mysqli_close($link);