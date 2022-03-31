<template>
  <div class="footter footter-fijo">
    <footer>
      <div class="createdByInfo">
        ® Pastelis. Todos los derechos reservados 2022. Creado por
        <a href="https://twitter.com/mabvmex ">@mabvmex</a>
      </div>
    </footer>
  </div>
</template>


<script>

export default {
  name: 'FooterComponent'
}
</script>


<style>
.footter {
  border-style: solid;
  border-top-width: 10px;
  border-color: #262262;
  background-color: #000;
}

.footter-fijo {
  bottom: 0px;
  position: fixed;
  width: 100%;
}

.createdByInfo {
  padding: 20px;
  color: #316b83;
  text-align: center;
}
</style>