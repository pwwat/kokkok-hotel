<template>
  <section id="we-are-the-one">
    <div class="row wrap-content">
      <div class="d-none d-md-block col-md-6 left-side">
        <div class="box-image">
          <img src="@/static/images/we-are-the-one/we_1.jpg" class="mx-auto img-fluid" alt="">
        </div>
      </div>
      <div class="col-12 col-md-6 right-side">
        <div class="wrap-title">
          <p class="sub-title">DESIGN BY PROFESSIONAL</p>
          <h1>We are Experience Designers</h1>
        </div>

        <div class="wrap-image-text">
          <div class="wrap-image d-none d-md-block">
            <div class="box-image">
              <img src="@/static/images/we-are-the-one/we_2.jpg" class="mx-auto" alt="">
            </div>
          </div>
          <p class="sub-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam atque corporis culpa delectus deleniti
            dicta dolorum, eos error est explicabo laboriosam perspiciatis qui recusandae soluta, tempora, voluptas? Ad
            atque debitis delectus, dolore, in libero magnam maxime quod ratione saepe similique sit totam ut veniam
            voluptates. Animi beatae cupiditate

            <br>
            <br>
            <a href="#" class="link-to">SPEAK TO US</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WeAreExperience'
}
</script>

<style scoped lang="scss">
@import "~@/assets/scss/custom.scss";

section#we-are-the-one {
  padding: 0 10rem;

  div.wrap-content {
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    display: flex;

    div.box-image {
      position: relative;

      &:before {
        content: "";
        display: block;
        width: 100%;
        padding-top: 100%;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }

    div.left-side div.box-image {
      img {
        display: block;
        max-width: 90%;
        height: auto;
      }
    }

    div.right-side {
      div.wrap-title {

        p.sub-title {
          letter-spacing: .2rem;
          font-size: 1rem;
          font-family: "Roboto Slab", serif;

        }

        h1 {
          font-family: 'Playfair Display SC', serif;
          color: $dark-green-primary;
          font-weight: bold;
        }
      }

      div.wrap-image-text {
        position: relative;

        div.wrap-image {
          width: 60%;
        }

        p.sub-content {
          word-spacing: 0.2rem;
          font-family: "Roboto Slab", serif;
          //width: 80%;

          a {
            font-size: 14px;
            margin-top: 1rem;
          }
        }

      }

    }
  }

}

@include media-breakpoint-up(xs) {
  section#we-are-the-one {
    padding: 0 3rem;
    margin-bottom: 5rem;

    div.right-side {
      div.wrap-title {
        text-align: center;
        margin-left: 0;
        h1 {
          font-size: 2rem;
          margin-bottom: 3rem;
        }
      }

      div.wrap-image-text {
        transform: none;

        p.sub-content {
          font-size: 1rem;
          width: 100%;
          position: static;
          left: 0;
          text-align: center;
        }
      }
    }
  }

}

@include media-breakpoint-up(md) {
  section#we-are-the-one {
    margin-bottom: 10rem;

    div.right-side {
      div.wrap-image-text {
        transform: translateX(-60%);

        p.sub-content {
          font-size: 14px;
          width: 80%;
          position: absolute;
          left: 75%;
          top: 0;
        }
      }
    }
  }

}

@include media-breakpoint-up(lg) {
  section#we-are-the-one {
    padding: 0 10rem 8rem;
    margin-bottom: 10rem;

    div.right-side {
      div.wrap-title {
        text-align: left;
        margin-left: 2rem;
        h1 {
          font-size: 3rem;
          margin-bottom: 5rem;
        }
      }

      div.wrap-image-text {
        p.sub-content {
          width: 80%;
          font-size: 1.1rem;
          text-align: left;
        }
      }
    }
  }
}

@include media-breakpoint-up(xl) {
  section#we-are-the-one {
    margin-bottom: 5rem;
  }
}
</style>
