<template>
  <section class="w-full">
    <div class="mx-auto pt-12 max-w-screen-lg">
      <heading class="pb-4" simple>Recent Interviews</heading>
      <article-list path="interviews" :article="articlesInterviews"></article-list>
      <hr class="my-12 invisible" />
      <heading as="h3" class="pb-4" simple>Recent Reviews</heading>
      <article-list path="reviews" :article="articlesReviews"></article-list>
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const articlesInterviews = await $content("interviews").sortBy('date', 'desc').limit(3).fetch();
      const articlesReviews = await $content("reviews").sortBy('date', 'desc').limit(3).fetch();
      return {
        articlesInterviews,
        articlesReviews
      };
    },
    created() {
      this.$store.commit('change_mast', '/assets/img/_mast-placeholder.jpg');
    },
    head() {
      return {
        titleTemplate: null,
        title: 'Wisconsin Music',
        script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      };
    },
  };
</script>
