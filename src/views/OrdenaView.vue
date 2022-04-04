<template>
  <div class="ordena">
    <NavbarComponent />
    <OrdenaComponent />
    <div class="opciones">
      <SaboresComponent />
      <AdornosComponent />
    </div>
    <div>
      <input  href="#" class="btn btn-primary" type="submit" value='Ordenar'>
    </div>
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/shared/NavbarComponent";
import OrdenaComponent from "@/components/ordena/OrdenaComponent";
import SaboresComponent from "@/components/ordena/SaboresComponent";
import AdornosComponent from "@/components/ordena/AdornosComponent";
import AboutComponent from "@/components/shared/AboutComponent";
import FooterComponent from "@/components/shared/FooterComponent";

export default {
  name: 'OrdenaView',
  components: {
    NavbarComponent, OrdenaComponent, SaboresComponent, AdornosComponent, AboutComponent, FooterComponent
  }

}
</script>

<style scoped>
.opciones {
  display: inline-flex;
}

.btn {
  margin-top: 50px;
  width: 200px;
}
</style>


// componente > view > router: index.js > main.js > app > index.htmls