<template>
  <div class="sabores">
    <div class="table-sabores">
      <table class="table">
        <div class="card-header">
          <h3>Sabores</h3>
        </div>

        <thead>
          <tr style="background-color: transparent">
            <th scope="col ">#</th>
            <th scope="col ">Adornos</th>
            <th scope="col ">Disponible</th>
            <th scope="col ">Consumido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row ">1</th>
            <td>Harina</td>
            <td>4 Kg</td>
            <td>17.5kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminSaboresComponent'
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