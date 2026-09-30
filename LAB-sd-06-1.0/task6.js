function ListaDeCompras() {
  this.elementos = []; 
  
  this.agregar = function(producto, cantidad) {
    var nuevoItem = {
      producto: producto,
      cantidad: cantidad
    };
    
    this.elementos.push(nuevoItem);
  };
}


var miLista = new ListaDeCompras();

miLista.agregar("aceite", 2);
miLista.agregar("bolillos", 10);
miLista.agregar("lata de frijoles", 3);


console.log(miLista.elementos);
