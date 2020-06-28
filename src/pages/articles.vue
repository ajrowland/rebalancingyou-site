<template>
  <Layout>
    <banner heading="Articles" image="banner.jpg" />
    <section class="section">
      <div class="container">
        <div class="section__container">
          <article-summary v-for="article in $page.articles.edges" :key="article.node.id" :article="article.node" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import ArticleSummary from '../components/ArticleSummary'

export default {
  components: {
    ArticleSummary
  }
}
</script>

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
}
</page-query>
