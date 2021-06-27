<template>
  <Layout>
    <article class="article">
      <div class="container">
        <h2>Fed up of feeling like your brain is fuzzy all the time?</h2>
        <h3>
          <p>READY to start feeling more clear headed and like your old self again? Great, you're in the right place...</p>
        </h3>

        <figure class="figure--desktop">
          <g-image src="~/assets/five-simple-steps.png" alt="5 simple steps" />
        </figure>

        <p>Trying to get through each day with brain fog is no laughing matter. I know this because I've suffered from it. Forgetting what I was doing, mind going blank mid sentence AND even forgetting entire conversations!</p>

        <p>Not knowing when it would strike was embarrassing and I’d had enough but after implementing these simple steps I now feel like I can think straight again!</p>

        <p>AND it's the reason why I want to share this FREE <strong>5 Simple Steps to Banish Brain Fog so you can Think Straight</strong>, actionable workbook with you.</p>

        <p>Because dialing into what's causing your Brain Fog is the secret to feeling like YOU again!</p>

        <figure class="figure--mobile">
          <g-image src="~/assets/five-simple-steps.png" alt="5 simple steps" />
        </figure>

        <p>Inside <strong>5 Simple Steps to Banish Brain Fog so you can Think Straight</strong>, you'll discover:</p>

        <ul>
          <li>How to Nourish your Brain Cells</li>
          <li>The right amount of protein to eat</li>
          <li>Ways to Soothe your Nervous System</li>
          <li>Hydration Hacks</li>
        </ul>

        <p>READY to start feeling Normal again?</p>

        <p>Fill in your details below and grab your free copy of the <strong>5 Simple Steps to Banish Brain Fog so you can Think Straight</strong> workbook today.</p>

        <p>THIS is where the SIGN up form Goes</p>

        <p>Once you've completed all your details your FREE workbook will be ready to download in your confirmation email.</p>
      </div>
    </article>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Landing.vue'

export default {
  components: {
    Layout
  },
  metaInfo: function () {
    const { siteUrl } = this.$page.metadata
    const title = 'Fed up of feeling like your brain is fuzzy all the time?';
    const desc = 'READY to start feeling more clear headed and like your old self again? Great, you\'re in the right place...';
    const image = require('~/assets/five-simple-steps.png');
    const imageUrl = `${siteUrl}${image}`

    return {
      title,
      meta: [
        { name: 'description', content: desc },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:title', content: title },
        { name: 'twitter:site', content: '@rebalancingyou' },
        { name: 'twitter:creator', content: '@rebalancingyou' },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:url', content: `${siteUrl}/brain-fog/` },
        { name: 'twitter:image', content: imageUrl },
        { property: 'og:image', content: imageUrl },
      ],
    }
  }
}
</script>

<page-query>
{
  metadata {
    siteUrl
  }
}
</page-query>
