<template>
  <g-link class="article-summary" :to="article.path" title="Read full article">
    <div class="article-summary__inner">
      <div class="article-summary__date" v-html="article.date" />
      <div class="article-summary__text">
        <p>{{article.introduction}} <span class="article-summary__read-more">Read more &#x27F6;</span></p>
      </div>
      <g-image class="article-summary__thumbnail" :src="article.cover_image.src" alt="Article thumbnail" />
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
  border-bottom: 4px solid $colour-green;
  background-size: cover;
  background-repeat: no-repeat;
  color: $colour-grey-dark;
  text-decoration: none;
  transition: transform .2s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
  }

  @include mq($from: desktop) {
    flex: 1 0 calc(60% - 40px);
  }

  &__inner {
    position: relative;
    height: 100%;
  }

  &__date {
    font-size: .8rem;
    font-weight: bold;
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
    quotes: "“" "”" "“" "”";
    padding: 80px 20px 20px 20px;
    background: linear-gradient(to top, rgba($colour-white, 1) 30%,rgba($colour-white, .7) 63%,rgba($colour-white, 0) 100%);

    p {
      position: relative;
      margin: 0;

      @include mq($from: tablet) {
        font-size: 22px;
      }
    }

    p:before {
      content: open-quote;
      display: inline-block;
      font-weight: bold;
      font-size: 100px;
      position: absolute;
      left: -13px;
      color: $colour-green;
      top: -23px;
      opacity: .4;
      line-height: 1;
    }

    p:first-letter {
      font-size: 150%;
      font-weight: bold;
    }
  }

  &__read-more {
    color: $colour-green;
    margin-left: 10px;
    transition: margin .2s ease-in-out;

    @include mq($from: tablet) {
      margin-left: 20px;
    }

    #{$root}:hover & {
      margin-left: 30px;
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