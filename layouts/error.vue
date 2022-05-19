<template>
  <div class="py-6 md:(py-12)"><heading as="h1">Page Not Found</heading></div>
</template>

<script>
  export default {
    head() {
      return {
        title: '404',  
      };
    },
    props: ['error'],
    layout: 'error'
  }
</script>