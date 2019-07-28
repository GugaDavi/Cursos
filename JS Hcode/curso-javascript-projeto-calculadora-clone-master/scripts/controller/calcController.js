class CalcController {

    
    // Constructor é executado imediatamente quando a classe é chamada
    constructor () {

        // Aqui criei uma variavel para cada elemento utilzando o id do css deles
        // querySelector('id do css') - Seleciona um elemento com base no id css
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl =  document.querySelector('#data');
        this._timeEl =  document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
        console.log(this)
    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);
    }

    // Função para percorrer cada cada evento possivel
    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }
    
    // Metodo para selecionar todos os butões da calculadora
    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');
        
        // forEach para passar na item por item da listaw
        buttons.forEach((btn, index) => {
            // Como o metodo addEventListener suporta somente um evento por vez, criaremos uma função para percorrer cada evento
            this.addEventListenerAll(btn, 'click drag', e => {
                console.log(btn.className.baseVal.replace('btn-', ''))
            });
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e =>{
                btn.style.cursor = 'pointer'
            })
        })
    }

    // Metodo para pegar data e hora exata da bios
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    // A propriedade innerHTML faz o seguinte: pega o objeto.innerHTML = 'valor'
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor) {
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate (value) {
        this._currentDate = value;
    }
    get displayDate () {
        return this._dateEl.innerHTML;
    }
    set displayDate (value) {
        this._dateEl.innerHTML = value;
    }
    get displayTime () {
        return this._timeEl.innerHTML;
    }
    set displayTime (value) {
        this._timeEl.innerHTML = value;
    }

}