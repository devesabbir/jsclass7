

let result = new Main();








studentData.forEach( data => {
     console.log(`
              
               Name                      : ${data.Name}
               Roll                      : ${data.Roll}
               Bangla                    : ${data.Bn}
               English                   : ${data.En}
               Math                      : ${data.Math}
               Science                   : ${data.S}
               Social Science            : ${data.SS}
               Religion                  : ${data.Reli}

               Result         Marks             GPA                      GRADE
               Bangla       ${data.Bn}         ${result.student(data.Bn).gpa}      ${result.student(data.Bn).grade}
               English      ${data.En}         ${result.student(data.En).gpa}      ${result.student(data.En).grade}
               Math        ${data.Math}        ${result.student(data.Math).gpa}    ${result.student(data.Math).grade}
               Science       ${data.S}         ${result.student(data.S).gpa}       ${result.student(data.S).grade}
               Social Scienc ${data.SS}        ${result.student(data.SS).gpa}      ${result.student(data.SS).grade}
               Religion    ${data.Reli}        ${result.student(data.Reli).gpa}    ${result.student(data.Reli).grade}
        --------------------------------------------------------------------------------------------------------------
          total GPA =   ${result.final(data.Bn, data.En, data.Math, data.S, data.SS, data.Reli).finalcgp}   ${result.final(data.Bn, data.En, data.Math, data.S, data.SS, data.Reli).finalGrade}
        `);
})