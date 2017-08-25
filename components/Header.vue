<template>
  <div>
    <header class="grid-x">
      <div class="cell small-12 fn-header">

        <nuxt-link to="/">
          <h1>Fabio Nolasco</h1>
          <h2>Front-end Architect</h2>
          <fn-image class="fn-photo" :src="'fabionolasco@0x.jpg'" alt="Fabio Nolasco - Photo" width="133" height="133"></fn-image>
        </nuxt-link>

        <span class="fn-icons">
          <a href="https://github.com/fabionolasco" target="_blank" title="Visit my Github page"><span class="show-for-sr">Github</span><i class="fa fa-github" aria-hidden="true" :class="{'hide': SearchService.isSearchOpen}"></i></a>
          <a href="http://feeds.feedburner.com/FabioNolasco-Front-endDevelopment" title="RSS Feed" target="_blank"><span class="show-for-sr">RSS</span><i class="fa fa-rss-square" aria-hidden="true" :class="{'hide': SearchService.isSearchOpen}"></i></a>
          <a href="https://www.linkedin.com/in/gomidefabio/" target="_blank" title="Check out my Linkedin page"><span class="show-for-sr">LinkedIn</span><i class="fa fa-linkedin-square" aria-hidden="true" :class="{'hide': SearchService.isSearchOpen}"></i></a>
          <fn-search />
        </span>

      </div>
    </header>
  </div>
</template>

<script>
import DB from '../plugins/db'
import Search from './Search'
import SearchService from '../plugins/search'

export default {
  name: 'fn-header',
  data () {
    return {
      SearchService: SearchService
    }
  },
  components: {
    'fn-search': Search
  }
}
</script>

<style>
.fn-header {
  background-color: #104e68;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9000;
}

.fn-header h1,
.fn-header h2 {
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 40px;
  cursor: pointer;
  text-indent: 160px;
}

.fn-header h1 {
  color: #fff;
  font-weight: bold;
  margin: 7px 0;
}

.fn-header h2 {
  color: #1ea8ae;
  margin: -20px 0 10px 0px;
}

.fn-header .fn-icons {
  position: absolute;
  top: 90px;
  width: 100%;
  padding-left: 150px;
}

.fn-header .fn-icons-big {
  position: relative;
  top: initial;
  width: initial;
  left: initial;
  margin-right: 20px;
}

.fn-header .fn-icons input {
  display: inline-block;
  width: 0;
  border: 0 solid #1ea8ae;
  padding: 0;
  height: 30px;
  vertical-align: middle;
  vertical-align: -webkit-baseline-middle;
}

.fn-header .fn-icons input.fn-open {
  width: 170px;
  border-width: 1px;
  padding: 4px 7px;
}

.fn-header .fn-icons i {
  color: #6f99ab;
  line-height: 40px;
  font-size: 22px;
  padding: 0 11px;
  cursor: pointer;
}

.fn-header .fn-icons i:hover {
  color: #fff;
}

.fn-photo img {
  width: 133px;
  height: 133px;
  background-color: #fff;
  border: 4px solid #fff;
  position: absolute;
  z-index: 9090;
  left: 15px;
  top: 0;
  border-radius: 50%;
  color: rgba(0,0,0,0);
}

@media screen and (min-width: 650px) {
  .fn-header {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 55px;
  }
  .fn-header h1,
  .fn-header h2 {
    vertical-align: middle;
    display: inline-block;
  }
  .fn-header h2 {
    text-indent: 10px;
    margin: 7px 0;
  }
  .fn-photo img {
    position: fixed;
  }
  .fn-header .fn-icons {
    position: absolute;
    top: 7px;
    width: initial;
    left: initial;
    right: 20px;
    padding-left: 0;
  }
}
</style>
