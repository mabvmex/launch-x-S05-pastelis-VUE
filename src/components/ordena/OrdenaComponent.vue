<template>
      <section>
        <div class="titulo-ordena">
        <h2> Haz tu pedido</h2>
        </div>
            <form>
                <label class="pedidos-label" for="nombre"><i class="fas fa-id-card"></i> Ingresa tu nombre</label>
                <input class="form-control pedidos-input" type="text" name="nombre" placeholder="Nombre" required> <br>

                <label class="pedidos-label" for="telefono"> <i class="fas fa-phone-volume"></i> Ingresa tu teléfono</label>
                <input class="form-control pedidos-input" type="number" name="telefono" placeholder="Teléfono" required> <br>

                <label class="pedidos-label" for="direccion"><i class="fas fa-map-marked-alt"></i> Ingresa tu dirección</label>
                <input class="form-control pedidos-input" type="text" name="direccion" placeholder="direccion" required> <br>

                <label class="pedidos-label" for="correo"><i class="fas fa-envelope"></i> Ingresa tu correo</label>
                <input class="form-control pedidos-input" type="email" name="correo" placeholder="email" required><br>
            </form>
    </section>
</template>

<script>
export default {
  name: 'OrdenaViewComponent',

}
</script>

<style scoped>

.titulo-ordena {
  padding: 20px;
  margin-top: 41px;
  border-bottom: #316b83 solid 3px;
  margin-top: 100px;
  margin-bottom: 100px;
}

h2 {
  text-align: center;
  font-size: 44px;
  color: #1bab61;
}

.pedidos-label,
.pedidos-input {
    width: 500px;
    margin-bottom: 15px;
}

.pedidos-label {
    width: 200px;
    text-align: left;
    left: 50px
}

.form-control {
    display: inline !important;
}

</style>