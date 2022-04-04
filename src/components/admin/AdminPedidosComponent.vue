<template>
  <div class="pedidos">
    <div class="table-pedidos">
      <div class="card-header">
        <h3>Pedidos</h3>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col ">#</th>
            <th scope="col ">Nombre</th>
            <th scope="col ">Teléfono</th>
            <th scope="col ">email</th>
            <th scope="col ">Sabor</th>
            <th scope="col ">Adorno</th>
            <th scope="col ">Total</th>
          </tr>
        </thead>
        <tbody
          v-for="pedido in pedidos"
          :key="pedido.id"
          :alt="pedido.name"
          :index="pedido.index"
        >
          <tr>
            <th scope="row ">{{ pedido.index + 1 }}</th>
            <td>{{ pedido.name }}</td>
            <td>{{ pedido.telefono }}</td>
            <td>{{ pedido.correo }}</td>
            <td>sabor</td>
            <td>adorno</td>
            <td>total</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'AdminPedidosComponent',

  setup() {
    const pedidos = ref([
      {
        id: '001',
        index: 0,
        name: 'Mónica Herrera',
        telefono: '55 1100 3300',
        correo: 'nix@gmail.',
      },
      {
        id: '002',
        index: 1,
        name: 'Javier Gónzales',
        telefono: '55 1135 3301',
        correo: 'jgonz@hotmail.com',
      },
      {
        id: '003',
        index: 2,
        name: 'Natalia Fernandez',
        telefono: '55 1146 3302',
        correo: 'nfer23@gmail.',
      },
      {
        id: '004',
        index: 3,
        name: 'Ricardo Pérez',
        telefono: '55 1154 3303',
        correo: 'riper@yahoo.com',
      },
      {
        id: '005',
        index: 4,
        name: 'Daniel Salazar',
        telefono: '55 1186 3304',
        correo: 'danSal5@gmail.com',
        disponible: '10',
      },
    ])
    return { pedidos }
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

.table-pedidos {
  margin-right: 10px;
  width: 80%;
  margin: 50px;
  display: inline-block;
}
</style>