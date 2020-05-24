<template>
  <Layout>
    <section class="section section--articles">
      <div class="container">
        <h2>Articles</h2>
        <div class="section__container">
          <article-summary v-for="article in $page.articles.edges" :key="article.node.id" :article="article.node" />
        </div>
      </div>
    </section>
    <section class="section section--recipes">
      <div class="container">
        <h2>Recipes</h2>
        <div class="section__container">
          <recipe-summary v-for="recipe in $page.recipes.edges" :key="recipe.node.id" :recipe="recipe.node" />
        </div>
      </div>
    </section>
    <section class="section section--instagram">
      <div class="container">
        <h2>Instagram</h2>
        <div class="section__container">
          <instagram-post v-for="post in $page.photos.edges" :key="post.node.id" :post="post.node" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<style lang="scss">
.section {
  &--articles {
    padding-top: 2rem;

    h2 {
      display: none;
    }
  }
  &--recipes {
  }
  &--instagram {
  }
  &__container {
    margin: -10px -20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h2 {
    font-family: "Open Sans";
    font-weight: normal;
    margin: 1rem 0;
  }
}
</style>

<page-query>
{
  recipes: allRecipe(sortBy: "date") {
    edges {
      node {
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        introduction
        cover_image (width: 400, height: 375, blur: 10)
        cover_image_alt
      }
    }
  }
  articles: allArticle(sortBy: "date") {
    edges {
      node {
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        introduction
        cover_image (width: 400, height: 375, blur: 10)
        cover_image_alt
      }
    }
  }
  photos: allInstagramPhoto(sortBy: "taken_at_timestamp", limit: 3) {
    edges {
      node {
        thumbnail_src
        shortcode
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
  metadata {
    siteUrl
    siteDescription
  }
}
</page-query>

<script>
import RecipeSummary from '../components/RecipeSummary'
import ArticleSummary from '../components/ArticleSummary'
import InstagramPost from '../components/InstagramPost'

export default {
  components: {
    RecipeSummary,
    ArticleSummary,
    InstagramPost
  },
  metaInfo: function () {
    const { siteUrl, siteDescription } = this.$page.metadata
    const title = 'Rebalancing You. Emma Rowland nutrition.'
    const imageUrl = `${siteUrl}/share.jpg`

    const metaData = {
      title: title,
      meta: [
        { name: 'description', content: siteDescription },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:title', content: title },
        { name: 'twitter:site', content: '@rebalancingyou' },
        { name: 'twitter:creator', content: '@rebalancingyou' },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { name: 'twitter:image', content: imageUrl },
        { property: 'og:image', content: imageUrl }
      ],
      //script: [{ src: 'https://platform.twitter.com/widgets.js', async: true }]
    }

    return metaData
  }
}
</script>
