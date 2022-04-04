<template>
  <div class="admin">
    <NavbarComponent />
    <AdminSaboresComponent />
    <AdminAdornosComponent />
    <AdminPedidosComponent />
    <AboutComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/shared/NavbarComponent'
import AdminSaboresComponent from "@/components/admin/AdminSaboresComponent";
import AdminAdornosComponent from "@/components/admin/AdminAdornosComponent";
import AdminPedidosComponent from "@/components/admin/AdminPedidosComponent";
import AboutComponent from "@/components/shared/AboutComponent";
import FooterComponent from "@/components/shared/FooterComponent";


export default ({
  name: 'AdminView',
  components: {
    NavbarComponent, AdminSaboresComponent, AdminAdornosComponent, AdminPedidosComponent, AboutComponent, FooterComponent
  }
})
</script>
