<template>
  <ul class="mx-auto px-4 max-w-sm grid(& flow-row cols-1) gap-10 sm:(max-w-screen-lg grid-cols-2) lg:(grid-cols-3)">
    <li v-for="(item, index) in article">
      <nuxt-link :to="'/'+ path +'/'+ item.slug + '/'" class="group block rounded transition">
        <figure class="transform transition group-hover:(-translate-y-2) group-focus:(-translate-y-2)">
          <img :src="item.image || '/assets/img/_mast-placeholder.jpg'" :alt="item.title +' mast'" class="w-full h-32 object-cover rounded transition group-hover:(ring(4 blue-400)) group-focus:(ring(4 blue-400))" />
          <figcaption class="pt-2 flex items-center">
            <b class="min-w-0 text(white) truncate transition group-hover:(text-blue-400) group-focus:(text-blue-400)" :title="item.title">{{ item.title }}</b>
            <small class="ml-auto pl-5 flex-none">{{ item.date }}</small>
          </figcaption>
        </figure>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      'article': Array,
      'path': {
        type: String,
        required: true,
      },
    }
  }
</script>