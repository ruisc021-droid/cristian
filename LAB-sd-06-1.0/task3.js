// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
  }
  
  //Type your code below this line!
  
  const newMail = new Mail(require('prompt-sync')()("Ingrese el asunto:"), require('prompt-sync')()("Ingrese el mensaje:"));
  // Type your code above this line!
  
  console.log(newMail.subject + " " + newMail.message);