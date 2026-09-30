export class Player {
    constructor(name , level) {
    this.name = name;
    this.level = level;

  
    }
    info(){

    console.log(this.name + " has reached Level " + this.level + "!");

    }
   
  }
  export const  jugador  = new Player ("cristian" , 2 );
  
jugador.info();

