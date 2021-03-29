<template>
  <a
    v-if="display"
    class="photo"
    :href="`https://www.instagram.com/p/${post.shortcode}`"
    rel="noopener"
    target="_blank"
    title="Visit post on Instagram"
  >
    <div class="photo__inner">
      <img
        class="photo__thumbnail"
        :src="post.thumbnail_src"
        alt="Post thumbnail"
        loading="lazy"
        width="375"
        height="375"
      />
      <div class="photo__text">
        {{
          text.replace(
            /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
            ""
          )
        }}
      </div>
      <div class="photo__tags" v-if="tags">
        <div
          class="photo__tag"
          v-for="(tag, i) in tags"
          :key="i"
          v-html="tag"
        />
      </div>
    </div>
  </a>
</template>

<style lang="scss">
.photo {
  display: block;
  margin: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-bottom: 4px solid $colour-green;
  background-size: cover;
  background-repeat: no-repeat;
  color: $colour-grey-dark;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  width: 100%;

  //&:nth-child(odd) {
  min-height: 350px;

  .photo__inner {
    background: none;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .photo__text {
    background: $colour-white;
    padding: 20px;

    &:before {
      left: 6px;
      top: -2px;
    }
  }

  .photo__tags {
    display: none;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:nth-child(3n + 1):last-child {
    display: none;
  }

  @include mq($from: tablet) {
    width: calc(50% - 40px);
  }

  @include mq($from: desktop) {
    width: calc(33.33% - 40px);
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 40px);
    position: relative;
    background: rgba(255, 255, 255, 0.8);
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
      left: -13px;
      color: $colour-green;
      top: -23px;
      opacity: 0.4;
      line-height: 1;
    }

    &:first-letter {
      font-size: 150%;
      font-weight: bold;
    }
  }

  &__thumbnail {
    width: 100%;
    height: auto;

    @include mq($from: tablet) {
      position: absolute;
      height: 100%;
    }
  }

  &__tags {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid rgba($colour-coral, 0.1);
  }

  &__tag {
    font-size: 0.8rem;
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
    color: $colour-grey-dark;
    text-decoration: none;
  }
}
</style>

<script>
export default {
  props: ["post"],
  data() {
    return {
      text: "",
      tags: [],
      display: true,
    };
  },
  created() {
    const tokens = this.post.edge_media_to_caption.edges[0].node.text.split(
      " "
    );
    this.text =
      tokens
        .filter((t) => !t.startsWith("#"))
        .slice(0, 10)
        .join(" ")
        .replace(
          /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
          ""
        ) + "...";
    this.tags = tokens.filter((t) => t.startsWith("#") && t.length > 1);
    this.display = this.tags.includes("#rebalancingyou");
  },
};
</script>
