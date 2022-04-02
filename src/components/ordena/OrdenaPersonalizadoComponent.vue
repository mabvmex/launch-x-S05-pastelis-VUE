<template>
  <div>
    <form action="" class="pedidos-formulario">
      <label class="pedidos-label" for="correo "
        ><i class="fas fa-bars"></i> Elige tu sabor</label
      >
      <select class="form-select">
        <option class="pedidos-input" value="”none”">Selecciona</option>
        <option class="pedidos-input" value="”chocolate”">
          Chocolate - - - MXN $250.00
        </option>
        <option class="pedidos-input" value="”combinado”">
          Combinado - - - MXN $250.00
        </option>
        <option class="pedidos-input" value="”elegante”">
          Elegante - - - MXN $850.00
        </option>
        <option class="pedidos-input" value="”fresa”">
          Fresa - - - MXN $550.00
        </option>
        <option class="pedidos-input" value="”frutas">
          Frutas - - - MXN $700.00
        </option>
        <option class="pedidos-input" value="”limon">
          Limón - - - MXN $300.00
        </option>
        <option class="pedidos-input" value="tutifruti ">
          Tutifruti - - - MXN $650.00
        </option>
        <option class="pedidos-input" value="turquesa ">
          Turquesa - - - MXN $600.00
        </option>
        <option class="pedidos-input" value="rosa elevado ">
          Rosa elevado - - - MXN $450.00
        </option>
        <option class="pedidos-input" value="mario-1 ">
          Mario-1 - - - MXN $750.00
        </option>
        <option class="pedidos-input" value="mario-2 ">
          Mario-2 - - - MXN $750.00
        </option>
        <option class="pedidos-input" value="extra-chocolate ">
          Extra-chocolate - - - MXN $550.00
        </option>
        <option class="pedidos-input" value="cupcakes-choco ">
          Cupcakes-choco - - - MXN $285.00
        </option>
        <option class="pedidos-input" value="cupcakes-arcoiris ">
          Cupcakes-arcoiris - - - MXN $250.00
        </option>
      </select>
      <br />
      <label class="pedidos-label" for="correo "
        ><i class="fas fa-bars"></i> ¿Combinar sabores?</label
      >
      <select class="form-select">
        <option class="pedidos-input" value="”none”">Selecciona</option>
        <option class="pedidos-input" value="”chocolate”">
          Chocolate - - - MXN 150.00 extra
        </option>
        <option class="pedidos-input" value="”combinado”">
          Combinado - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="”elegante”">
          Elegante - - - MXN $450.00 extra
        </option>
        <option class="pedidos-input" value="”fresa”">
          Fresa - - - MXN $250.00 extra
        </option>
        <option class="pedidos-input" value="”frutas">
          Frutas - - - MXN $300.00 extra
        </option>
        <option class="pedidos-input" value="”limon">
          Limón - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="tutifruti ">
          Tutifruti - - - MXN $350.00 extra
        </option>
        <option class="pedidos-input" value="turquesa ">
          Turquesa - - - MXN $300.00 extra
        </option>
        <option class="pedidos-input" value="rosa elevado ">
          Rosa elevado - - - MXN $250.00 extra
        </option>
        <option class="pedidos-input" value="mario-1 ">
          Mario-1 - - - MXN $350.00 extra
        </option>
        <option class="pedidos-input" value="mario-2 ">
          Mario-2 - - - MXN $350.00 extra
        </option>
        <option class="pedidos-input" value="extra-chocolate ">
          Extra-chocolate - - - MXN $250.00 extra
        </option>
        <option class="pedidos-input" value="cupcakes-choco ">
          Cupcakes-choco - - - MXN $185.00 extra
        </option>
        <option class="pedidos-input" value="cupcakes-arcoiris ">
          Cupcakes-arcoiris - - - MXN 120.00 extra
        </option>
      </select>
      <br />
      <label class="pedidos-label" for="correo "
        ><i class="fas fa-bars"></i> Elige los adornos</label
      >
      <select class="form-select">
        <option class="pedidos-input" value="”none”">Selecciona</option>
        <option class="pedidos-input" value="”chocolate”">
          Chocolate - - - MXN $50.00 extra
        </option>
        <option class="pedidos-input" value="”combinado”">
          Combinado - - - MXN $50.00 extra
        </option>
        <option class="pedidos-input" value="”elegante”">
          Elegante - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="”fresa”">
          Fresa - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="”frutas">
          Frutas - - - MXN $100.00 extra
        </option>
        <option class="pedidos-input" value="”limon">
          Limón - - - MXN $100.00 extra
        </option>
        <option class="pedidos-input" value="tutifruti ">
          Tutifruti - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="turquesa ">
          Turquesa - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="rosa elevado ">
          Rosa elevado - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="mario-1 ">
          Mario-1 - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="mario-2 ">
          Mario-2 - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="extra-chocolate ">
          Extra-chocolate - - - MXN $150.00 extra
        </option>
        <option class="pedidos-input" value="cupcakes-choco ">
          Cupcakes-choco - - - MXN $85.00 extra
        </option>
        <option class="pedidos-input" value="cupcakes-arcoiris ">
          Cupcakes-arcoiris - - - MXN 120.00 extra
        </option>
      </select>
      <br />
      <button class="enviar btn btn-primary" type="submit ">
        Hacer pedido
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "OrdenaPersonalizadoComponent",
};
</script>

<style scoped>
.pedidos-label,
.pedidos-input {
  width: 500px;
  margin-bottom: 15px;
}

.pedidos-formulario {
  margin: 30px;
  text-align: center;
  display: inline-box;
}

select {
  width: 500px;
  margin-bottom: 15px;
  height: 30px;
}

.form-select {
  width: 500px;
  height: 40px;
  display: inline;
}

.pedidos-label {
  width: 200px;
  text-align: left;
  left: 50px;
}
.enviar {
  margin-top: 30px;
  margin-left: 150px;
  width: 200px;
}
</style>
