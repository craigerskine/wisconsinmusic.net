<template>
  <section>
    <div class="py-6 md:(py-12)"><heading>Concert Reviews</heading></div>
    <article-list path="reviews" :article="revPagedArticles"></article-list>
    <pagination v-if="revArticles.length > 12" paginateCss="pt-24" paginatePath="/reviews/" :paginateTotal="revArticles.length" />
  </section>
</template>

<script>
  export default {
    data:() => ({
      revPagedArticles: '',
    }),

    async asyncData({ $content, params, error }) {
      const revArticles = await $content("reviews").only(['title']).fetch();
      const revPageCurrent = parseInt(params.page);
      const revPagePer = 12;
      const revPageLast = Math.ceil(revArticles.length / revPagePer);
      const revPageLastCount = revArticles.length % revPagePer === 0 ? revPagePer : revArticles.length % revPagePer;
      const revSkip = () => {
        if (revPageCurrent === 1) {return 0;}
        if (revPageCurrent === revPageLast) {return revArticles.length - revPageLastCount;}
        return (revPageCurrent - 1) * revPagePer;
      };
      const revPagedArticles = await $content("reviews")
        .sortBy('date', 'desc')
        .limit(revPagePer)
        .skip(revSkip())
        .fetch();
      return {
        revArticles,
        revPagedArticles
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