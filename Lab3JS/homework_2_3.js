function showTable(){  
            let peopleSalary = [
                {"id":"1001","firstname":"Luke","lastname":"Skywalker","company":"Walt Disney","salary":["40000","42000","48400"]},
                {"id":"1002","firstname":"Tony","lastname":"Stark","company":"Marvel","salary":["1000000","1100000","1210000"]},
                {"id":"1003","firstname":"Somchai","lastname":"Jaidee","company":"Love2work","salary":["20000","22000","24200"]},
                {"id":"1004","firstname":"Monkey D","lastname":"Luffee","company":"One Piece","salary":["9000000","9900000","1890000"]}
            ];
            
            for (let indexArr in  peopleSalary )
            {   
                if (indexArr<1) {

                    let firstArr = peopleSalary[indexArr];
                    let html ="<tr>";
                    for (let indexInnerArr in firstArr){

                        if(indexInnerArr!=="company"){
                           
                            html +="<th>"+ indexInnerArr + "</th>";
                        }
                        
                    }
                    html += "</tr>";
                    $('#myTable').append( html);
                }
                
            }


            for (let index in peopleSalary){
                    
                    let id =  `${peopleSalary[index].id}`;
                    let firstname =  `${peopleSalary[index].firstname}`;
                    let lastname = `${peopleSalary[index].lastname}`;
                    let markup = "<tr><td>" + id + "</td><td>" + firstname +"</td><td>" + lastname +"</td><td><ol>";

                    let salary = peopleSalary[index].salary;

                    for (let indexSalary in salary){
                        markup += "<li>"+ salary[indexSalary] +"</li>";

                    }
                       
                    markup += "</ol></td></tr>";
                    $('#myTable').append(markup);  

            }

}
