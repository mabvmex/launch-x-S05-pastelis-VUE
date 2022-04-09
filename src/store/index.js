import { createStore } from 'vuex';

export default createStore ({
  state: {
    counter: 0,
   sabores: [
      {
        id: 'chocolate', url: require('@/assets/pastel/chocolate.jpeg'),
        name: 'chocolate',
        price: '350.00'
      },
      {
        id: 'turquesa', url: require('@/assets/pastel/color-turquesa.jpeg'),
        name: 'turquesa',
        price: '220.00'
      },
      {
        id: 'colorido', url: require('@/assets/pastel/colorido.jpeg'),
        name: 'colorido',
        price: '300.00'
      },
      {
        id: 'combinado', url: require('@/assets/pastel/combinado.jpeg'),
        name: 'combinado',
        price: '250.00'
      },
      {
        id: 'crebanadas', url: require('@/assets/pastel/crebanadas.jpeg'),
        name: 'crebanadas',
        price: '50.00'
      },
      {
        id: 'chocoDo', url: require('@/assets/pastel/doble-chocolate.jpeg'),
        name: 'chocoDo',
        price: '225.00'
      },
      {
        id: 'elegante', url: require('@/assets/pastel/elegante.jpeg'),
        name: 'elegante',
        price: '300.00'
      },
      {
        id: 'fresas', url: require('@/assets/pastel/fresas.jpeg'),
        name: 'fresas',
        price: '350.00'
      },
      {
        id: 'frutas', url: require('@/assets/pastel/frutas.jpeg'),
        name: 'frutas',
        price: '250.00'
      },
      {
        id: 'limon', url: require('@/assets/pastel/limon.jpeg'),
        name: 'limon',
        price: '200.00'
      },
      {
        id: 'mario-1', url: require('@/assets/pastel/mario-1.png'),
        name: 'mario-1',
        price: '320.00'
      },
      {
        id: 'mario-2', url: require('@/assets/pastel/mario-2.jpeg'),
        name: 'mario-2',
        price: '380.00'
      },
      {
        id: 'happy', url: require('@/assets/pastel/cupcakes-happy.jpeg'),
        name: 'happy',
        price: '50.00'
      },
      {
        id: 'chocoCup', url: require('@/assets/pastel/cupcakes.jpeg'),
        name: 'chocoCup',
        price: '50.00'
      }
    ]
  },
  getters: {

  },
  mutations: {
    ejecutarContador(state){
        state.counter++
    }
  },
  actions: {

  },
  modules: {

  }
})