<template>
  <section>
    <div class="py-6 md:(py-12)"><heading>Artist Interviews</heading></div>
    <article-list path="interviews" :article="intPagedArticles"></article-list>
    <pagination v-if="intArticles.length > 12" paginateCss="pt-24" paginatePath="/interviews/" :paginateTotal="intArticles.length" />
  </section>
</template>

<script>
  export default {
    data:() => ({
      intPagedArticles: '',
    }),

    async asyncData({ $content, params, error }) {
      const intArticles = await $content("interviews").only(['title']).fetch();
      const intPageCurrent = parseInt(params.page);
      const intPagePer = 12;
      const intPageLast = Math.ceil(intArticles.length / intPagePer);
      const intPageLastCount = intArticles.length % intPagePer === 0 ? intPagePer : intArticles.length % intPagePer;
      const intSkip = () => {
        if (intPageCurrent === 1) {return 0;}
        if (intPageCurrent === intPageLast) {return intArticles.length - intPageLastCount;}
        return (intPageCurrent - 1) * intPagePer;
      };
      const intPagedArticles = await $content("interviews")
        .sortBy('date', 'desc')
        .limit(intPagePer)
        .skip(intSkip())
        .fetch();
      return {
        intArticles,
        intPagedArticles
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