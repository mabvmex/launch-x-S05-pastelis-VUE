<template>
  <div class="admin">
    <NavbarComponent />
    <AdminComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import AdminComponent from "@/components/DeleteAdminComponent.vue";

export default ({
  name: 'AdminView',
  components: {
    NavbarComponent, AdminComponent
  }
})
</script>
