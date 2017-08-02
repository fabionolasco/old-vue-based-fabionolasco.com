<template>
  <div>
    <fn-header></fn-header>
    <fn-navbar></fn-navbar>

    <nuxt />
    
    <fn-footer></fn-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from '@/components/Image'
import Jumbotron from '@/components/Jumbotron'

Vue.component('fn-image', Image)

Vue.component('fn-jumbotron', Jumbotron)

export default {
  components: {
    'fn-header': Header,
    'fn-navbar': Navbar,
    'fn-footer': Footer
  }
}
</script>
