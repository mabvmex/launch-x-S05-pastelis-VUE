<template>
  <div>
    <section class="contacto" id="contacto">
      <table>
        <tr>
          <th class="celda bg-primary celda-izquierda">Contacto</th>
          <th class="celda bg-warning rrss-1 celda-centro">
            Nuestros espacios
          </th>
          <th class="celda bg-info celda-derecha" id="nosotros">Nosotros</th>
        </tr>

        <tr>
          <td>
            <i class="fas fa-map-marked-alt">
              <a target="blank" href="https://www.google.com.mx/maps/place/Alameda+Central/@19.4357353,-99.1527033,15z/data=!4m12!1m6!3m5!1s0x85d1f92af577b44b:0xdb290ed58ba64e40!2sAlameda+Central!8m2!3d19.4357353!4d-99.1439486!3m4!1s0x85d1f92af577b44b:0xdb290ed58ba64e40!8m2!3d19.4357353!4d-99.1439486">
                <p class="calendario">Visita nuestras sucursales</p>
              </a>
            </i>
            <br />
            <i class="fas fa-phone-volume"><p class="calendario">55 4466 8833</p></i> <br />
            <i class="far fa-calendar-alt">
              <p class="calendario">Lunes a Viernes de 7:00 am - 7:00 pm</p>
            </i>
            <br />
            <i class="far fa-calendar-alt">
              <p class="calendario">Sábados y Domingos de 9:00 am - 12:00 pm</p>
            </i>
            <br />
          </td>
          <td class="rrss-icons">
            <a target="blank" href="http://www.facebook.com"
              ><i class="facebook fab fa-facebook"></i
            ></a>
            <a target="blank" href="http://www.twitter.com"
              ><i class="twitter fab fa-twitter"></i
            ></a>
            <a target="blank" href="http://www.instagram.com"
              ><i class="instagram fab fa-instagram"></i
            ></a>
            <a target="blank" href="http://www.youtube.com"
              ><i class="youtube fab fa-youtube"></i
            ></a>
          </td>
          <td>
            Pastelis es una repostería joven constituida por talento local. Nos
            dedicamos a entregarte la mejor experiencia de sabores en tus
            postres favoritos con una elobaoración tradicional inigualable.
          </td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUsComponent'
}
</script>

<style scoped>

.contacto {
  background-color: #262262;
  border-style: solid;
  border-top-width: 10px;
  border-color: #262262;
  color: #316b83;
  text-align: left;
  margin-top: 100px;
  margin-bottom: 60px;
}

.calendario {
  font-family: sans-serif !important;
  display: inline;
  font-size: 14px;  
  margin-left: 10px;
}

td,
tr,
th {
  /* border: 1px solid #dddddd; */
  text-align: left;
  padding: 18px;
}

.celda {
  width: 35%;
}

.contacto td {
  padding-bottom: 30px;
}

tr:nth-child(even) {
  background-color: #dddddd;
  width: 35%;
  padding: 8px;
}

.rrss-1 {
  width: 30%;
}

.celda-izquierda {
  color: #fff;
}

.celda-centro {
  color: #316b83;
}

.rrss-icons {
  font-size: 60px;
  text-align: center;;
  
}

.celda-derecha {
  color: #000;
}

.facebook,
.twitter,
.instagram,
.youtube {
  color: gray;
  margin-left: 10px;
}

i.fa-facebook:hover {
  color: blue;
}

i.fa-twitter:hover {
  color: #1a8cd8;
}

i.fa-instagram:hover {
  color: #e24279;
}

i.fa-youtube:hover {
  color: #ff0100;
}

.compras {
  margin-bottom: 500px;
}

.pedidos-label,
.pedidos-input {
  width: 500px;
  margin-bottom: 15px;
}
</style>