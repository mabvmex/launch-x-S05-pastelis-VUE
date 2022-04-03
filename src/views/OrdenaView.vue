<template>
  <div class="ordena">
    <NavbarComponent />
    <OrdenaComponent />
    <!-- <OrdenaPersonalizadoComponent /> -->
    <SaboresComponent />
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "@/components/shared/NavbarComponent";
import OrdenaComponent from "@/components/ordena/OrdenaComponent";
// import OrdenaPersonalizadoComponent from "@/components/ordena/OrdenaPersonalizadoComponent";
import SaboresComponent from "@/components/ordena/SaboresComponent";
import AboutComponent from "@/components/shared/AboutComponent";
import FooterComponent from "@/components/shared/FooterComponent";

export default {
  name: 'OrdenaView',
  components: {
    NavbarComponent, OrdenaComponent, /* OrdenaPersonalizadoComponent, */ SaboresComponent, AboutComponent, FooterComponent
  }

}
</script>

<style scoped>
</style>


// componente > view > router: index.js > main.js > app > index.htmls