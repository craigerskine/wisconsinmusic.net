<template>
  <section>
    <heading>
      {{ article.title }}
      <small class="pt-1 text-sm font-normal block">
        {{ article.date }}
        <i class="mx-2">-</i>
        {{ article.venue }}
      </small>
    </heading>
    <article-page>
      <nuxt-content :document="article" />
    </article-page>
  </section>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content("reviews", params.slug).fetch();
      return {
        article
      };
    },
    created() {
      this.$store.commit('change_mast', this.article.image || '/assets/img/_mast-placeholder.jpg');
    },
    head() {
      return {
        title: `${this.article.title} - Review`,
      };
    },
  };
</script>