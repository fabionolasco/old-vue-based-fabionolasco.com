<template>
  <div class="fn-navbar">

    <i class="fa fa-bars fn-shadow" v-on:click="showMenu" aria-hidden="true"></i>
    
    <nav class="grid-x fn-main-nav fn-shadow">
      <div class="cell small-12">
        <ul id="fn-menu" class="grid-x fn-menu fn-animation">
          <li class="cell auto">
            <nuxt-link to="/" router-link-exact-active>
              <i class="fa fa-comments" aria-hidden="true"></i>
              <span>BLOG</span>
            </nuxt-link>
          </li>
          <li class="cell auto">
            <nuxt-link to="/projects" router-link-exact-active>
              <i class="fa fa-folder-open" aria-hidden="true"></i>
              <span>PROJECTS</span>
            </nuxt-link>
          </li>
          <li class="cell auto">
            <nuxt-link to="/about" router-link-exact-active>
              <i class="fa fa-id-card-o" aria-hidden="true"></i>
              <span>ABOUT</span>
            </nuxt-link>
          </li>
          <li class="cell auto">
            <nuxt-link to="/contact" router-link-exact-active>
              <i class="fa fa-envelope-open" aria-hidden="true"></i>
              <span>CONTACT</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    showMenu () {
      const fnMenu = document.getElementById('fn-menu')
      fnMenu.style.left = fnMenu.style.left === '0%' ? '-80%' : '0%'
    }
  }
}
</script>

<style scoped>
.fn-main-nav {
  padding-left: 100px;
  background-color: #dedede;
  top: 40px;
  left: 0;
  width: 100%;
  min-height: 50px;
}

.fn-main-nav ul {
  margin: 0;
  padding: 0;
}

.fn-main-nav ul li {
  list-style: none;
  text-align: center;
}

.fn-main-nav ul li a {
  display: block;
  width: 100%;
  line-height: 40px;
  background-color: #dedede;
  color: #666;
  font-size: .84rem;
}

.fn-main-nav a i {
  display: block;
  font-size: 2rem;
  padding-top: 10px;
  height: 42px;
  color: #fff;
}

 .fn-main-nav a.router-link-active i {
  color: #1b96a0;
} 

.fn-main-nav ul li a.router-link-active,
.fn-main-nav ul li a:hover i,
.fn-main-nav ul li a:hover {
  background-color: #fff;
  color: #1b96a0;
}

.fn-menu {
  display: block;
  position: fixed;
  top: 0;
  left: -80%;
  z-index: 99999;
  width: 80%;
  height: 100%;
  background-color: #eee;
}

.fn-navbar i.fa-bars {
  padding: 0 11px;
  position: fixed;
  top: -6px;
  right: -7px;
  margin-left: -176px;
  text-align: center;
  line-height: 45px;
  width: 45px;
  height: 45px;
  font-size: 24px;
  border-radius: 50%;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  z-index: 99999;
}

@media screen and (min-width: 650px) {
  .fn-menu {
    display: flex;
    position: initial;
    top: initial;
    left: initial;
    z-index: initial;
    width: initial;
    height: initial;
    background-color: initial;
  }
  .fn-main-nav {
    position: fixed;
    top: 55px;
    left: 0;
  }
  .fn-navbar i.fa-bars {
    display: none;
  }
}
</style>
