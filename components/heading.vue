<script>
  export default {
    props: {
      as: {
        type: String,
        default: 'h2',
      },
      simple: {
        type: Boolean,
        default: false,
      },
    },
    render(createElement) {
      return createElement(
        `${this.as}`,
        { class: `container mx-auto pt-10 px-4 text(4xl white) leading-none italic font-black space-x-5 ${this.simple ? '' : 'md:(text-[7.5vw])'}` },
        this.$slots.default,
      )
    },
  }
  </script>