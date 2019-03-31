debugger;
$(function () {
           $('#btnOK').click(function () {
               $.get('https://swapi.co/api/people').then(function (res) {
                
                for (let key in  res )
                {   
                    let object = res[key]
                    for (let key2 in object) {
                       alert(object[key2])
                    }
                      
                       
                   
                    
                }
                    
                  
            });


        });
      });
