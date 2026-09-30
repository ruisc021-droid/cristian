// Refer to Task 3 in your Instructions to complete this task

for (let numero = 1; numero <=105; numero++) {

  if  (numero %3 === 0 && numero %5 === 0){
    console .log ("Fizz Buzz");
  }
    else if  (numero % 3 === 0) {
        console .log ("Fizz");
    }
   else  if  (numero % 5 === 0){
      console .log ("Buzz");
      
    }else{
       console .log (numero);
    }
    
   };
