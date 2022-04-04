<template>
  <div class="adornos">
    <div class="table-adornos">
        <div class="card-header">
          <h3>Adornos</h3>
        </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col ">#</th>
            <th scope="col ">Adornos</th>
            <th scope="col ">Disponible</th>
            <th scope="col ">Consumido</th>
          </tr>
        </thead>
        <tbody 
        v-for="adorno in adornos" 
        :key="adorno.id" 
        :alt="adorno.name"
        >
          <tr>
            <th scope="row ">{{adorno.index + 1}}</th>
            <td>{{adorno.name}}</td>
            <td>{{adorno.disponible}} kits</td>
            <td>{{adorno.consumido}} kits</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'AdminAdornosComponent',

  setup() {
    const adornos = ref([
            {
        id: 'chocolate-extra',
        index:0,
        name: 'chocolate-extra',
        disponible: '5',
        consumido: '5'
      },
      {
        id: 'fresas',
        index:1,
        name: 'fresas',
        disponible: '15',
        consumido: '15'
      },
      {
        id: 'fruta',
        index:2,
        name: 'fruta',
        disponible: '5',
        consumido: '5'
      },
      {
        id: 'conos-helado',
        index:3,
        name: 'conos-helado',
        disponible: '3',
        consumido: '3'
      },
      {
        id: 'flores-coloridas',
        index:4,
        name: 'flores-coloridas',
        disponible: '10',
        consumido: '10'
      },
      {
        id: 'confettti',
        index:5,
        name: 'confettti',
        disponible: '5',
        consumido: '5'
      },
      {
        id: 'choco-chispas',
        index:6,
        name: 'choco-chispas',
        disponible: '8',
        consumido: '8'
      },
      {
        id: 'arcoIris',
        index:7,
        name: 'arcoIris',
        disponible: '4',
        consumido: '4'
      },
      {
        id: 'mario-1',
        index:8,
        name: 'mario-1',
        disponible: '10',
        consumido: '10'
      },
      {
        id: 'mario-2',
        index:9,
        name: 'mario-2',
        disponible: '10',
        consumido: '10'
      },
    ])
    return { adornos }
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
.table-adornos {
  margin-right: 10px;
  width: 80%;
  margin: 50px;
  display: inline-block;
}
</style>