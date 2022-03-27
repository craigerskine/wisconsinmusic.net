<template>
  <section class="w-full">
    <div class="py-12 bg(gray-500 opacity-10) flex(& col) md:(py-24)">
      <h1 class="m-auto p-4 max-w-4xl text([calc(1.5vw+1.5vh)] gray-400 center) leading-normal font-bold">
        <b class="text([calc(2vw+2vh)] gray-200) block">Concert &amp; Artist</b>
        <nuxt-link to="/reviews/" class="text-white transition hover:(text-blue-400 underline) focus:(text-blue-400 underline)">reviews</nuxt-link>, <nuxt-link to="/interviews/" class="text-white transition hover:(text-blue-400 underline) focus:(text-blue-400 underline)">interviews</nuxt-link>, and <nuxt-link to="/store/" class="text-white transition hover:(text-blue-400 underline) focus:(text-blue-400 underline)">store</nuxt-link>
        <small class="pt-3 block text-xl opacity-70">in Wisconsin, USA</small>
      </h1>
    </div>
    <div class="mx-auto pt-12 max-w-screen-lg">
      <heading>Recent Interviews</heading>
      <article-list path="interviews" :article="articlesInterviews"></article-list>
      <hr class="my-12 invisible" />
      <heading as="h3">Recent Reviews</heading>
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
