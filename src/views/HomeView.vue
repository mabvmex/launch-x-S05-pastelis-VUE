<template>
  <div class="home">
    <NavbarComponent />
    <LogoSectionComponent />
    <MenuComponent />
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent'
import LogoSectionComponent from '@/components/LogoSectionComponent'
import MenuComponent from "@/components/MenuComponent";
import FooterComponent from "@/components/FooterComponent";
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: 'HomeView',
  components: {
    NavbarComponent, LogoSectionComponent, MenuComponent, AboutComponent, FooterComponent
  }
}
</script>