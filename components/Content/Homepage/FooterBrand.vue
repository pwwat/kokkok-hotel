<template>
  <section id="footer-brand">
    <div class="container">
      <div class="row justify-content-center g-0">
        <div class="warp-footer-brand col-12 align-self-center">
          <div class="footer-brand-slide">
            <!-- Slider main container -->
            <div ref="swiper-footer-brand" class="swiper-container swiper-footer-brand">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide d-flex">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand1.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand2.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand3.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand4.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand5.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand6.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand7.png" class="img-fluid" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="wrap-nav text-center">
            <div class="button-nav prev-nav" @click.prevent="swiper.slidePrev(500)">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div class="button-nav next-nav" @click.prevent="swiper.slideNext(500)">
              <i class="fas fa-chevron-right"></i>
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
// import 'swiper/swiper-bundle.css'

export default {
  name: 'FooterBrand',
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.swiper = new Swiper('.swiper-footer-brand', {
        autoplay: false,
        allowTouchMove: true,
        grabCursor: true,
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 'auto',
        loopedSlides: 5,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 640px
          960: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        },

        spaceBetween: 10,
        on: {
          init: (swiper) => {
            if (parseInt(swiper.currentBreakpoint) !== 320) {
              this.setHiddenSlide(swiper)
            }
          },
          resize: (swiper) => {
            if (parseInt(swiper.currentBreakpoint) !== 320) {
              this.setHiddenSlide()
            } else {
              this.clearStyle(swiper)
            }
          }
        }
      })

      this.swiper.on('slideChange', (swiper) => {
        let activeIndex = swiper.activeIndex
        if (parseInt(swiper.currentBreakpoint) !== 320) {
          if (activeIndex === 4 || activeIndex === 12) {
            // สำหรับ slide แบบลูป
            for (let index = activeIndex; index <= 16; index++) {
              let slideBetween = swiper.slides[index]
              slideBetween.style.opacity = 1
            }
            swiper.slides[activeIndex].style.opacity = '0.2'
            // lastslide
            swiper.slides[activeIndex + 4].style.opacity = '0.2'
          } else {
            this.setHiddenSlide(swiper)
          }
        }
      })
    })
  },
  methods: {
    setHiddenSlide (swiper) {
      let indexCurrentSlide = swiper.realIndex
      let indexAtFirst = 5 + indexCurrentSlide
      let indexAtLast = 9 + indexCurrentSlide
      for (let index = 6 + indexCurrentSlide; index <= 8 + indexCurrentSlide; index++) {
        let slideBetween = swiper.slides[index]
        slideBetween.style.opacity = 1
      }

      let slideFirst = swiper.slides[indexAtFirst]
      let slideLast = swiper.slides[indexAtLast]
      slideFirst.style.opacity = '0.2'
      slideLast.style.opacity = '0.2'
    },
    clearStyle (swiper) {
      for (let index = 0; index <= 16; index++) {
        let slideBetween = swiper.slides[index]
        if (slideBetween && slideBetween.style) {
          slideBetween.style.opacity = 1
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/custom.scss";

.fade-brand {
  opacity: .2;
}

section#footer-brand {
  //color: white;
  background: #2D2D2D;

  div.warp-footer-brand {
    padding: 2rem 3.5rem;
    position: relative;
    height: 100%;

    div.swiper-slide div.image-box {
      width: 7rem;
      cursor: grab;
      margin-right: auto !important;
      margin-left: auto !important;
    }

    div.wrap-nav {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      color: white;

      div.prev-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

      }

      div.next-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

      }

    }
  }
}

@include media-breakpoint-up(xs) {
  section#footer-brand {
    div.warp-footer-brand {
      height: 6rem;

      div.wrap-nav div.prev-nav {
        left: 1rem;
      }

      div.wrap-nav div.next-nav {
        right: 1rem;
      }
    }
  }
}

@include media-breakpoint-up(xl) {
  section#footer-brand {
    div.warp-footer-brand {
      height: 7rem;

      div.wrap-nav div.prev-nav {
        left: 0;
      }

      div.wrap-nav div.next-nav {
        right: 0;
      }
    }
  }
}
</style>
