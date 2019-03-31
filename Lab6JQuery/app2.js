$(function () {
   
    $("inputNumber").keydown(function(){

       let x=$("inputNumber").val();
            
              
       });

    $("inputNumber").keyup(function(){

       
        let y=numberWithCommas(x);
        $("inputNumber").val(y);          
               
        });



   
});
function numberWithCommas(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}