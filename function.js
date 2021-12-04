function Main() {
    
     this.student = (marks) => {

           let gpa;
           let grade;
           
          if( marks >= 0 && marks < 33 ){
               gpa =  0 ;
               grade = 'F' ;
          }else if( marks >= 34 && marks < 40 ){
               gpa =  1 ;
               grade = 'D' ;
          }else if( marks >= 40 && marks < 50 ){
               gpa =  2 ;
               grade = 'C';
          }else if( marks >= 50 && marks < 60 ){
               gpa =  3 ;
               grade = 'B';
          }else if( marks >= 60 && marks < 70 ){
               gpa =  3.5 ;
               grade = 'A-';
          }else if( marks >= 70 && marks < 80 ){
               gpa =  4 ;
               grade = 'A';
          }else if( marks >= 80 && marks <= 100 ){
               gpa =  5 ;
               grade = 'A+';
          }

          return{
               gpa : gpa,
               grade : grade,
          }


     } 



     this.final = (bn,en,math,s,ss, reli) => {
           
           let cgpa;
           let finalGrade;
           let totalgpa = this.student(bn).gpa + this.student(en).gpa + this.student(math).gpa +  this.student(s).gpa + this.student(ss).gpa + this.student(reli).gpa;

           cgpa = totalgpa / 6 ;
 
           if( bn <= 32 || en <= 32 || math <= 32 || s <= 32 || ss <= 32 || reli <= 32 ){
               finalGrade = 'F'
           }else if ( cgpa >= 0 && cgpa < 1 ) {
                finalGrade = 'F'

           }else if ( cgpa >= 1 && cgpa < 2  ) { 
               finalGrade = 'D' 
           }else if ( cgpa >= 2 && cgpa < 3 ) { 
               finalGrade = 'C' 
           }else if ( cgpa >= 3 && cgpa < 3.5  ) { 
               finalGrade = 'B' 
           }else if ( cgpa >= 3.5 && cgpa < 4  ) { 
               finalGrade = 'A-' 
           }else if ( cgpa >= 4 && cgpa < 5 ) { 
               finalGrade = 'A' 
           }else if ( cgpa == 5 ) { 
               finalGrade = 'A+' 
           }


           return{
               finalcgp :(finalGrade == 'F') ? 'Failed' : cgpa.toFixed(2),
               finalGrade : finalGrade,
           }


     }

    
}