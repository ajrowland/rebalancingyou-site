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
  min-height: 500px;
  display: flex;

  .container {
    width: 100%;
    height: 100%;
  }

  &__heading {
    font-family: 'Bree Serif';
    color: $colour-white;
    display: inline-block;
    background: rgba($colour-grey-dark, 0.4);
    width: 30%;
    padding: 30px;
    font-size: 60px;
  }
}
</style>

<script>
export default {
  props: ['heading', 'image']
}
</script>