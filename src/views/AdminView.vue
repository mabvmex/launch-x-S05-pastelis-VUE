<template>
  <div class="admin">
    <NavbarComponent />
    <AdminComponent />
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/shared/NavbarComponent'
import AdminComponent from "@/components/AdminComponent";
import AboutComponent from "@/components/shared/AboutComponent";
import FooterComponent from "@/components/shared/FooterComponent";


export default ({
  name: 'AdminView',
  components: {
    NavbarComponent, AdminComponent, AboutComponent, FooterComponent
  }
})
</script>
