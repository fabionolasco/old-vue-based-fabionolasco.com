<template>
  <div>
    <header class="grid-x">
      <div class="cell small-12 fn-header">

        <nuxt-link to="/">
          <h1>Fabio Nolasco</h1>
          <h2>Front End Architect</h2>
          <fn-image class="fn-photo" :src="'fabionolasco@0x.jpg'" alt="Fabio Nolasco - Photo"></fn-image>
        </nuxt-link>

        <span class="fn-icons">
          <a href="https://github.com/fabionolasco" target="_blank"><i class="fa fa-github" aria-hidden="true" :class="{'hide': isSearchOpen}"></i></a>
          <i class="fa fa-rss-square" aria-hidden="true" :class="{'hide': isSearchOpen}"></i>
          <a href="https://www.linkedin.com/in/gomidefabio/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true" :class="{'hide': isSearchOpen}"></i></a>
          <input id="fn-search" type="text" v-on:blur="hideSearch" :class="{'fn-open': isSearchOpen}" class="fn-animation">
          <i class="fa fa-search" v-on:mouseover="overSearch = true" v-on:mouseleave="overSearch = false" aria-hidden="true" v-on:click="openSearch"></i>
        </span>

      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'fn-header',
  data () {
    return {
      isSearchOpen: false,
      overSearch: false
    }
  },
  methods: {
    openSearch () {
      this.isSearchOpen = !this.isSearchOpen
      setTimeout(() => {
        if (this.isSearchOpen) {
          document.getElementById('fn-search').focus()
        }
      }, 500)
    },
    hideSearch () {
      if (!this.overSearch) {
        this.isSearchOpen = false
      }
    }
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
  left: 138px;
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
  border: 4px solid #fff;
  position: absolute;
  z-index: 9090;
  left: 15px;
  top: 0;
  border-radius: 50%;
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
  }
}
</style>
