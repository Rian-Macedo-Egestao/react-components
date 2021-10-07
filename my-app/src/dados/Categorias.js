class Categorias {
    constructor(){
        this.categorias = []
        this._inscritos = []
    }
    inscrever(func){
        this._inscritos.push(func);
    }
    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias)
        })

    }
    novaCategoria(nomeCategoria){
        this.categorias.push(nomeCategoria);
        this.notificar()
    }
}
export default Categorias