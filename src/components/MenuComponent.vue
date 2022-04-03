<template>
  <section class="menu" id="menu">
    <div class="titulo-menu">
      <h2>Conoce nuestro menú</h2>
    </div>

    <div class="col">
      <div class="info">
        <div
          class="card"
          v-for="pastel in pasteles"
          :key="pastel.id"
          :src="pastel.url"
          :alt="pastel.name"
          :price="pastel.price"
        >
          <a href="#chocolate">
            <img :src="pastel.url" :alt="pastel.name" :price="pastel.price" />
            <div class="card-body">
              <p class="card-text"> Pastel: {{pastel.name}} </p>
              <p class="card-text"> MXN ${{pastel.price}} </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { ref } from 'vue';
export default {
  name: 'MenuComponent',

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
.titulo-menu {
  padding: 20px;
  margin-top: 10px;
  border-bottom: #262262 solid 3px;
  margin-bottom: 100px;
}

h2 {
  text-align: center;
  font-size: 44px;
  color: #1bab61;
}

.info img {
  width: 250px;
  height: 250px;
  margin: 15px;
}

img {
  object-fit: cover;
}

.info {
  position: relative;
  text-align: center;
  color: #316b83;
  font-weight: 800;
}

a:link {
  text-decoration: none;
}

.card {
  margin: 5px;
  max-width: 18rem;
  display: inline-block;
}
</style>