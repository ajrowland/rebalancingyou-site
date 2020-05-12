<template>
  <a v-if="display" class="photo" :style="`background-image:url(${post.display_url})`" :href="`https://www.instagram.com/p/${post.shortcode}`" rel="noopener" target="_blank" title="Visit post on Instagram">
    <div class="photo__inner">
      <div class="photo__text">
        <img class="photo__thumbnail" :src="post.thumbnail_src" alt="Post thumbnail">
        {{text}}
      </div>
      <div class="photo__tags" v-if="tags">
        <div class="photo__tag" v-for="(tag, i) in tags" :key="i" v-html="tag" />
      </div>
    </div>
  </a>
</template>

<style lang="scss">
.photo {
  display: block;
  margin: 20px;
  background: rgba(255, 255, 255, .6);
  border-bottom: 10px solid #c1c1c1;//$brand-primary-colour;//#b6c649;//lighten($brand-primary-colour, 10%);
  background-size: cover;
  background-repeat: no-repeat;
  color: $brand-secondary-colour;
  text-decoration: none;
  transition: transform .2s ease-in-out;

  &:nth-child(odd) {
    min-height: 250px;

    .photo__inner {
      background: none;
      padding: 0;
      height: 100%;
      display: flex;
      justify-content: flex-end;
    }

    .photo__text {
      background: #fff;
      padding: 20px;

      &:before {
        left: 4px;
        top: -4px;
      }
    }

    .photo__thumbnail,
    .photo__tags {
      display: none;
    }
  }

  &:hover {
    transform: scale(1.02);
  }

  &:nth-child(3n+1):last-child {
    display: none;
  }

  @media screen and (min-width: 640px) {
    border-width: 20px;
    flex: 1 0 calc(25% - 20px);
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 40px);
    position: relative;
    background: rgba(255, 255, 255, .8);
    padding: 20px;
  }

  &__text {
    position: relative;
    quotes: "“" "”" "“" "”";

    &:before {
      content: open-quote;
      display: inline-block;
      font-weight: bold;
      font-size: 100px;
      position: absolute;
      left: -15px;
      color: $brand-primary-colour;
      top: -25px;
      opacity: .2;
      line-height: 1;
    }

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
    border-top: 1px solid rgba($brand-primary-colour, .1);
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
      tags: [],
      display: true
    }
  },
  created() {
    const tokens = this.post.edge_media_to_caption.edges[0].node.text.split(' ')
    this.text = tokens.filter(t => !t.startsWith('#')).slice(0, 15).join(' ') + '...'
    this.tags = tokens.filter(t => t.startsWith('#') && t.length > 1)
    //this.display = this.tags.includes('#rebalancingyou')
  }
}
</script>
