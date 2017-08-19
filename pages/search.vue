<template>
  <div class="fn-about">

    <fn-jumbotron>
      <h3 class="fn-text-shadow">Search</h3>
      <h4 class="fn-text-shadow">{{results.length}} Results for "{{terms}}"</h4>
    </fn-jumbotron>

    <div class="fn-content">
      <div v-for="post in results" v-bind:key="post.id + post.slug" class="fn-post-desc">
          <h5><router-link :to="'/'+post.source+'/'+post.slug">{{post.title}}</router-link></h5>
          <span class="fn-date">Published on {{post.pubDate | formatDate}}</span>
          <p>{{post.desc}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import Search from '../plugins/search'

export default {
  data() {
    return {
      results: Search.results,
      terms: Search.terms
    }
  }
}
</script>

<style scoped>
h4 {
    color: #fff;
    font-size: 1.2rem;
}
.fn-date {
    color: #aaa;
    font-size: .8rem;
}
h5 {
    margin: 0;
}
.fn-post-desc:not(:first-child) h5 {
    margin-top: 40px;
    border-top: 1px solid #ccc;
    padding-top: 30px;
}
p {
    font-size: .9rem;
}
</style>
