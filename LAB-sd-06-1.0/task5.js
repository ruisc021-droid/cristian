
function FriendsList() {
  this.list = []; 
}



const prompt = require('prompt-sync')();


const newMail = new FriendsList(); 
const cantidad = parseInt(prompt("¿Cuántos nombres deseas agregar?: "));


for (let i = 0; i < cantidad; i++) {
  const name = prompt("Ingrese el nombre: ");
  newMail.list.push(name); 

}
console.log(newMail.list);
