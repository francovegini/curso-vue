new Vue({
    el: '#desafio',
    data: {
        name: 'Franco Vegini',
        age: '18',
        imageLink: 'https://www.torcedores.com/content/uploads/2017/10/torcida-flamengo-maracana-lotado.jpg'
    },
    methods: {
        multiplyAge() {
            return this.age * 3;
        },

        randomNumber() {
            return Math.random();
        }
    }
});
