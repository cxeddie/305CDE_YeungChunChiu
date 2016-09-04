<?php

  $hostname = "localhost";
  $username = "root";
  $password = "root";
  $dbname   = "drugapp";
  
  $link = mysqli_connect($hostname, $username, $password, $dbname);
  mysqli_set_charset($link,'utf8');

  if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>