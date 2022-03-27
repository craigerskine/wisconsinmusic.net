<script>
  export default {
    props: {
      as: {
        type: String,
        default: 'h2',
      },
    },
    render(createElement) {
      return createElement(
        `${this.as}`,
        { class: `mb-8 text(xl white center) leading-none font-black space-x-5 lg:(text-[2vw])` },
        this.$slots.default
      )
    },
  }
  </script>