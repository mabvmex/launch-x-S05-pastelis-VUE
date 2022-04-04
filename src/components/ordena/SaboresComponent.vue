<template>
    <div class="card sabores col-md-4 col-sm-3 col-xs-2">
      <div class="card-header">
        <h3>Elige el sabor</h3>
      </div>
      <div class="card-body grid-container">    
        <div
          class="grid-item col-md-8 col-sm-6 col-xs-9"
          v-for="sabor in sabores"
          :key="sabor.id"
          :src="sabor.url"
          :alt="sabor.name"
          :price="sabor.price"
        >
          <a :href="'#' + sabor.name">
            <img :src="sabor.url" :alt="sabor.name" class="banner col-md-12 col-sm-12 col-xs-5" />
          </a>
          <p class="card-title">{{ sabor.name }}</p>
          <p class="card-text">${{ sabor.price }}</p>
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
    const sabores = ref([
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
    return { sabores }
  }
}
</script>


<style scoped>

.card {
  margin: 20px;
}

.sabores {
  margin-top: 50px;
  margin-right: 20px;
  width: 580px;
  border: 3px solid #316b83;
}

.card-header {
  border-bottom: 3px solid #316b83;
  background-color: #262261;
}

.grid-container {
  display: grid;
  margin: 20px;
  grid-template-columns: auto auto auto;
  column-gap: 10px;
  row-gap: 10px;
}

.grid-item {
  height: 180px;
  width: 150px;
  margin: 5px;
  padding: 20px !important;
  align-items: center;
  border: 3px solid #262261;
  border-radius: 5px;
}

h3 {
  margin: auto;
  text-align: center;
  color: #1bab61;
}

.banner {
  margin: -25px auto auto -20px;
  height: 41px;
  width: 144px;
  object-fit: cover;
}



/*=============================================
PANTALLA DE ESCRITORIO MEDIANO - MEDIUM (md) - revisamos en tablet horizontal 1024px
=============================================*/

@media(max-width:1199px) and (min-width:992px){

	.col-md-12{width:100%;}
	.col-md-11{width:91.66666667%;}
	.col-md-10{width:83.33333333%;}
	.col-md-9{width:75%;}
	.col-md-8{width:66.66666667%;}
	.col-md-7{width:58.33333333%;}
	.col-md-6{width:50%;}
	.col-md-5{width:41.66666667%;}
	.col-md-4{width: 33.33333333%;}
	.col-md-3{width: 25%;}
	.col-md-2{width: 16.66666667%;}
	.col-md-1{width: 8.33333333%;}

.sabores {
  margin: auto;
  margin-top: 50px;
  width: 350px;
}

.grid-container {
  grid-template-columns: auto auto;
  }

.grid-item {
  width: 130px;
  }

.grid-container .grid-item {
  margin: auto;
  }

.grid-item img{
  margin: -10 auto 0 auto;
  width: 123px;
  }
}

/*=============================================
PANTALLA DE TABLET - SMALL (sm) - revisamos en tablet vertical 768px
=============================================*/

@media(max-width:991px) and (min-width:768px){

	.col-sm-12{width:100%;}
	.col-sm-11{width:91.66666667%;}
	.col-sm-10{width:83.33333333%;}
	.col-sm-9{width:75%;}
	.col-sm-8{width:66.66666667%;}
	.col-sm-7{width:58.33333333%;}
	.col-sm-6{width:50%;}
	.col-sm-5{width:41.66666667%;}
	.col-sm-4{width: 33.33333333%;}
	.col-sm-3{width: 25%;}
	.col-sm-2{width: 16.66666667%;}
	.col-sm-1{width: 8.33333333%;}

.sabores {
  margin: auto;
  margin-top: 50px;
  width: 350px;
}

.grid-container {
  grid-template-columns: auto auto;
  }

.grid-item {
  width: 130px;
  }

.grid-container .grid-item {
  margin: auto;
  }

.grid-item img{
  margin: -10 auto 0 auto;
  width: 123px;
  }
}

/*=============================================
PANTALLA DE PHONES - EXTRA SMALL (xs) - revisamos en movil horizontal 480px o vertical 320px
=============================================*/

@media(max-width:767px){

	.col-xs-12{width:100%;}
	.col-xs-11{width:91.66666667%;}
	.col-xs-10{width:83.33333333%;}
	.col-xs-9{width:75%;}
	.col-xs-8{width:66.66666667%;}
	.col-xs-7{width:58.33333333%;}
	.col-xs-6{width:50%;}
	.col-xs-5{width:41.66666667%;}
	.col-xs-4{width: 33.33333333%;}
	.col-xs-3{width: 25%;}
	.col-xs-2{width: 16.66666667%;}
	.col-xs-1{width: 8.33333333%;}

.sabores {
  margin: auto;
  margin-top: 50px;
  width: 950px;
}

.grid-container {
  grid-template-columns: auto auto;
  }

.grid-item {
  width: 130px;
  }

.grid-container .grid-item {
  margin: auto;
  }

.grid-item img{
  margin: -10 auto 0 auto;
  width: 123px;
  }
}

</style>