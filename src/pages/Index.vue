<template>
  <Layout>
    <banner heading="Energise, Restore, Nourish..." image="banner.png" />
    <section class="section section--articles">
      <div class="container">
        <h2><g-link to="/articles">Articles<span class="section__view-more">View more &#9654;</span></g-link></h2>
        <div class="section__container">
          <article-summary v-for="article in $page.articles.edges" :key="article.node.id" :article="article.node" />
        </div>
      </div>
    </section>
    <section class="section section--recipes">
      <div class="container">
        <h2><g-link to="/recipes">Recipes<span class="section__view-more">View more &#9654;</span></g-link></h2>
        <div class="section__container">
          <recipe-summary v-for="recipe in $page.recipes.edges" :key="recipe.node.id" :recipe="recipe.node" />
        </div>
      </div>
    </section>
    <section class="section section--instagram">
      <div class="container">
        <h2><a href="https://www.instagram.com/rebalancingyou" target="_blank">Instagram<span class="section__view-more">View more &#9654;</span></a></h2>
        <div class="section__container">
          <instagram-post v-for="post in $page.photos.edges" :key="post.node.id" :post="post.node" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
{
  articles: allArticle(sortBy: "date") {
    edges {
      node {
        title
        path
        label: date (format: "D. MMMM YYYY")
        introduction
        image: cover_image (width: 400, height: 375, blur: 10)
        alt: cover_image_alt
      }
    }
  }
  recipes: allRecipe(sortBy: "date", limit: 3) {
    edges {
      node {
        title
        path
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
import Banner from '../components/Banner'
import RecipeSummary from '../components/RecipeSummary'
import ArticleSummary from '../components/ArticleSummary'
import InstagramPost from '../components/InstagramPost'
import SubscribeForm from '../components/SubscribeForm'

export default {
  components: {
    Banner,
    RecipeSummary,
    ArticleSummary,
    InstagramPost,
    SubscribeForm
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
