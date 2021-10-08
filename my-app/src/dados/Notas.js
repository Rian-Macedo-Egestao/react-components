class Notas {
    constructor(){
        this.notas = []
        this._inscritos = []
    }

    inscrever(func){
        this._inscritos.push(func);
    }
    desisncrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }
    notificar(){
        this._inscritos.forEach(func => {
            func(this.notas);
        })

    }

    novaNota(titulo, categoria, texto){
        const nota = new Nota(titulo, categoria , texto);
        console.log(nota);
        this.notas.push(nota);
        this.notificar();
    }
    apagarNota(index){
        this.notas.splice(index, 1);
        this.notificar();
    }
}
class Nota {
    constructor(titulo, categoria, texto){
        this.titulo = titulo;
        this.categoria = categoria;
        this.texto = texto;
    }
}

export default Notas