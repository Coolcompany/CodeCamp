debugger;
fetch('http://127.0.0.1:5500/ccodecamp/Lab4Pointer/homework2_1_.json')

    .then(function(response) { 
            return response.json(); 
    })
    .then(function(employees) {
         let newEmployees ={};
         newEmployees = addAdditionalFields(employees);
        
         showTable(newEmployees);  
         showOldTable(employees);
         
         
    })
    
    .catch(error =>{
            console.error('Error',error);
    }); 


    function addYearSalary(row){
        let yearSalary = row.salary *12;
        row.yearSalary = yearSalary;

        return row;
    }
    function addNextSalary(row){
        let nextSalary = [];
        let s0 = Number(row.salary);
        let s1 = Number(s0 + (s0*0.1));
        let s2 = Number(s1 + (s1*0.1));
        

        row.nextSalary = [s0,s1,s2];

        return row;
    }
    function addAdditionalFields(obj) {
        let newObj ={};

        for (let i in obj ){  

           newObj[i] = addYearSalary(obj[i]);
           newObj[i] = addNextSalary(obj[i]);

        }
        return obj;
    }


    function showTable(peopleSalary){  
                
        for (let indexArr in  peopleSalary )
        {   
            if (indexArr<1) {

                let firstArr = peopleSalary[indexArr];
                let html ="<tr>";
                for (let indexInnerArr in firstArr){

                   
                    html +="<th>"+ indexInnerArr + "</th>";
                 
                    
                }
                html += "</tr>";
                $('#myTable2').append( html);
            }
            
        }


        for (let index in peopleSalary){
                
                let id =  `${peopleSalary[index].id}`;
                let firstname =  `${peopleSalary[index].firstname}`;
                let lastname = `${peopleSalary[index].lastname}`;
                let company = `${peopleSalary[index].company}`;
                let salary = `${peopleSalary[index].salary}`;
                let yearSalary = `${peopleSalary[index].yearSalary}`;

                let markup = "<tr><td>" + id + "</td><td>" + firstname +"</td><td>" + lastname +"</td><td>"+ company +"</td><td>"+ salary +"</td><td>"+ yearSalary +"</td><td><ol>";

                let nextSalary = peopleSalary[index].nextSalary;

                for (let indexNextSalary in nextSalary){
                    markup += "<li>"+ nextSalary[indexNextSalary] +"</li>";

                }
                   
                markup += "</ol></td></tr>";
                $('#myTable2').append(markup);  

             }

        }
        function showOldTable(peopleSalary){
            let markupH = "<tr><th>id</th><th>firstname</th><th>lastname</th><th>company</th><th> salary </th>";
            $('#myTable1').append(markupH);  

            for (let index in peopleSalary){
                
                let id =  `${peopleSalary[index].id}`;
                let firstname =  `${peopleSalary[index].firstname}`;
                let lastname = `${peopleSalary[index].lastname}`;
                let company = `${peopleSalary[index].company}`;
                let salary = `${peopleSalary[index].salary}`;
                

                let markup = "<tr><td>" + id + "</td><td>" + firstname +"</td><td>" + lastname +"</td><td>"+ company +"</td><td>"+ salary +"</td>";

                                   
                markup += "</tr>";
                $('#myTable1').append(markup);  

             }

        }
