  let studentRecords = [ {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } ] ;

        let result= studentRecords.filter(item => item.name).map(item => item.name); 
        console.log(result); // [ 'John', 'Baba', 'yaga', 'Wick' ]

        let name1=studentRecords.map(item =>item.name);
        console.log(name1); //[ 'John', 'Baba', 'yaga', 'Wick' ]

        let name2 = studentRecords.map( stu => stu.name.toUpperCase());
        console.log(name2); // logs: [ 'JOHN', 'BABA', 'JOHN', 'WICK' ]

        let name3 = studentRecords.filter(stu => stu.marks > 50);
        console.log(name3);  //[ { name: 'John', id: 123, marks: 98 },
                              //{ name: 'Wick', id: 115, marks: 75 } ]
      

        let name4 = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
         console.log(name4); //logs: [ { name: 'John', id: 123, marks: 98 } ]

         let totalMarks1 = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
         console.log(totalMarks1);// logs: 241

         let name5 = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
         console.log(name5); // logs: [ 'John', 'Wick' ]

         let totalMarks2 = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
         console.log(totalMarks2); // logs: 143

         let totalmarks3=studentRecords.map(function(stu)
        {
         if(stu.marks<50)
         {
         stu.marks += 15;
         }
          return stu;
          }).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
            console.log(totalmarks3); //logs : 233
