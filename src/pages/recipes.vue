<template>
  <Layout>
    <banner heading="Recipes" image="banner.png" />
    <section class="section section--recipes">
      <div class="container">
        <div class="section__container">
          <recipe-summary v-for="recipe in $page.recipes.edges" :key="recipe.node.id" :recipe="recipe.node" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import RecipeSummary from '../components/RecipeSummary'

export default {
  components: {
    RecipeSummary
  }
}
</script>

<page-query>
{
  recipes: allRecipe(sortBy: "date") {
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
  metadata {
    siteUrl
    siteDescription
  }
}
</page-query>