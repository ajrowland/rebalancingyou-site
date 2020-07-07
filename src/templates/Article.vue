<template>
  <Layout>
    <article class="article">
      <div class="container">
        <div class="article__header">
          <div class="article__info">{{ $page.article.date }}. <strong>{{ $page.article.timeToRead }} min read.</strong></div>
          <h3 class="article__title">
            {{ $page.article.title }}
          </h3>
        </div>
        <div class="article__intro" v-html="$page.article.introduction" />
        <div class="article__image" v-if="$page.article.cover_image">
          <g-image :src="$page.article.cover_image" :alt="$page.article.cover_image_alt" position="top" />
        </div>
        <div class="article__content">
          <p class="article__back"><g-link to="/" title="Return to home">◂ Back</g-link></p>
          <div v-html="$page.article.content" />
          <p class="article__back"><g-link to="/" title="Return to home">◂ Back</g-link></p>
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
      title: this.$page.article.title,
      meta: [
        { name: 'description', content: this.$page.article.description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: this.$page.article.description },
        { name: 'twitter:title', content: this.$page.article.title },
        { name: 'twitter:site', content: '@rebalancingyou' },
        { name: 'twitter:creator', content: '@rebalancingyou' },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.$page.article.title },
        { property: 'og:description', content: this.$page.article.description },
        { property: 'og:url', content: `${siteUrl}${this.$page.article.path}` }
      ],
      //script: [{ src: 'https://platform.twitter.com/widgets.js', async: true }]
    }

    if (this.$page.article.cover_image) {
      const { src: imagePath } = this.$page.article.cover_image
      const imageUrl = `${siteUrl}${imagePath}`

      metaData.meta.push({ name: 'twitter:image', content: imageUrl })
      metaData.meta.push({ property: 'og:image', content: imageUrl })
    }

    return metaData
  }
}
</script>

<page-query>
query Article ($id: ID!) {
  article: article (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    introduction
    description
    content
    cover_image (width: 1200, height: 500, blur: 10)
    cover_image_alt
  }
  metadata: metadata {
    siteUrl
  }
}
</page-query>

<style lang="scss">
.article {
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
    overflow: hidden;
    width: 100%;

    @include mq($from: tablet) {
      width: 70%;
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

    ol {
      font-size: .8rem;
      padding-left: 1rem;
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
