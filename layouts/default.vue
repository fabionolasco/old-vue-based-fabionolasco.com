<template>
  <div>
    <a href="#mainContent" class="show-for-sr">Skip to main content</a>

    <fn-header></fn-header>
    <fn-navbar></fn-navbar>

    <main id="mainContent" role="main" tabindex="-1">
      <nuxt></nuxt>
    </main>
    
    <fn-footer></fn-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { MenuStatus } from '../plugins/menu.service.js'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from '@/components/Image'
import Jumbotron from '@/components/Jumbotron'
import Spinner from '@/components/Spinner'

// Global / recursive components
Vue.component('fn-image', Image)
Vue.component('fn-spinner', Spinner)
Vue.component('fn-jumbotron', Jumbotron)

export default {
  components: {
    'fn-header': Header,
    'fn-navbar': Navbar,
    'fn-footer': Footer
  },
  watch: {
    '$route': function() {
      console.log(MenuStatus, this)
      MenuStatus.isOpened = false
    }
  }
}
</script>
