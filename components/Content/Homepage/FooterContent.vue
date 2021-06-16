<template>
  <section id="footer-content">
    <div class="container">
      <div class="row main-content">
        <div class="col-12 col-md-9 d-none d-md-block">
          <div class="row list-footer">
            <div class="col-12 col-md-6 col-xl-3">
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
            <div class="col-12 col-md-6 col-xl-3">
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
            <div class="col-12 col-md-6 col-xl-3">
              <div class="title">
                <h4>PRIVATE RENTALS</h4>
              </div>
              <ul>
                <li><a href="#" class="link-blink">Castles</a></li>
                <li><a href="#" class="link-blink">Estates</a></li>
                <li><a href="#" class="link-blink">Villas & Houses</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-xl-3">
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
        <div class="col-12 col-md-3 information">
          <div class="logo-footer">
            <img src="/images/logo_kokkok.png" alt="" class="img-fluid">
          </div>

          <div class="content-contact">
            <p><a href="mailto:sales@kokkok.com">sales@kokkok.com</a></p>
            <p><a href="tel:1-800-894-5712">US Toll Free: 1-800-894-5712</a></p>
            <p><a href="tel:1-800-764-042">Australia Toll Free: 1-800-764-042</a></p>
            <p><a href="tel:+668123456789">Thailand Toll Free: +668123456789</a></p>
          </div>

          <div class="social-icon">
            <ul>
              <li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fab fa-line" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row license">
        <div class="col-lg-12 col-xl-4 left-side">
          <div class="d-flex flex-row align-items-center">
            <img id="license-img" src="/images/footer/licenced_footer.svg" alt="">
            <span>Licenced by the Commission for Aviation Regulation, TA 0792</span>
          </div>
        </div>
        <div class="col-lg-12 col-xl-8 right-side">
          <div class="wrap-all-legal d-flex flex-wrap justify-content-xl-end">
            <ul class="menu-item d-flex align-items-center">
              <li>
                <a href="#" class="link-blink">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" class="link-blink">Sustainability Policy</a>
              </li>
              <li>
                <a href="#" class="link-blink">Privacy Policy</a>
              </li>
            </ul>

            <div class="warp-site-by justify-content-center justify-content-xl-end">
              <span>Site By</span>
              <a href="https://pongniwat-w.medium.com/" target="_blank">𝓦𝓪𝓽</a>
            </div>
          </div>
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

  div.main-content {
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
          padding-bottom: 0.6rem;

          a.link-blink {
            color: white;
          }
        }
      }
    }

    div.logo-footer {
      margin-bottom: 2rem;

      img {
        width: 5rem;
      }
    }

    div.content-contact {
      font-weight: lighter;

      p {
        margin-bottom: 0.6rem;

        a {
          color: white;
          text-decoration: none;
          font-size: 13px;
        }
      }

    }

    div.social-icon {
      margin-top: 1rem;

      ul {
        padding-left: 0;

        li {
          list-style: none;
          display: inline-block;
          padding-right: 1rem;
          font-size: 1.5rem;

          a {
            color: white;
          }
        }
      }
    }
  }

  div.row.license {
    color: white;
    margin-top: 5rem;

    div.left-side {
      img#license-img {
        width: 3.5rem;
      }

      span {
        font-size: 13px;
        font-weight: lighter;
        margin-left: 1rem;
      }
    }

    div.right-side ul.menu-item {
      padding: 0;
      margin: 0;
      height: 90px;

      li {
        list-style: none;
        display: inline-block;
        font-size: 13px;
        font-weight: lighter;
        padding-right: 0.5rem;
      }
    }

  }

}

@include media-breakpoint-up(xs) {
  section#footer-content {
    padding: 2rem 2rem;

    div.information {
      text-align: center;
    }

    div.right-side {

      div.wrap-all-legal {
        flex-direction: column;

        a {
          text-decoration: none;
          color: inherit;
        }

        ul.menu-item {
          text-align: left;

        }

        div.warp-site-by {
          display: flex;
          align-items: center;

          a {
            margin-left: 5px;
          }
        }
      }

    }
  }
}

@include media-breakpoint-up(md) {
  section#footer-content {
    padding: 5rem 8rem;
    div.information {
      text-align: left;
    }

    div.right-side {
      div.wrap-all-legal {
        flex-direction: row;

        ul.menu-item {
          text-align: right;
        }

        div.warp-site-by {
          margin-left: 25px;
          margin-top: 0;
          justify-content: flex-end;
        }
      }

    }

  }

}
</style>
