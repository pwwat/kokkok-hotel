<template>
  <section>
    <div class="wrap-text mx-auto">
      <h1 class="title-content">Ignite Your Trip</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet architecto autem blanditiis corporis
        debitis eaque eum explicabo labore libero minima modi necessitatibus nemo nesciunt nisi nobis odit officiis
        omnis
        perspiciatis quis sapiente sit tempora vel, veritatis voluptate. Aperiam asperiores, deserunt ducimus eaque
        expedita harum ipsum iure labore quod ut vel velit. Accusamus accusantium adipisci aliquid architecto, aut,
        autem
        corporis culpa cum debitis dolore earum eos excepturi facilis fugit illo illum in ipsam ipsum iure molestiae
        neque
        nihil nostrum pariatur quia, quibusdam quisquam quo reiciendis reprehenderit sed vel velit veritatis voluptates
        voluptatibus. Aliquid culpa dignissimos, distinctio et ex repellendus ut.
      </p>
    </div>

    <div class="wrap-trip-album">
      <div class="row">
        <div class="col-6">
          <div class="box-image">
            <img src="@/static/images/trip/trip1.jpg" class="img-fluid" alt="">
            <div class="wrap-trip-info">
              <h5>Premium Facility Services</h5>
            </div>
            <div class="bottom-overlay-text"></div>
          </div>
        </div>
        <div class="col-6">
          <div class="box-image">
            <img src="@/static/images/trip/trip2.jpg" class="img-fluid" alt="">
            <div class="wrap-trip-info">
              <h5>Premium Facility Services</h5>
            </div>
            <div class="bottom-overlay-text"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6 col-lg-4 second-row">
          <div class="box-image">
            <img src="@/static/images/trip/trip3.jpg" class="img-fluid" alt="">
            <div class="wrap-trip-info">
              <h5>Premium Facility Services</h5>
            </div>
            <div class="bottom-overlay-text"></div>
          </div>
        </div>
        <div class="col-6 col-lg-4 second-row">
          <div class="box-image">
            <img src="@/static/images/trip/trip4.jpg" class="img-fluid" alt="">
            <div class="wrap-trip-info">
              <h5>Premium Facility Services</h5>
            </div>
            <div class="bottom-overlay-text"></div>
          </div>
        </div>

        <div class="w-100 d-block d-lg-none"></div>
        <div class="col-6 col-lg-4 second-row">
          <div class="box-image">
            <img src="@/static/images/trip/trip5.jpg" class="img-fluid" alt="">
            <div class="wrap-trip-info">
              <h5>Premium Facility Services</h5>
            </div>
            <div class="bottom-overlay-text"></div>
          </div>
        </div>

        <div class="col-6 col-lg-3 square-box">
          <div class="box-image">
            <img src="@/static/images/trip/trip6.jpg" class="img-fluid" alt="">
            <div class="wrap-trip-info">
              <h5>Premium Facility Services</h5>
            </div>
            <div class="bottom-overlay-text"></div>
          </div>
        </div>

        <div class="w-100 d-block d-lg-none"></div>
        <div class="col-6 col-lg-3 square-box">
          <div class="box-image">
            <img src="@/static/images/trip/trip7.jpg" class="img-fluid" alt="">
            <div class="wrap-trip-info">
              <h5>Premium Facility Services</h5>
            </div>
            <div class="bottom-overlay-text"></div>
          </div>
        </div>

        <div class="col-6 col-lg-3 square-box">
          <div class="box-image">
            <img src="@/static/images/trip/trip8.jpg" class="img-fluid" alt="">
            <div class="wrap-trip-info">
              <h5>Premium Facility Services</h5>
            </div>
            <div class="bottom-overlay-text"></div>
          </div>
        </div>

        <div class="w-100 d-block d-lg-none"></div>
        <div class="col-6 col-lg-3 square-box">
          <div class="box-image">
            <img src="@/static/images/trip/trip9.jpg" class="img-fluid" alt="">
            <div class="wrap-trip-info">
              <h5>Premium Facility Services</h5>
            </div>
            <div class="bottom-overlay-text"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Trip'
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/custom.scss";

div.wrap-text {
  max-width: 50rem;
  text-align: center;
}

div.wrap-trip-album {

  div[class^="col"] {
    padding: 2px;

    div.box-image {
      position: relative;
      width: 100%;

      &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: 38%;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -o-object-fit: cover;
        object-fit: cover;
      }

      div.wrap-trip-info {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1rem;
        color: #fff;
        z-index: 2;
        width: 100%;
        font-family: "Roboto Slab", serif;
      }
    }
  }

}

@include media-breakpoint-up(xs) {
  div.wrap-text p {
    padding: 0 3rem;
    text-align: left;
  }

  div.wrap-trip-album {
    padding: 0 3rem;
    margin-top: 5rem;

    div[class^="col"] {
      div.box-image {
        &:before {
          padding-top: 75%;
        }

        div.wrap-trip-info h5 {
          font-size: 14px;
        }
      }
    }
  }
}

@include media-breakpoint-up(lg) {
  div.wrap-text p {
    padding: 0 3rem;
    text-align: center;
  }

  div.wrap-trip-album {
    padding: 0 10rem;

    div[class^="col"] {
      div.box-image {
        &:before {
          padding-top: 38%;
        }

        div.wrap-trip-info h5 {
          font-size: 1.25rem;
        }

      }

      &.second-row div.box-image:before {
        padding-top: 50%;
      }

      &.square-box div.box-image {
        &:before {
          padding-top: 75%;
        }
      }

    }
  }
}
</style>
