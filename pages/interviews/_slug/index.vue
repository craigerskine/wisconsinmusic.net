<template>
  <section>
    <heading>
      {{ article.title }}
      <small class="pt-1 text-sm font-normal block">{{ article.date }}</small>
    </heading>
    <article-page>
      <nuxt-content :document="article" />
    </article-page>
  </section>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content("interviews", params.slug).fetch();
      return {
        article
      };
    },
    created() {
      this.$store.commit('change_mast', this.article.image || '/assets/img/_mast-placeholder.jpg');
    },
    head() {
      return {
        title: `${this.article.title} - Interview`,
      };
    },
  };
</script>