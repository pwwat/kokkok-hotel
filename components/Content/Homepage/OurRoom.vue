<template>
  <section>
    <div class="row g-0 main-our-room">
      <div class="background-our-room"></div>
      <div class="col-12 col-md-6">
        <h1 class="text-center title-content">Our Room</h1>
      </div>
      <div class="col-12 col-md-6">
        <p class="paragraph-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores aspernatur aut autem
          consequatur deserunt enim error esse exercitationem expedita illum incidunt ipsa laboriosam magnam mollitia
          nemo, nobis numquam officiis provident quae quibusdam quidem quisquam quos recusandae reiciendis reprehenderit
          sunt tempore temporibus tenetur? Debitis dolorum eum ex labore neque omnis quaerat sequi veniam vitae. At
          distinctio fugit illo inventore iste labore nostrum quas qui, repellat saepe sed totam veritatis vero? Culpa
          debitis dolor dolorem error, et eveniet ex, expedita mollitia nobis numquam placeat quis, sint voluptatem. A,
          animi culpa dolore in itaque maxime nemo odit, quam, reiciendis sunt vitae.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurRoom'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/custom.scss";

div.main-our-room {

  position: relative;
  z-index: 0;

  div.background-our-room {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: calc(100% + 175px);
    background: $lighter-green-background;
    z-index: -1;
  }
}

@include media-breakpoint-up(md) {
  div.background-our-room  {
    height: 90%;
    top: -25%;
  }

}
</style>
