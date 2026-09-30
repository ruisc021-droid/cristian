

export class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        this.point = 0;
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
}

export class Grupo {
    constructor(nombre) {
        this.nombreGrupo = nombre;
        this.miembros = []; // Matriz de miembros
    }

    agregarJugador(nuevoJugador) {
        this.miembros.push(nuevoJugador);
        console.log(nuevoJugador.name + " se unió al grupo " + this.nombreGrupo);
    }
}



export const jugador = new Player("cristian", 1);
export const jugador2 = new Player("Fernanda", 2);

jugador.info();
jugador.pointmejoras(70);
jugador.pointmejoras(30);
jugador.info();

const miGrupo = new Grupo("Escuadron alfa lobo dinamita");


miGrupo.agregarJugador(jugador);
miGrupo.agregarJugador(jugador2);

console.log("\nLista de miembros actual:");
console.log(miGrupo.miembros);
