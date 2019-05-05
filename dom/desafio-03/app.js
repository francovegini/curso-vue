new Vue({
    el: '#desafio',
    data: {
        contador: 0,
    },
    computed: {
        resultado() {
            return this.contador == 37 ? 'Igual a 37' : 'Diferente de 37';
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.contador = 0;
            }, 5000);
        }
    },
});