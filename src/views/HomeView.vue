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
import NavbarComponent from '@/components/shared/NavbarComponent'
import LogoSectionComponent from '@/components/LogoSectionComponent'
import MenuComponent from "@/components/MenuComponent";
import FooterComponent from "@/components/shared/FooterComponent";
import AboutComponent from "@/components/shared/AboutComponent";

export default {
  name: 'HomeView',
  components: {
    NavbarComponent, LogoSectionComponent, MenuComponent, AboutComponent, FooterComponent
  }
}
</script>