<template>
  <div class="ordena">
    <NavbarComponent />
    <OrdenaComponent />
    <OrdenaPersonalizadoComponent />
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
import OrdenaComponent from "@/components/ordena/OrdenaComponent";
import OrdenaPersonalizadoComponent from "@/components/ordena/OrdenaPersonalizadoComponent";
import AboutComponent from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: 'OrdenaView',
  components: {
    NavbarComponent, OrdenaComponent, OrdenaPersonalizadoComponent,AboutComponent, FooterComponent
  }

}
</script>

<style scoped>
</style>


// componente > view > router: index.js > main.js > app > index.htmls