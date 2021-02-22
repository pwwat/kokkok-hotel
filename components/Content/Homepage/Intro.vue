<template>
  <section id="main-intro">
    <div class="row align-items-start g-0">
      <div class="col-12 col-md-6">
        <div class="wrap-image-portrait">
          <img src="@/static/images/intro/intro_1.jpg" class="img-fluid" alt="">
        </div>
      </div>
      <div class="col-12 col-md-6">
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

          <div class="wrap-image second-image">
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
  padding-top: 6rem;
  margin-bottom: 120px;

  div.wrap-image-portrait {
    position: relative;
    z-index: 2;
    padding-right: 10rem;
    padding-left: 10rem;
  }

  div.wrap-content-intro {
    padding: 0 2rem;

    p {
      margin: 3rem 0;
    }

    div.second-image {
      margin-top: 5rem;
      transform: translateX(-19vw);

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
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
}

</style>
