<template>
  <g-link class="article-summary" :to="article.path" title="Read full article">
    <div class="article-summary__inner">
      <div class="article-summary__info">{{article.label}}</div>
      <div class="article-summary__text">
        <h3>{{article.title}} <span class="article-summary__read-more">Read more &#9654;</span></h3>
      </div>
      <g-image class="article-summary__thumbnail" :src="article.image.src" alt="Article thumbnail" />
    </div>
  </g-link>
</template>

<script>
export default {
  props: ["article"]
}
</script>

<style lang="scss">
.article-summary {
  $root: &;

  display: block;
  margin: 20px;
  //border-bottom: 4px solid $colour-green;
  background-size: cover;
  background-repeat: no-repeat;
  color: $colour-grey-dark;
  text-decoration: none;
  transition: transform .2s ease-in-out;
  overflow: hidden;
  width: 100%;

  &:hover {
    transform: scale(1.02);
  }

  @include mq($from: desktop) {
    flex: 1 0 calc(25% - 40px);
  }

  &__inner {
    position: relative;
    height: 100%;
  }

  &__info {
    font-size: .8rem;
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
    padding: 80px 20px 20px 20px;
    background: linear-gradient(to top, rgba($colour-white, 1) 45%,rgba($colour-white, .7) 63%,rgba($colour-white, 0) 100%);

    h3 {
      margin: 0;
      font-weight: normal;
      font-size: 21px;

      span {
        font-size: 16px;
      }

      @include mq($from: tablet) {
        font-size: 34px;

        span {
          font-size: 22px;
        }
      }
    }
  }

  &__read-more {
    font-family: 'Bree Serif';
    color: $colour-green;
    display: block;
    white-space: nowrap;
    margin-top: 5px;
  }

  &__thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 300px;
  }
}
</style>