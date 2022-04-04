<template>
  <div class="adornos">
    <div class="table-adornos">
      <table class="table">
        <div class="card-header">
          <h3>Adornos</h3>
        </div>
        <thead>
          <tr>
            <th scope="col ">#</th>
            <th scope="col ">Nombre</th>
            <th scope="col ">Teléfono</th>
            <th scope="col ">Correo Electrónico</th>
            <th scope="col ">Pastel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row ">1</th>
            <td>Fernando</td>
            <td>5511223344</td>
            <td>@fherrera007</td>
            <td>Combinado</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAdornosComponent'
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