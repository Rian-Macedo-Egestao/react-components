class Notas {
    constructor(){
        this.notas = []
        this._inscritos = []
    }

    inscrever(func){
        this._inscritos.push(func);
    }
    notificar(){
        this._inscritos.forEach(func => {
            func(this.notas)
        })

    }

    novaNota(titulo, categoria, texto){
        const nota = new Nota(titulo, categoria , texto)
        this.notas.push(nota);
    }
    apagarNota(index){
        this.notas.splice(index, 1)
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