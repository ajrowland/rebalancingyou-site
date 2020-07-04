<template>
  <Layout>
    <article class="recipe">
      <div class="container">
        <div class="recipe__header">
          <h3 class="recipe__title">
            {{ $page.recipe.title }}
          </h3>
        </div>
        <div v-if="$page.recipe.introduction" class="recipe__intro" v-html="$page.recipe.introduction" />
        <div class="recipe__image" v-if="$page.recipe.cover_image">
          <g-image :src="$page.recipe.cover_image" :alt="$page.recipe.cover_image_alt" position="top" />
        </div>
        <div class="recipe__content">
          <p class="recipe__back"><g-link to="/" title="Return to home">&#9664; Back</g-link></p>
          <div v-if="$page.recipe.content" v-html="$page.recipe.content" />
          <h2>Ingredients</h2>
          <ul>
            <li v-for="(ingredient, i) in $page.recipe.ingredients" :key="i" v-html="ingredient" />
          </ul>
          <g-image v-if="$page.recipe.additional_image_1" :src="$page.recipe.additional_image_1" :alt="$page.recipe.additional_image_1_alt" />
          <h2>Method</h2>
          <ol>
            <li v-for="(task, i) in $page.recipe.method" :key="i" v-html="task" />
          </ol>
          <g-image v-if="$page.recipe.additional_image_2" :src="$page.recipe.additional_image_2" :alt="$page.recipe.additional_image_2_alt" />
          <div v-if="$page.recipe.end">
            <h2>{{$page.recipe.end.heading}}</h2>
            <p v-for="(para, i) in $page.recipe.end.text" :key="i" v-html="para" />
          </div>
          <p class="recipe__back"><g-link to="/" title="Return to home">&#9664; Back</g-link></p>
        </div>
      </div>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: function () {
    const { siteUrl } = this.$page.metadata

    const metaData = {
      title: this.$page.recipe.title,
      meta: [
        { name: 'description', content: this.$page.recipe.description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: this.$page.recipe.description },
        { name: 'twitter:title', content: this.$page.recipe.title },
        { name: 'twitter:site', content: '@rebalancingyou' },
        { name: 'twitter:creator', content: '@rebalancingyou' },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.$page.recipe.title },
        { property: 'og:description', content: this.$page.recipe.description },
        { property: 'og:url', content: `${siteUrl}${this.$page.recipe.path}` }
      ],
      //script: [{ src: 'https://platform.twitter.com/widgets.js', async: true }]
    }

    if (this.$page.recipe.cover_image) {
      const { src: imagePath } = this.$page.recipe.cover_image
      const imageUrl = `${siteUrl}${imagePath}`

      metaData.meta.push({ name: 'twitter:image', content: imageUrl })
      metaData.meta.push({ property: 'og:image', content: imageUrl })
    }

    return metaData
  }
}
</script>

<page-query>
query Recipe ($id: ID!) {
  recipe: recipe (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    introduction
    description
    ingredients
    method
    end {
      heading
      text
    }
    content
    cover_image (width: 1200, height: 400, blur: 10)
    cover_image_alt
    additional_image_1 (width: 800, height: 250, blur: 10)
    additional_image_1_alt
  }
  metadata: metadata {
    siteUrl
  }
}
</page-query>

<style lang="scss">
.recipe {
  &__header {
     margin: 1rem 0;

    @include mq($from: tablet) {
      margin: 1rem 0 5rem 0;
    }
  }

  &__title {
    font-size: 30px;
    font-weight: 700;
    font-family: "Open Sans Condensed";
    margin: .1rem 0;

    @include mq($from: tablet) {
      font-size: 60px;
    }
  }

  &__info {
    font-size: .8rem;
  }

  &__intro {
    quotes: "“" "”" "“" "”";
    font-size: 18px;
    position: relative;
    line-height: 2rem;
    margin: 1.6rem 0;

    @include mq($from: tablet) {
      width: 70%;
      font-size: 30px;
      line-height: 3.4rem;
      margin: 2rem auto;
    }

    &:before {
      content: open-quote;
      display: inline-block;
      font-weight: bold;
      color: $colour-green;
      font-size: 60px;
      position: absolute;
      left: -10px;
      top: -10px;
      opacity: .4;
      line-height: 1;

      @include mq($from: tablet) {
        font-size: 100px;
        left: -32px;
        top: -17px;
      }
    }
  }

  &__image {
    margin: 1rem 0;

    @include mq($from: tablet) {
      margin: 2rem 0;
    }

    img {
      display: inline;
      border-bottom: 4px solid $colour-green;
      max-width: 100%;
    }
  }

  &__content {
    margin: 0 auto;
    line-height: 2rem;

    @include mq($from: tablet) {
      width: 70%;
    }

    h2 {
      margin: 1rem 0;

      @include mq($from: tablet) {
        margin: 2rem 0;
      }
    }

    a {
      color: $colour-green;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    hr {
      border-style: solid;
      border-color: $colour-green;
      opacity: .4;
    }

    img {
      width: 100%;
      border-bottom: 4px solid $colour-green;
      margin: 1rem 0;
    }
  }

  &__back {
    a {
      transition: all .2s ease-in-out;

      &:hover {
        margin-left: -10px;
        text-decoration: none;

      }
    }
  }
}
</style>
