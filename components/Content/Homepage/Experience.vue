<template>
  <section id="experience">
    <div class="main-our-room">
      <div class="background-our-room"></div>
      <div class="content-our-room row g-0">
        <div class="col-12 col-md-6 text-center content-left-side">
          <h1 class="d-inline-block title-content">The Comfort <br>Your Deserve</h1>
        </div>
        <div class="col-12 col-md-6 content-right-side">
          <p class="paragraph-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aspernatur aut autem
            consequatur deserunt enim error esse exercitationem expedita illum incidunt ipsa laboriosam magnam mollitia
            nemo, nobis numquam officiis provident quae quibusdam quidem quisquam quos recusandae reiciendis
            reprehenderit
            sunt tempore temporibus tenetur? Debitis dolorum eum ex labore neque omnis quaerat sequi veniam vitae. At
            distinctio fugit illo inventore iste labore nostrum quas qui, repellat saepe sed totam veritatis vero? Culpa
            debitis dolor dolorem error, et eveniet ex, expedita mollitia nobis numquam placeat quis, sint voluptatem.
            A,
            animi culpa dolore in itaque maxime nemo odit, quam, reiciendis sunt vitae.
          </p>

          <a href="#" class="link-to">OUR EXPERIENCE</a>
        </div>
      </div>

      <div class="slide-our-room">
        <div class="wrap-carousel">
          <div class="wrap-inner-carousel">
            <!-- Slider main container -->
            <div class="swiper-container">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                  <div class="box-image">
                    <img src="@/static/images/slide-our-room/slide_1.jpg">
                  </div>
                  <div class="wrap-experience-info">
                    <h2 class="title" data-swiper-parallax="-100">Suites & Villas</h2>
                  </div>
                  <div class="bottom-overlay-text"></div>
                </div>
                <div class="swiper-slide">
                  <div class="box-image">
                    <img src="@/static/images/slide-our-room/slide_2.jpg">
                  </div>
                  <div class="wrap-experience-info">
                    <h2>Premium Facility Services</h2>
                  </div>
                  <div class="bottom-overlay-text"></div>
                </div>
                <div class="swiper-slide">
                  <div class="box-image">
                    <img src="@/static/images/slide-our-room/slide_3.jpg">
                  </div>
                  <div class="wrap-experience-info">
                    <h2>Luxury Dining Table Set</h2>
                  </div>
                  <div class="bottom-overlay-text"></div>
                </div>
                <div class="swiper-slide">
                  <div class="box-image">
                    <img src="@/static/images/slide-our-room/slide_4.jpg">
                  </div>
                  <div class="wrap-experience-info">
                    <h2>Enjoy Your Privacy</h2>
                  </div>
                  <div class="bottom-overlay-text"></div>
                </div>
                <div class="swiper-slide">
                  <div class="box-image">
                    <img src="@/static/images/slide-our-room/slide_5.jpg">
                  </div>
                  <div class="wrap-experience-info">
                    <h2>Impressive Service</h2>
                  </div>
                  <div class="bottom-overlay-text"></div>
                </div>
                <div class="swiper-slide">
                  <div class="box-image">
                    <img src="@/static/images/slide-our-room/slide_6.jpg">
                  </div>
                  <div class="wrap-experience-info">
                    <h2>Ensure Cleanliness</h2>
                  </div>
                  <div class="bottom-overlay-text"></div>
                </div>
              </div>
              <!-- If we need pagination -->
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <div class="wrap-nav">
            <div class="button-nav next-nav" @click.prevent="swiper.slideNext(500)">
              <i class="fas fa-chevron-right"></i>
            </div>

            <div class="button-nav prev-nav" @click.prevent="swiper.slidePrev(500)">
              <i class="fas fa-chevron-left"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Swiper JS
import { Swiper } from 'swiper/bundle'
// import Swiper styles
import 'swiper/swiper-bundle.css'

export default {
  name: 'OurRoom',
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.swiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },

        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination'
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },

        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 0
          },
          1200: {
            slidesPerView: 3.2,
            spaceBetween: 0
          }
        }

      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

section#experience {
  margin-bottom: 10rem;

  div.main-our-room {

    position: relative;
    z-index: 0;

    div.background-our-room {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      background: $lighter-green-background;
      z-index: -2;
    }

    h1.title-content {
      margin: 0;
      text-align: left;
    }
  }

  div.slide-our-room {
    z-index: 1;
    position: relative;
    //background: $lighter-green-background;
    div.wrap-carousel {
      opacity: 1;
      margin-bottom: 0;
      position: relative;
      height: auto;

      div.wrap-inner-carousel {
        position: relative;
        overflow-x: hidden;
        width: 100%;

        div.swiper-container {
          width: 100%;

          div.swiper-slide {
            div.box-image {
              position: relative;
              max-height: 560px;
              width: 100%;

              &:before {
                display: block;
                content: "";
                width: 100%;
                padding-top: 150.26596%;
              }

              img {
                object-position: center;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                -o-object-fit: cover;
                object-fit: cover;
              }
            }

            div.wrap-experience-info {
              position: absolute;
              bottom: 0;
              left: 0;
              padding: 30px;
              color: #fff;
              z-index: 2;
              width: 100%;
              font-family: "Roboto Slab", serif;
            }

          }
        }
      }
    }
  }
}

@include media-breakpoint-up(xs) {
  div.slide-our-room {
    margin-top: 5rem;

    div.wrap-carousel {
      margin-left: 0;
      width: 100%;

      div.wrap-nav {
        display: inline-block;
        margin-top: 2rem;

        div.button-nav {
          position: relative;
          border: 1px solid $medium-green-primary;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: transform .4s cubic-bezier(.76, 0, .24, 1);
          font-size: 24px;
          color: $dark-green-primary;

          i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          &.next-nav {
            float: right;
            margin-left: 2rem;
          }

          &.prev-nav {
            float: left;
          }
        }
      }
    }

  }

  div.content-our-room {
    div.content-left-side {
      padding: 0 2rem;
    }

    div.content-right-side {
      padding: 0 2rem;

      p.paragraph-content {
        margin-top: 2rem;
      }
    }
  }
}

@include media-breakpoint-up(sm) {
  div.slide-our-room {
    div.wrap-carousel {
      margin-left: 150px;
      width: calc(100% - 150px);

      div.wrap-nav {
        margin-top: 0;
        top: 0;
        left: -100px;
        display: block;
        position: absolute;
        flex-direction: row;

        div.button-nav {
          width: 50px;
          height: 50px;

          &.next-nav {
            float: none;
            margin-left: 0;
            margin-bottom: 25px;
          }

          &.prev-nav {
            float: none;
          }
        }
      }
    }

  }

}

@include media-breakpoint-up(md) {
  div.background-our-room {
    //height: 90%;
    top: -12%;
  }

  div.content-our-room {
    padding-right: 70px;

    div.content-right-side {
      p.paragraph-content {
        margin-top: 0;

      }
    }
  }
}

@include media-breakpoint-up(xl) {
  div.background-our-room {
    height: calc(100% + 300px);
    top: -25%;
  }

  div.content-left-side {
    padding: 0;
  }
}

@include media-breakpoint-up(xxl) {
  div.background-our-room {
    height: 90%;
    top: -30%;
  }

  div.content-our-room {
    padding-bottom: 2rem;
  }
}

</style>
