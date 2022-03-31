<template>
    <section>
      <div class="logo-principal">
        <img class="logo-principal-img" src="../assets/logo/logo1-pastelis.png" alt="logo-principal">
      </div>
    </section>
</template>


<script>
export default {
  name: 'LogoSectionComponent'
}
</script>


<style>

.logo-principal {
  background-color: #262261;
}

.logo-principal-img {
    height: 700px;
    width: 100%;
    margin-top: 90px !important;
    object-fit: contain;
    /* object-fit: scale-down; */
}
</style>