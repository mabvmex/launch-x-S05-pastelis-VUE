<template>
  <div class="home">
    <NavbarComponent />
    <LogoSectionComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '../components/NavbarComponent'
import LogoSectionComponent from '../components/LogoSectionComponent'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent, LogoSectionComponent,
  }
}
</script>



// componente > view > router: index.js > main.js > app > index.htmls