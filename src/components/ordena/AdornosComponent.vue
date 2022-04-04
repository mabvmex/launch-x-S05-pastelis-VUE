<template>
  <div class="card adornos">
    <div class="card-header">
      <h3>¿Deseas adornos adicionales?</h3>
    </div>
    <div class="grid-container">
      <div
        class="grid-item"
        v-for="adorno in adornos"
        :key="adorno.id"
        :alt="adorno.name"
      >
        <p>{{ adorno.name }}</p>
        <p>${{ adorno.price }}</p>
        <input type="checkbox" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'AdornosComponent',

  setup() {
    const adornos = ref([
      {
        id: 'chocolate-extra',
        name: 'chocolate-extra',
        price: '50.00'
      },
      {
        id: 'fresas',
        name: 'fresas',
        price: '115.00'
      },
      {
        id: 'fruta',
        name: 'fruta',
        price: '55.00'
      },
      {
        id: 'conos-helado',
        name: 'conos-helado',
        price: '35.00'
      },
      {
        id: 'flores-coloridas',
        name: 'flores-coloridas',
        price: '100.00'
      },
      {
        id: 'confettti',
        name: 'confettti',
        price: '50.00'
      },
      {
        id: 'choco-chispas',
        name: 'choco-chispas',
        price: '80.00'
      },
      {
        id: 'arcoIris',
        name: 'arcoIris',
        price: '45.00'
      },
      {
        id: 'mario-1',
        name: 'mario-1',
        price: '100.00'
      },
      {
        id: 'mario-2',
        name: 'mario-2',
        price: '100.00'
      },

    ])
    return { adornos }
  }
}
</script>

<style scoped>
.adornos {
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
</style>