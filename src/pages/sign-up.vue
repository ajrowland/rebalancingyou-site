<template>
  <Layout>
    <banner heading="Health &amp; Wellness is<br />a lifelong journey..." image="banner.png" />
    <section class="section section--subscribe">
      <div class="container">
        <div class="section__container">
          <subscribe-form />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import SubscribeForm from '../components/SubscribeForm'

export default {
  components: {
    SubscribeForm
  }
}
</script>
