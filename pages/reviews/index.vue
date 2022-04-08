<template>
  <section>
    <div class="py-6 md:(py-12)"><heading>Concert Reviews</heading></div>
    <article-list path="reviews" :article="articlesReviews"></article-list>
  </section>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const articlesReviews = await $content("reviews").sortBy('date', 'desc').fetch();
      return {
        articlesReviews
      };
    },
    created() {
      this.$store.commit('change_mast', '/assets/img/_mast-placeholder.jpg');
    },
    head() {
      return {
        title: 'Reviews',
      };
    },
  };
</script>