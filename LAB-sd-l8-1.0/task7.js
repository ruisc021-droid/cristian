export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.point = 0;
        this.inventario = {};
    }

    info() {
        console.log(this.name + " has reached Level " + this.level + "! Puntos: " + this.point);
    }

    levelUp() {
        this.level = this.level + 1;
    }

    pointmejoras(puntos) {
        this.point = this.point + puntos;
        console.log(this.name, "ganó", puntos);

        if (this.point >= 100) {
            this.levelUp();
            this.point = this.point - 100;
            console.log(this.name, "subió de nivel");
        }
    
      }
      agregarObjeto(totem, cantidad = 1) {
        if (this.inventario[totem]) {
            this.inventario[totem] += cantidad; 
        }
          
            else {
            this.inventario[totem] = cantidad;  
        }
        console.log("+ Se añadió " + cantidad + "," + totem +  " al inventario de " + this.name + ".");
    }
}
export const jugador = new Player("cristian", 1);


jugador.agregarObjeto("espada de madera", 1 );


jugador.info();