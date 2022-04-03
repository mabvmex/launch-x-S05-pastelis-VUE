<template>
  <div class="about">
<NavbarComponent/>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import NavbarComponent from '@/components/shared/NavbarComponent.vue'

export default({
 name: 'AboutView',
  components: {
    NavbarComponent
  }
})
</script>
