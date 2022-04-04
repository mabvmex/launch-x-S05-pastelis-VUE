<template>
  <div class="pedidos">
    <div class="table-pedidos">
      <table class="table">
        <div class="card-header">
          <h3>Pedidos</h3>
        </div>
        <thead>
          <tr>
            <th scope="col ">#</th>
            <th scope="col ">Nombre</th>
            <th scope="col ">Teléfono</th>
            <th scope="col ">email</th>
            <th scope="col ">Sabor</th>
            <th scope="col ">Adorno</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row ">1</th>
            <td>Fernando</td>
            <td>5511223344</td>
            <td>fherrera007@gmail.com</td>
            <td>5511223344</td>
            <td>Combinado</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminPedidosComponent'
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