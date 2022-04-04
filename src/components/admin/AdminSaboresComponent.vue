<template>
  <div class="sabores">
    <div class="table-sabores">
      <div class="card-header">
        <h3>Sabores</h3>
      </div>
      <table class="table">
        <thead>
          <tr style="background-color: transparent">
            <th scope="col">#</th>
            <th scope="col">Sabores</th>
            <th scope="col">Disponible</th>
            <th scope="col">Consumido</th>
          </tr>
        </thead>
        <tbody v-for="sabor in sabores" :key="sabor.id" :alt="sabor.name">
          <tr>
            <th scope="row">{{ sabor.index + 1 }}</th>
            <td>{{ sabor.name }}</td>
            <td>{{ sabor.disponible }} kits</td>
            <td>{{ sabor.consumido }} kits</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AdminSaboresComponent',

  setup() {
    const sabores = ref([
      {
        id: 'limón',
        index: 0,
        name: 'limón',
        disponible: '4',
        consumido: '17',
      },

      {
        id: 'chocolate',
        index: 1,
        name: 'chocolate',
        disponible: '3',
        consumido: '2'
      },
      {
        id: 'color-turquesa',
        index: 2,
        name: 'color-turquesa',
        disponible: '2',
        consumido: '6'
      },
      {
        id: 'colorido',
        index: 3,
        name: 'colorido',
        disponible: '3',
        consumido: '3'
      },
      {
        id: 'combinado',
        index: 4,
        name: 'combinado',
        disponible: '2',
        consumido: '5'
      },
      {
        id: 'crebanadas',
        index: 5,
        name: 'crebanadas',
        disponible: '5',
        consumido: '20'
      },
      {
        id: 'chocoDoble',
        index: 6,
        name: 'chocoDoble',
        disponible: '2',
        consumido: '7'
      },
      {
        id: 'elegante',
        index: 7,
        name: 'elegante',
        disponible: '3',
        consumido: '4'
      },
      {
        id: 'fresas',
        index: 8,
        name: 'fresas',
        disponible: '3',
        consumido: '10'
      },
      {
        id: 'frutas',
        index: 9,
        name: 'frutas',
        disponible: '2',
        consumido: '6'
      },
      {
        id: 'limon',
        index: 10,
        name: 'limon',
        disponible: '2',
        consumido: '13'
      },
      {
        id: 'mario-1',
        index: 11,
        name: 'mario-1',
        disponible: '3',
        consumido: '8'
      },
      {
        id: 'mario-2',
        index: 12,
        name: 'mario-2',
        disponible: '3',
        consumido: '5'
      },
      {
        id: 'cupcakes-happy',
        index: 13,
        name: 'cupcakes-happy',
        disponible: '5',
        consumido: '20'
      },
      {
        id: 'cupcakes',
        index: 14,
        name: 'chocoCupcakes',
        disponible: '5',
        consumido: '25'
      }




    ])
    return { sabores }
  }
}
</script>

<style scoped>
h3 {
  margin: auto;
  color: #1bab61;
}

.card-header {
  border-bottom: 3px solid #316b83;
  background-color: #262261;
}

.table-sabores {
  margin-right: 10px;
  width: 80%;
  margin-top: 150px;
  margin-bottom: 20px;
  display: inline-block;
}
</style>