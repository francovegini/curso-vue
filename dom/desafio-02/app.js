new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: ''
    },
    methods: {
        mostrarAlerta() {
            alert('Botao pressionado!')
        },
        armazenarValor(event) {
            this.valor = event.target.value;
        }
    }
})
