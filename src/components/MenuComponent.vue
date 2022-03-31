<template>
      <section class='menu' id="menu">
        <div class="titulo-menu">
          <h2>Conoce nuestro menú</h2>
        </div>

        <div class="col">
            <div class=' info'>
                <div class='card'>
                    <a href="#chocolate">
                        <img src='../assets/pastel/chocolate.jpeg' class='card-img-top' alt='chocolate'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel con chocolate</p>
                            <p class='card-text'>MXN $250.00</p>
                        </div>
                    </a>
                </div>
                <!-- <div class='card'>
                    <a href='#combinado'>
                        <img src='./img/combinado.jpeg' class='card-img-top' alt='combinado'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel combinado</p>
                            <p class='card-text'>MXN $450.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#elegante'>
                        <img src='./img/elegante.jpeg' class='card-img-top' alt='elegante'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel elegante</p>
                            <p class='card-text'>MXN $850.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#fresas'>
                        <img src='./img/fresas.jpeg' class='card-img-top' alt='fresas'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel con fresas</p>
                            <p class='card-text'>MXN $550.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#frutas'>
                        <img src='./img/frutas.jpeg' class='card-img-top' alt='frutas'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel con frutas</p>
                            <p class='card-text'>MXN $750.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#limon'>
                        <img src='./img/limon.jpeg' class='card-img-top' alt='limón'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel de limón</p>
                            <p class='card-text'>MXN $350.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#tutifruti'>
                        <img src='./img/pastel-diseño.jpeg' class='card-img-top' alt='tutifruti'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel tutifruti</p>
                            <p class='card-text'>MXN $650.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#turquesa'>
                        <img src='./img/pastel-turquesa-petalos.jpeg' class='card-img-top' alt='turquesa'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel turquesa</p>
                            <p class='card-text'>MXN $600.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#doble-chocolate'>
                        <img src='./img/doble-chocolate.jpeg' class='card-img-top' alt='doble-chocolate'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel Doble-Chocolate</p>
                            <p class='card-text'>MXN $750.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#mario-bros'>
                        <img src='./img/mario-1.png' class='card-img-top' alt='mario-bros'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel Mario-bros-1</p>
                            <p class='card-text'>MXN $750.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#mario-bros-2'>
                        <img src='./img/mario-2.jpeg' class='card-img-top' alt='mario-bros'>
                        <div class='card-body'>
                            <p class='card-text'>Pastel Mario-bros-2</p>
                            <p class='card-text'>MXN $750.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href='#cupcakes'>
                        <img src='./img/cupcakes.jpeg' class='card-img-top' alt='cupcakes'>
                        <div class='card-body'>
                            <p class='card-text'>Choco-cupcakes</p>
                            <p class='card-text'>MXN $185.00</p>
                        </div>
                    </a>
                </div>

                <div class='card'>
                    <a href="#cupcakes">
                        <img src='./img/Happy-Cupcakes.jpeg' class='card-img-top' alt='cupcakes'>
                        <div class='card-body'>
                            <p class='card-text'>Cupcakes-arcoiris</p>
                            <p class='card-text'>MXN $200.00</p>
                        </div>
                    </a>
                </div>

 -->
            </div>

        </div>
    </section>

</template>

<script>
export default {
  name: 'MenuComponent'
}
</script>


<style scoped>
  
  .titulo-menu {
    padding: 20px;
    margin-top: 10px;
    border-bottom: #316B83 solid 3px;
    margin-bottom: 100px;
  }

h2 {
    text-align: center;
    font-size: 44px;
    color: #1bab61;
}

h3 {
    text-align: center;
    margin-bottom: 60px;
    color: #1bab61;
    font-size: 44px;
}

.info img {
    width: 250px;
    height: 250px;
}

.info {
    position: relative;
    text-align: center;
    color: #316B83;
    font-weight: 800;
}

a:link {
    text-decoration: none;
}

.card {
    margin: 5px;
    max-width: 18rem;
    display: inline-block;
}


</style>