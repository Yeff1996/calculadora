"user strict"

class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();
        this.tipoDeOperacion = undefined;
        this.valorAnterior = "";
        this.valorActual = "";
        this.signos = {
            suma : "+",
            resta : "-",
            multiplicacion : "x",
            divicion : "%"
        };
    }

    borrarTodo(){
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoDeOperacion = undefined;
        this.imprimirValores();
    }

    borrarNumero(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    agregarNumero(numero){
        if (numero === "." && this.valorActual.includes(".")) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores()
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoDeOperacion] || ''}`;
    }

    calcular(){
        const valorActual = parseFloat(this.valorActual);
        const valorAnterior = parseFloat(this.valorAnterior);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return

        this.valorActual = this.calculadora[this.tipoDeOperacion](valorAnterior, valorActual);
        this.imprimirValores();
    }

    computar(operador){
        this.tipoDeOperacion !== "resolver" && this.calcular();
        this.tipoDeOperacion = operador;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }
};