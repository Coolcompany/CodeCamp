$(function () {
    $('#submitBtn').click(function () {
        
         
        
        let email = $("#Email").val();     
        let a=validateEmail(email);
        
        if(a===false){
            
         //   $("#a").html("Email is not valid");
            $("#a").html("<p class='text-danger'>Email is not valid</p>");
        };
        



     });
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    return re.test(email);
  }


