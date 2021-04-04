<template>
  <section id="footer-brand">
    <div class="container">
      <div class="row justify-content-center">
        <div class="warp-footer-brand col-12 align-self-center">
          <div class="footer-brand-slide">
            <!-- Slider main container -->
            <div ref="swiper-footer-brand" class="swiper-container swiper-footer-brand">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide d-flex" :class="fadeBrand(0)">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand1.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex" :class="fadeBrand(1)">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand2.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex" :class="fadeBrand(2)">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand3.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex" :class="fadeBrand(3)">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand4.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex" :class="fadeBrand(4)">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand5.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex" :class="fadeBrand(5)">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand6.png" class="img-fluid" alt="">
                  </div>
                </div>
                <div class="swiper-slide  d-flex" :class="fadeBrand(6)">
                  <div class="image-box">
                    <img src="@/static/images/footer/brand7.png" class="img-fluid" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="wrap-nav text-center">
            <div class="button-nav prev-nav" @click.prevent="swiper.slidePrev(500), slideActive()">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div class="button-nav next-nav" @click.prevent="swiper.slideNext(500), slideActive()">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper } from 'swiper'

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
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },

        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 5,
        spaceBetween: 80

      })
    })
  },
  methods: {
    fadeBrand (index) {
      // console.log('indexxx', index)
      if (this.swiper) {
        // fade first
        if (this.swiper.activeIndex >= index) {
          return 'fade-brand'
        }

        let fadeIndex = Number(index - this.swiper.activeIndex)
        // console.log('fadeIndex', fadeIndex)

        // fade last
        if (fadeIndex >= 4) {
          return 'fade-brand'
        }
      }
    },
    slideActive () {
      console.log('swiper.activeIndex ', this.swiper.activeIndex)
      console.log('swiper.isBeginning ', this.swiper.isBeginning)
      console.log('swiper.isEnd ', this.swiper.isEnd)
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
    }

    div.wrap-nav {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1;
      color: white;

      div.prev-nav {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      div.next-nav {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }

    }
  }
}

@include media-breakpoint-up(xs) {
  div.warp-footer-brand {
    height: 6rem;

  }
}

@include media-breakpoint-up(xl) {
  div.warp-footer-brand {
    height: 7rem;

  }
}
</style>
