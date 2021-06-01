<template>
  <section id="footer-content">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-9">
          <div class="row list-footer">
            <div class="col-12 col-md-3">
              <div class="title">
                <h4>TAILORED EXPERIENCES</h4>
              </div>

              <ul>
                <li><a href="#" class="link-blink">Adventure</a></li>
                <li><a href="#" class="link-blink">Celebration</a></li>
                <li><a href="#" class="link-blink">Culinary</a></li>
                <li><a href="#" class="link-blink">Family</a></li>
                <li><a href="#" class="link-blink">Ultraluxe</a></li>
                <li><a href="#" class="link-blink">Voyages</a></li>
                <li><a href="#" class="link-blink">Speciality</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-3">
              <div class="title">
                <h4>DESTINATIONS</h4>
              </div>
              <ul>
                <li><a href="#" class="link-blink">Ireland</a></li>
                <li><a href="#" class="link-blink">UK</a></li>
                <li><a href="#" class="link-blink">Africa</a></li>
                <li><a href="#" class="link-blink">Asia</a></li>
                <li><a href="#" class="link-blink">America</a></li>
                <li><a href="#" class="link-blink">Classic Europe</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-3">
              <div class="title">
                <h4>PRIVATE RENTALS</h4>
              </div>
              <ul>
                <li><a href="#" class="link-blink">Castles</a></li>
                <li><a href="#" class="link-blink">Estates</a></li>
                <li><a href="#" class="link-blink">Villas & Houses</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-3">
              <div class="title">
                <h4>ABOUT US</h4>
              </div>
              <ul>
                <li><a href="#" class="link-blink">Why choose KOK-KOK</a></li>
                <li><a href="#" class="link-blink">Our Team</a></li>
                <li><a href="#" class="link-blink">Work with us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, totam.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterContent'
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/custom.scss";

section#footer-content {
  background: #202020;
  color: white;
  font-family: "Roboto Slab", serif;

  div.row.list-footer {
    div.title {
      padding-bottom: 1rem;

      h4 {
        font-size: 16px;
        font-weight: bold;
      }
    }

    ul {
      padding: 0;

      li {
        list-style: none;
        font-size: 13px;
        font-weight: lighter;
        padding-bottom: 0.8rem;

        a.link-blink {
          color: white;
        }
      }
    }
  }

}

@include media-breakpoint-up(xl) {
  section#footer-content {
    padding: 5rem 8rem;

  }
}
</style>
