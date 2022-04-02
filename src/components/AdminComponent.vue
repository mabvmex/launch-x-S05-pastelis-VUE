<template>
     <section class="compras">
        <div class="table-inventory">
            <table class="table">
                <h2> INVENTARIO </h2>
                <thead>

                    <tr style="background-color: transparent">
                        <th scope="col ">#</th>
                        <th scope="col ">Ingredientes</th>
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
                    <tr>
                        <th scope="row ">2</th>
                        <td>Chocolates</td>
                        <td>14 Pz</td>
                        <td>23 Pz</td>
                    </tr>
                    <tr>
                        <th scope="row ">3</th>
                        <td>Fresas</td>
                        <td>3 Kg</td>
                        <td>6.8kg</td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="table-pedidos ">
            <table class="table ">
                <h2> PEDIDOS </h2>
                <thead>
                    <tr>
                        <th scope="col ">#</th>
                        <th scope="col ">Nombre</th>
                        <th scope="col ">Apellido</th>
                        <th scope="col ">Social</th>
                        <th scope="col ">Teléfono</th>
                        <th scope="col ">Pastel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row ">1</th>
                        <td>Fernando</td>
                        <td>Herrera</td>
                        <td>@fherrera007</td>
                        <td>5511223344</td>
                        <td>Combinado</td>
                    </tr>
                    <tr>
                        <th scope="row ">2</th>
                        <td>María</td>
                        <td>Gómez</td>
                        <td>@magom</td>
                        <td>5511223344</td>
                        <td>Fresas</td>
                    </tr>
                    <tr>
                        <th scope="row ">3</th>
                        <td>Dani</td>
                        <td>Pérez</td>
                        <td>@dPrez</td>
                        <td>5511223344</td>
                        <td>Limón</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
export default {
 name: 'AdminComponent'
}
</script>

<style scoped>

h2 {
  text-align: center;
  font-size: 44px;
  color: #1bab61;
}

.compras {
    text-align: center;
}

.table-inventory {
    margin-right: 10px;
    width: 80%;
    margin-top: 150px;
    margin-bottom: 100px;
    display: inline-block;
}

.table-pedidos {
    margin-left: 10px;
    text-align: center;
    width: 80%;
    display: inline-block;
}
</style>