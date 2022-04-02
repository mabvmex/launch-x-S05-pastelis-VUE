<template>
  <div class="footter footter-fijo">
    <footer>
        <p class="createdByInfo-rights" id="Yeardata" v-bind="year">  ® Pastelis. Todos los derechos reservados {{ year }}. Con <i class="fas fa-heart"></i> y <i class="fab fa-vuejs"></i> por <a href="https://twitter.com/mabvmex ">@mabvmex</a></p>
    </footer>
  </div>
</template>


<script setup>
const d = new Date();
let year = d.getFullYear();
</script>

<script>
export default {
name: 'FooterComponent'
}
</script>


<style scoped>
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

.createdByInfo-rights {
  padding: 20px;
  color: #316b83;
  text-align: center;
  margin-bottom: auto !important;
}

.createdByInfo-rights > .fa-heart:hover {
  color: red
}

.createdByInfo-rights > .fa-vuejs:hover {
  color: #42b883;
  font-size: 30px;
}

a {
  text-decoration-line: none;
}


</style>