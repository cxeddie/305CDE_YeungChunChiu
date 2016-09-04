$(document).ready(function() {

  var loginuser = $.cookie("username");

  /* alert(loginuser); */

  if (loginuser) {
    $("#loginbox").hide();
    $("#dashboardbox").show();
    $("#logout").show();
    $("#dashboard-user").val(loginuser);
  }else{
    $("#loginbox").show();
    $("#dashboardbox").hide();
    $("#logout").hide();
  }


  /* Login */
  $("#loginbtn").on('click', function(){

    var username_cookie = $.cookie('username');

    var username = $("#username").val();
    var password = $("#password").val();

    if (username.length > 0 && password.length > 0) {
      $.ajax({
          url: 'server/login.php',
          type: 'post',
          dataType: 'json',
          data : $("#loginForm").serialize(),
          success: function(data){
            if(data['status'] == 'success'){
              $("[data-role=panel]").panel("close");
              $.cookie("username", username, {expires: 1});

              window.location = 'index.html';
            }else if(data['status'] == 'error'){
              alert("Authentication Invalid. Please try again!");
              return false;      
            }
          },
          error: function(xhr, resp, text) {
            alert("error");
            console.log(xhr, resp, text);
          }
        });

    }else{
      alert('Please fill all necessary fields');
    }
       
   });


  /* Logout */
  $("#logout").on('click', function(){
      $.ajax({
          url: 'server/logout.php',
          success: function(data) {
              $("[data-role=panel]").panel("close");
              $.cookie('username', "", -1);
              window.location = 'index.html';
          }
      });
  });


  /* Register */
  $("#regbtn").on('click', function(){

      var uname=$("#reg_username").val();
      var rp1=$("#reg_password").val();
      var rp2=$("#reg_password2").val();

    if(rp1 != rp2){
      alert("Password doesn't match!");
        return; 
    }

    if (uname.length > 0 && rp1.length > 0 && rp2.length > 0) {
      $.ajax({
          url: 'server/register_check.php',
          type: 'post',
          dataType: 'json',
          data : $("#regForm").serialize(),
          success : function(data) {
            console.log(data);
            if(data['status'] == 'success'){
                alert("Congratulation! Register success!");
                window.location = 'index.html';
              }else if(data['status'] == 'error'){
                alert("Register failed, please try again!");
                return false;      
              }
          },
          error: function(xhr, resp, text) {
              console.log(xhr, resp, text);
          }
      });
    }else{
      alert('Please fill all necessary fields');
    }

  });

  event.preventDefault();

});