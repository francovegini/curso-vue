new Vue({
    el: '#desafio',
    data: {
        executar: false,
        classeCss: 'c1',
    },
    methods: {
        iniciarEfeito() {
            this.executar = !this.executar;
        },
        iniciarProgresso() {

        }
    },
    computed: {
        estilo1() {
            return {
                estilo1: true,
                estilo2: true,
            }
        }
    }
});
