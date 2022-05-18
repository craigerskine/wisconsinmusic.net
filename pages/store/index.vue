<template>
  <section>
    <div class="py-6 md:(py-12)"><heading>Shop Wisconsin Music</heading></div>
    <ul class="mx-auto max-w-sm grid(& flow-row cols-1) gap-10 sm:(max-w-screen-lg grid-cols-2) lg:(grid-cols-3)">
      <li></li>
      <li v-for="(item, index) in articlesStore">
        <a :href="item.link" class="group block rounded motion-safe:transition">
          <figure>
            <img :src="item.image || '/assets/img/_mast-placeholder.jpg'" :alt="item.title +' mast'" class="w-full h-auto object-cover rounded motion-safe:transition group-hover:(ring(4 blue-400))" />
            <figcaption class="pt-2 flex items-center">
              <b class="min-w-0 text(white) truncate motion-safe:transition group-hover:(text-blue-400)" :title="item.title">{{ item.title }}</b>
              <small class="ml-auto pl-5 flex-none">{{ item.sub }}</small>
            </figcaption>
          </figure>
        </a>
      </li>
      <li></li>
    </ul>
  </section>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const articlesStore = await $content("store").sortBy('title').fetch();
      return {
        articlesStore
      };
    },
    created() {
      this.$store.commit('change_mast', '/assets/img/_mast-placeholder.jpg');
    },
    head() {
      return {
        title: 'Store',
      };
    },
  };
</script>