<template>
  <div class="ordena">
    <NavbarComponent />
    <OrdenaComponent />
    <div class="opciones">
      <SaboresComponent />
      <AdornosComponent />
    </div>
    <div>
      <input href="#" class="btn btn-primary" type="submit" value="Ordenar" />
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
  width: 150px;
}

@media (max-width: 767px) {
  .col-xs-12 { width: 100%; }
  .col-xs-11 { width: 91.66666667%; }
  .col-xs-10 { width: 83.33333333%; }
  .col-xs-9 { width: 75%; }
  .col-xs-8 { width: 66.66666667%; }
  .col-xs-7 { width: 58.33333333%; }
  .col-xs-6 { width: 50%; }
  .col-xs-5 { width: 41.66666667%; }
  .col-xs-4 { width: 33.33333333%; }
  .col-xs-3 { width: 25%; }
  .col-xs-2 { width: 16.66666667%; }
  .col-xs-1 { width: 8.33333333%; }

  .opciones {
    display: inline-block;
    margin-left: 20px;
  }

  .opciones > div {
    width: 450px;
    margin: auto;
  }

  .adornos {
    height: 1100px;
  }
}
</style>


// componente > view > router: index.js > main.js > app > index.htmls