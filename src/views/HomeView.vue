<template>
  <div class="home">
    <NavbarComponent />
    <LogoSectionComponent />
    <MenuComponent />
    <AboutUsComponent />
    <FooterComponent />
    
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '../components/NavbarComponent'
import LogoSectionComponent from '../components/LogoSectionComponent'
import MenuComponent from "../components/MenuComponent";
import FooterComponent from "../components/FooterComponent";
import AboutUsComponent from "../components/AboutUsComponent.vue";

export default {
  name: 'HomeView',
  components: {
    NavbarComponent, LogoSectionComponent, MenuComponent, AboutUsComponent, FooterComponent
  }
}
</script>



// componente > view > router: index.js > main.js > app > index.htmls