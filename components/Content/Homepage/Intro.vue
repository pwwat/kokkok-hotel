<template>
  <section id="main-intro">
    <div class="row align-items-start g-0">
      <div class="col-12 col-md-6 order-1 order-md-0">
        <div class="wrap-image-portrait">
          <img src="@/static/images/intro/intro_1.jpg" class="img-fluid" alt="">
        </div>
      </div>
      <div class="col-12 col-md-6 order-0 order-md-1">
        <div class="wrap-content-intro">
          <h1 class="title-content">Wonderfully Memories</h1>

          <p class="paragraph-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aliquid corporis deserunt eius
            eligendi enim explicabo id illum iste labore, laboriosam nam nemo nostrum placeat possimus reiciendis
            voluptas! Dolore!
            <br>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores expedita incidunt, labore modi porro
            quas. Accusamus adipisci, aliquam <br>
            nostrum nulla optio praesentium quae quas, quod sunt temporibus totam ullam ut vitae! Aspernatur, culpa illo
            laboriosam non tempora voluptate.
          </p>

          <a href="#" class="link-to">MEET OUR TEAM</a>

          <div class="wrap-image second-image d-none d-xl-block">
            <img src="@/static/images/intro/intro_2.jpg" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom";

section#main-intro {

  div.wrap-image-portrait {
    position: relative;
    z-index: 2;
  }

  div.wrap-content-intro {

    div.second-image {
      z-index: 1;

      &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: 41%;
      }

      img {
        max-width: 540px;
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
        left: 0;
      }
    }
  }
}

@include media-breakpoint-up(xs) {
  section#main-intro {
    margin-bottom: 2rem;
    padding-top: 0;
    div.wrap-image-portrait {
      padding: 0;
    }

    div.wrap-content-intro {
      padding: 2rem;
    }
  }
}

@include media-breakpoint-up(sm) {
  section#main-intro {
    margin-bottom: 5rem;

    div.wrap-content-intro {
      margin-bottom: 3rem;
    }
  }

}

@include media-breakpoint-up(md) {
  section#main-intro{
    padding-top: 6rem;
    div.wrap-image-portrait {
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }

}

@include media-breakpoint-up(lg) {
  div.wrap-image-portrait {
    padding-right: 3rem;
    padding-left: 3rem;
  }

  section#main-intro {
    margin-bottom: 5rem;
  }

  div.wrap-content-intro {
    padding: 0 2rem;

    div.second-image {
      margin-top: 2rem;
      transform: translateX(-13vw);
    }
  }

  div.wrap-content-intro p.paragraph-content {
    margin: 3rem 0;
  }
}

@include media-breakpoint-up(xl) {
  section#main-intro {
    margin-bottom: 10rem;

    div.wrap-image-portrait {
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }
}

@include media-breakpoint-up(xxl) {
  section#main-intro {

    div.wrap-image-portrait {
      padding-right: 6rem;
      padding-left: 6rem;
    }
  }

  div.wrap-content-intro {

    div.second-image {
      margin-top: 6rem;
      transform: translateX(-12vw)
    }
  }

}
</style>
