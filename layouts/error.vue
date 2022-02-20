<template>
  <p>404</p>
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