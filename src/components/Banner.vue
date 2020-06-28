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
  min-height: 500px;

  &__heading {
    color: $colour-grey-dark;
    display: inline-block;
    background: rgba($colour-white, 0.9);
    width: 35%;
    padding: 30px;
  }
}
</style>

<script>
export default {
  props: ['heading', 'image']
}
</script>