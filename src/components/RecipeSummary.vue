<template>
  <g-link class="recipe-summary" :to="recipe.path" title="View recipe">
    <div class="recipe-summary__inner">
      <!--<div class="recipe-summary__info">Recipe</div>-->
      <div class="recipe-summary__text">
        <h3>{{recipe.title}}</h3>
      </div>
      <g-image
        v-if="recipe.cover_image"
        class="recipe-summary__thumbnail"
        :src="recipe.cover_image.src"
        alt="Recipe thumbnail"
      />
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["recipe"],
};
</script>

<style lang="scss">
.recipe-summary {
  $root: &;

  display: block;
  margin: 20px;
  border-bottom: 4px solid $colour-coral;
  background-size: cover;
  background-repeat: no-repeat;
  color: $colour-grey-dark;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  width: 100%;

  &:hover {
    transform: scale(1.02);
  }

  @include mq($from: tablet) {
    width: calc(50% - 40px);
  }

  @include mq($from: desktop) {
    width: calc(33.33% - 40px);
  }

  &__inner {
    position: relative;
    height: 100%;
  }

  &__info {
    font-size: 0.8rem;
    position: absolute;
    top: 0;
    right: 0;
    background: $colour-white;
    display: inline-block;
    padding: 4px 20px;
  }

  &__text {
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    padding: 20px;
    background: $colour-white;

    h3 {
      position: relative;
      margin: 0;
      font-size: 21px;
      font-weight: normal;
    }
  }

  &__thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 300px;
  }
}
</style>