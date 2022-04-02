<template>
  <div class="admin">
    <NavbarComponent />
    <AdminComponent />
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
import AdminComponent from "@/components/AdminComponent";
import AboutComponent from "@/components/AboutComponent";
import FooterComponent from "@/components/FooterComponent";


export default ({
  name: 'AdminView',
  components: {
    NavbarComponent, AdminComponent, AboutComponent, FooterComponent
  }
})
</script>
