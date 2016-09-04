<?php

require("common.php");

  	// Get username
	$username = $_POST['reg_username'];
	// Get password
	$password = $_POST['reg_password']; 

	  $sql = "insert into users( username , password ) values( '$username' , '$password' )";

	  $result = mysqli_query($link, $sql);

	  $sql2 = "select * from users where username = '$username' and password = '$password'"; 

	  $result2 = mysqli_query($link, $sql2);     
      $row = mysqli_fetch_assoc($result2);
     
      if ($row['username'] == $username && $row['password'] == $password) {
          $response_array['status'] = 'success'; 
      } else {
          $response_array['status'] = 'error'; 
      }

	  echo json_encode($response_array);

// close mysql connection
mysqli_close($link);