<template>
  <section id="our-client-say">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="title-content">What Our Clients Say</h1>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 align-self-center">
          <div class="client-slide">
            <!-- Slider main container -->
            <div ref="swiper-our-client" class="swiper-container swiper-our-client">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                  <blockquote class="wrap-quote-and-author">
                    <div class="wrap-quote-top">
                      <img src="/images/our-client/left-quote.svg" alt="">
                    </div>
                    <span class="quote-text">
                      1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur dolore dolorum eaque excepturi harum ipsa ipsam libero praesentium vel? Amet dolores laudantium modi neque, provident repellat ullam? Aperiam consequatur cupiditate deserunt dolore ducimus ea eaque eos et illo ipsa ipsum iusto laudantium nisi odit omnis, quaerat reiciendis, vitae voluptatibus.
                    </span>
                    <div class="wrap-quote-bottom">
                      <img src="/images/our-client/right-quote.svg" alt="">
                    </div>
                    <div class="author">
                      Alan w.
                    </div>
                  </blockquote>
                </div>
                <div class="swiper-slide">
                  <blockquote class="wrap-quote-and-author">
                    <div class="wrap-quote-top">
                      <img src="/images/our-client/left-quote.svg" alt="">
                    </div>

                    <span class="quote-text">
                      2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis corporis cumque deserunt, doloribus earum et exercitationem, facilis magni molestiae molestias nemo non quam veniam voluptatibus! Alias autem consequuntur cum dolores earum est et, expedita, illum laboriosam magni nam necessitatibus non placeat quos repellendus similique tenetur, vel voluptate voluptates voluptatibus!
                    </span>
                    <div class="wrap-quote-bottom">
                      <img src="/images/our-client/right-quote.svg" alt="">
                    </div>
                    <div class="author">
                      Lori M. Aaron
                    </div>
                  </blockquote>
                </div>
                <div class="swiper-slide">
                  <blockquote class="wrap-quote-and-author">
                    <div class="wrap-quote-top">
                      <img src="/images/our-client/left-quote.svg" alt="">
                    </div>

                    <span class="quote-text">
                      3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ducimus eum hic necessitatibus odit omnis, quas quibusdam? Accusantium animi aperiam architecto assumenda consequatur cumque dolor dolore doloribus eius error est eveniet expedita fuga id in itaque minus molestiae non nulla, pariatur perferendis perspiciatis porro quidem recusandae reiciendis sapiente, suscipit voluptatem.
                    </span>
                    <div class="wrap-quote-bottom">
                      <img src="/images/our-client/right-quote.svg" alt="">
                    </div>
                    <div class="author">
                      Marilyn D. Sanford
                    </div>
                  </blockquote>
                </div>
              </div>

              <!-- If we need pagination -->
              <div class="swiper-pagination"></div>
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
    </div>
  </section>
</template>

<script>
// import Swiper JS
import { Swiper } from 'swiper/bundle'
// import Swiper styles
import 'swiper/swiper-bundle.css'

export default {
  name: 'OurClientSay',
  data () {
    return {
      swiper: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.swiper = new Swiper('.swiper-our-client', {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },

        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          renderBullet (index, className) {
            return '<span class="' + className + ' custom-dot"></span>'
          },
          clickable: true
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 1,
        spaceBetween: 0

      })
    })
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/custom.scss";

section#our-client-say {
  margin-bottom: 5rem;

  h1.title-content {
    text-align: center;
  }

  div.client-slide {
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
    padding-bottom: 5rem;

    div.swiper-container {
      div.swiper-wrapper {
        width: 100%;

        div.swiper-slide {
          blockquote.wrap-quote-and-author {
            position: relative;
            margin: 60px;

            span.quote-text {
              line-height: 2rem;
              font-size: 1.2rem;
              font-family: 'Roboto Slab', serif;
              font-weight: lighter;
            }

            div[class^="wrap-quote"] img {
              filter: invert(19%) sepia(7%) saturate(5543%) hue-rotate(123deg) brightness(93%) contrast(83%);
            }

            div.wrap-quote-top {
              position: absolute;
              left: -40px;
              top: -60px;
            }

            div.wrap-quote-bottom {
              position: absolute;
              bottom: -60px;
              right: 40px;
            }

            div.author {
              margin-top: 1rem;
              font-family: 'Playfair Display SC', serif;
              text-align: center;
              color: $dark-green-primary;
              font-size: 1.5rem;
            }
          }

        }
      }
    }

    div.wrap-nav {
      height: auto;
      position: relative;
      max-width: 320px;
      margin: 2rem auto;
      z-index: 2;

      div.button-nav {
        position: relative;
        border: 1px solid $medium-green-primary;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: transform .4s cubic-bezier(.76, 0, .24, 1);
        font-size: 24px;
        color: $dark-green-primary;
        display: inline-block;

        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        &.next-nav {
          margin-left: 2rem;
        }
      }
    }
  }
}

@include media-breakpoint-up(xs) {

  h1.title-content {
    font-size: 2rem;
  }
  div.swiper-slide {
    blockquote.wrap-quote-and-author {

      span.quote-text {
        font-size: 1rem;
      }

      div[class^="wrap-quote"] img {
        width: 20px;
      }
    }
  }
}

@include media-breakpoint-up(lg) {
  h1.title-content {
    font-size: 2.5rem;
  }
}

@include media-breakpoint-up(xl) {

  div.swiper-slide {
    blockquote.wrap-quote-and-author {
      span.quote-text {
        font-size: 1.2rem;
      }

      div[class^="wrap-quote"] img {
        width: 40px;
      }
    }
  }
}

</style>
