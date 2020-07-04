<template>
  <section class="banner" :style="`background-image:url(${require(`@/assets/${this.image}`)})`">
    <div class="container">
      <h2 class="banner__heading" v-html="heading" />
    </div>
  </section>
</template>

<style lang="scss">
.banner {
  background: $colour-green;
  color: $colour-white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;

  @include mq($from: tablet) {
    min-height: 500px;
  }

  .container {
    width: 100%;
    height: 100%;
    display: block;
  }

  &__heading {
    font-family: 'Averia Serif Libre';
    font-weight: 300;
    color: $colour-grey-dark;
    background: rgba($colour-white, 0.8);
    padding: 30px;
    font-size: 30px;

    @include mq($from: tablet) {
      display: inline-block;
      font-size: 60px;
      min-width: 30%;
    }
  }
}
</style>

<script>
export default {
  props: ['heading', 'image']
}
</script>