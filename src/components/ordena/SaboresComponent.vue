<template>
  <div class="sabores">
    <h3>Elige el sabor</h3>
    <div class="grid-container">
      <div
        class="grid-item"
        v-for="pastel in pasteles"
        :key="pastel.id"
        :src="pastel.url"
        :alt="pastel.name"
        :price="pastel.price"
      >
        <img :src="pastel.url" :alt="pastel.name" class="banner" />
        <p>{{ pastel.name }}</p>
        <p>${{ pastel.price }}</p>
        <input type="checkbox" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'SaboresComponent',

  setup() {
    const pasteles = ref([
      {
        id: 'chocolate', url: require('@/assets/pastel/chocolate.jpeg'),
        name: 'chocolate',
        price: '350.00'
      },
      {
        id: 'color-turquesa', url: require('@/assets/pastel/color-turquesa.jpeg'),
        name: 'color-turquesa',
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
        id: 'chocoDoble', url: require('@/assets/pastel/doble-chocolate.jpeg'),
        name: 'chocoDoble',
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
        id: 'cupcakes-happy', url: require('@/assets/pastel/cupcakes-happy.jpeg'),
        name: 'cupcakes-happy',
        price: '50.00'
      },
      {
        id: 'cupcakes', url: require('@/assets/pastel/cupcakes.jpeg'),
        name: 'chocoCupcakes',
        price: '50.00'
      }
    ])
    return { pasteles }
  }
}
</script>


<style scoped>
.sabores {
  margin-top: 50px;
  width: 50vw;
}

.grid-container {
  display: grid;
  /* width: 250px !important; */
  width: 50vw;
  margin-top: 20px;
  margin-left: 50px;
  grid-template-columns: auto auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
}

.grid-item {
  height: 180px;
  width: 150px;
  margin: 5px;
  padding: 20px !important;
  align-items: center;
  border: 3px solid #000;
  border-radius: 5px;
}

.banner {
  margin: -25px auto auto -20px;
  height: 41px;
  width: 144px;
  object-fit: cover;
}

h3 {
  text-align: center;
  color: #262261;
}
</style>