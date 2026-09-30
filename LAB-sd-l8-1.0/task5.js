

export class Player {
    constructor(name , level) {
    this.name = name;
    this.level = level;
    this.point = 0;

  
    }
    info(){

    console.log(this.name + " has reached Level " + this.level + "!" + this.point/100);

    }
    levelUp(){

     this.level = this.level + 1;

    }
    
    pointmejoras(puntos){

      this.point = this.point + puntos; 
          console.log(this.name , "gano" , puntos);
                  
        if (this.point >= 100) {
            this.levelUp(); 
           this.point = this.point - 100;
            console.log(this.name ,"subió de nivel" );


    }  
    
    }
  }
  export const  jugador  = new Player ("cristian" , 1 );
  
jugador.info();
jugador.pointmejoras(70);
jugador.pointmejoras(30);
jugador . info();

