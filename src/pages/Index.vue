<template>
  <Layout>
    <section class="photos">
      <div class="container">
        <div class="photos__container">
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
  photos: allInstagramPhoto {
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
import InstagramPost from '../components/InstagramPost'

export default {
  components: {
    InstagramPost: InstagramPost
  },
  metaInfo: {
    title: 'Home',
    description: 'Energise, replenish, nurish.'
  }
}
</script>
