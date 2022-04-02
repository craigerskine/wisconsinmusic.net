<template>
  <div class="page min-h-screen flex flex-col">
    <header :class="['py-8 w-full relative', this.$route.name === 'index' ? 'bg(gray-900 opacity-25)' : '']">
      <b class="bg-gradient-to-br from-transparent to-gray-800 opacity-50 absolute inset-0" aria-hidden="true" v-if="this.$route.name === 'index'"></b>
      <nav class="container mx-auto px-4 w-full flex-none relative">
        <ul class="md:(flex)">
          <li class="flex justify-center md:(pr-10)">
            <nuxt-link to="/" class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" role="img" fill="none" class="w-12 h-auto text-white opacity-50 stroke-current">
                <path d="M93.2283 202.319L93.2343 202.313L120 175.366L146.766 202.313L146.772 202.319C153.073 208.621 163.29 208.621 169.592 202.319C175.894 196.018 175.894 185.801 169.592 179.499L131.41 141.317C125.108 135.016 114.892 135.016 108.59 141.317L108.584 141.323L108.578 141.329L97.9546 152.091V109.091C97.9546 100.179 90.73 92.9546 81.8182 92.9546C72.9063 92.9546 65.6818 100.179 65.6818 109.091V190.909C65.6818 205.285 83.063 212.485 93.2283 202.319ZM191.422 158.699L202.045 147.937V190.936C202.045 199.848 209.27 207.073 218.182 207.073C227.094 207.073 234.318 199.848 234.318 190.936V109.118C234.318 94.7423 216.937 87.5428 206.772 97.7081L208.539 99.4759L206.766 97.7141L180 124.662L153.234 97.7141L153.228 97.7081C146.927 91.4065 136.71 91.4065 130.408 97.7081C124.106 104.01 124.106 114.227 130.408 120.528L168.59 158.71C174.892 165.012 185.108 165.012 191.41 158.71L191.416 158.704L191.422 158.699ZM150 2.5C231.462 2.5 297.5 68.538 297.5 150C297.5 231.462 231.462 297.5 150 297.5C68.538 297.5 2.5 231.462 2.5 150C2.5 68.538 68.538 2.5 150 2.5Z" stroke-width="5"></path>
              </svg>
              <span class="text-white font-thin uppercase"><b class="font-black">Wisconsin</b> Music</span>
            </nuxt-link>
          </li>
          <li class="pt-5 md:(ml-auto pt-0)">
            <ul class="flex items-center justify-center space-x-10">
              <li v-for="(nav, index) in [
                { title: 'Reviews', sub: 'Concert / Venue', link: '/reviews/'},
                { title: 'Interviews', sub: 'Artist / Band', link: '/interviews/'},
                { title: 'Store', sub: 'Shop', link: '/store/'},
              ]" :key="index">
                <nuxt-link :to="nav.link" class="nav pb-1 flex(& col) items-end transition hover:(text-white) focus:(text-white)" active-class="active text-white" exact-active-class="">
                  <i v-text="nav.sub" class="text-xs not-italic opacity-50"></i>
                  <b v-text="nav.title" class="uppercase md:(text-xl)"></b>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="py-12 flex(& col) md:(py-24) relative" v-if="this.$route.name === 'index'">
        <h1 class="m-auto p-4 max-w-4xl text([calc(1.5vw+1.5vh)] gray-400 center) leading-normal font-bold">
          <b class="text([calc(2vw+2vh)] gray-200) block uppercase">Concert &amp; Artist</b>
          <nuxt-link to="/reviews/" class="text-white transition hover:(text-blue-400 underline) focus:(text-blue-400 underline)">reviews</nuxt-link>, <nuxt-link to="/interviews/" class="text-white transition hover:(text-blue-400 underline) focus:(text-blue-400 underline)">interviews</nuxt-link>, and <nuxt-link to="/store/" class="text-white transition hover:(text-blue-400 underline) focus:(text-blue-400 underline)">store</nuxt-link>
          <small class="pt-3 block text-xl opacity-70">in Wisconsin, USA</small>
        </h1>
      </div>
    </header>
    <main class="w-full">
      <nuxt />
    </main>
    <footer class="mt-auto pt-24 pb-8 px-4 w-full text-xs text-center font-bold uppercase">
      <div class="container mx-auto">
        Made with
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" role="img" class="-mt-1 mx-1 fill-current text-red-400 inline-block">
          <title>Love</title>
          <polygon points="8 3 11 0 12 0 16 4 16 5 9 12 7 12 0 5 0 4 4 0 5 0" transform="translate(0,2)"></polygon>
        </svg>
        by <a href="https://craigerskine.com/" class="mx-1 text-current transition">Craig Erskine</a>
      </div>
    </footer>
    <figure :style="'background-image: url(\''+ this.$store.state.mast +'\');'" class="bg(cover fixed center) opacity-25 fixed inset-0 z-[-1]"></figure>
    <figure class="bg-gradient-to-b from-transparent via-transparent to-black fixed inset-0 z-[-1]" aria-hidden="true"><div class="dark:bg-grid dark:bg-fixed dark:absolute dark:inset-0"></div></figure>
  </div>
</template>

<script>
  import { tw, setup, theme, silent } from 'twind/shim'
  import { css, apply } from 'twind/css'
  import * as colors from 'twind/colors'

  export default {
    head() {
      return {
      };
    },
  }

  async function twindinit() {
    setup({
      mode: silent,
      theme: {
        extend: {
          colors: {
            //gray: colors.blueGray,
          },
          fontFamily: (theme) => ({ sans: 'Raleway,'+ theme('fontFamily.sans') }),
        },
      },
      plugins: {
        'bg-grid': { 'background-image': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\' width=\'4\' height=\'4\'><rect x=\'0\' y=\'0\' width=\'2\' height=\'2\' fill=\'rgba(5,5,5,.33)\'></rect></svg>")', },
        'bg-close': { 'background-image': 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 10 10\' width=\'10\' height=\'10\'><g fill=\'rgba(255,255,255,.66)\' fill-rule=\'evenodd\'><polygon points=\'8 0 10 2 7 5 10 8 8 10 5 7 2 10 0 8 3 5 0 2 2 0 5 3\'></polygon></g></svg>")', },
      },
    })
    tw(() => ({
      '@global': {
        '.nav.active': { 'box-shadow': 'inset 0 -2px white' },
        '.prose p,.prose ul,.prose ol': { '@apply': 'mb-5' },
        '.prose ul': { '@apply': 'list(disc inside)' },
        '.prose ol': { '@apply': 'list(decimal inside)' },
        '.prose blockquote': { '@apply': 'mb-5 p-4 border(l-4 gray-500 opacity-50) bg(black opacity-5)' },
        '.prose blockquote > p:last-child': { '@apply': 'mb-0' },
        '.prose img': { '@apply': 'mx-auto block' },
        //'.page-enter-active,.page-leave-active': { '@apply': 'transition', },
        //'.page-enter,.page-leave-to': { '@apply': 'scale-[.98] opacity-0', },
      }
    }))
  }

  twindinit()
</script>