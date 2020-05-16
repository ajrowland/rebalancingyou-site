<template>
  <Layout>
    <section class="photos">
      <div class="container">
        <div class="photos__container">
          <article-summary v-for="article in $page.articles.edges" :key="article.node.id" :article="article.node" />
          <instagram-post v-for="post in $page.photos.edges" :key="post.node.id" :post="post.node" />
        </div>
      </div>
    </section>

  </Layout>
</template>

<style lang="scss">
.photos {
  &__container {
    margin: -10px -20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>

<page-query>
{
  articles: allArticle(sortBy: "date") {
    edges {
      node {
        title
        path
        date (format: "D. MMMM YYYY")
        introduction
        cover_image (width: 1200, height: 500, blur: 10)
        cover_image_alt
      }
    }
  }
  photos: allInstagramPhoto(sortBy: "taken_at_timestamp") {
    edges {
      node {
        display_url
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
}
</page-query>

<script>
import ArticleSummary from '../components/ArticleSummary'
import InstagramPost from '../components/InstagramPost'

export default {
  components: {
    ArticleSummary: ArticleSummary,
    InstagramPost: InstagramPost
  },
  metaInfo: {
    title: 'Home',
    description: 'Energise, replenish, nurish.'
  }
}
</script>
