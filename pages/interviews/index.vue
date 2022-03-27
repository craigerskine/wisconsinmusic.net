<template>
  <section>
    <div class="py-6 md:(py-12)"><heading>Artist &amp; Band Interviews</heading></div>
    <article-list path="interviews" :article="articlesInterviews"></article-list>
  </section>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const articlesInterviews = await $content("interviews").sortBy('date', 'desc').fetch();
      return {
        articlesInterviews
      };
    },
    created() {
      this.$store.commit('change_mast', '/assets/img/_mast-placeholder.jpg');
    },
    head() {
      return {
        title: 'Interviews',
      };
    },
  };
</script>