<template>
  <div class="photo">
    <div class="photo__inner">
      <div class="photo__text">
        <img class="photo__thumbnail" :src="post.thumbnail_src" alt="Post thumbnail">
        {{text}}
      </div>
      <div class="photo__tags" v-if="tags">
        <div class="photo__tag" v-for="(tag, i) in tags" :key="i" v-html="tag" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.photo {
  margin: 20px;
  padding: 30px;
  background: rgba(255, 255, 255, .6);
  flex: 1 0 calc(25% - 20px);
  border-bottom: 10px solid lighten($brand-primary-colour, 10%);

  @media screen and (min-width: 640px) {
    border-width: 40px;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    quotes: "“" "”" "“" "”";

    &:before {
      content: open-quote;
      display: inline-block;
      font-weight: bold;
      font-size: 100px;
      position: absolute;
      left: -20px;
      color: $brand-primary-colour;
      top: -25px;
      opacity: .1;
      line-height: 1;
    }
  }

  &__text {
    &:first-letter {
      font-size: 150%;
      font-weight: bold;
      color: #666;
    }
  }

  &__thumbnail {
    float: right;
    margin: 0 0 20px 20px;
    border: 10px solid #fff;
    border-radius: 120px;
  }

  &__tags {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid lighten($brand-primary-colour, 40%);
  }

  &__tag {
    font-size: .8rem;
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
  }
}
</style>

<script>
export default {
  props: ['post'],
  data() {
    return {
      text: '',
      tags: []
    }
  },
  created() {
    const tokens = this.post.edge_media_to_caption.edges[0].node.text.split(' ')
    this.text = tokens.filter(t => !t.startsWith('#')).join(' ')
    this.tags = tokens.filter(t => t.startsWith('#') && t.length > 1)
  }
}
</script>
