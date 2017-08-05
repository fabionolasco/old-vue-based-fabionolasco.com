<template>
  <div>

    <fn-jumbotron>
      <h3 class="fn-text-shadow">
        Projects
      </h3>
    </fn-jumbotron>

    <div class="fn-content">
      <div v-if="loading">
        <fn-spinner></fn-spinner>
      </div>
      <section class="grid-x fn-post-summary-section" v-for="post in posts" v-bind:key="post.slug">
        <div class="cell small-12 fn-jumbotron">
          <router-link :to="'/blog/' + post.slug">
             <fn-image :src="'post@0x.png'" alt="Post Alt" class="fn-post-summary-img"></fn-image> 
          </router-link>
          <div class="fn-post-summary">
            <router-link :to="'/blog/' + post.slug"><h5>{{post.title}}</h5></router-link>
            <span class="fn-post-summary-date">{{post.date}}</span>
            <p>
              {{post.description}}
              <br>
              <router-link :to="'/blog/' + post.slug">Visit Website</router-link>
            </p>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import DB from '../plugins/db'

export default {
  data () {
    return {
      posts: [],
      loading: true
    }
  },
  mounted () {
    DB.getLastPosts('projects', 99, 'orderByChild', 'importance')
      .then((results) => {
        const keys = Object.keys(results)
        const postsResult = []
        keys.forEach((key) => {
          postsResult.push(results[key])
        })
        this.loading = false
        this.posts = postsResult.slice(0)
      })
  }
}
</script>

<style scoped>
.fn-post-summary-section:not(:last-child) {
  margin-bottom: 30px;
}

.fn-post-summary-section h5 {
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
}

.fn-post-summary-section p {
  margin-bottom: 0;
}

.fn-post-summary-date {
  color: #aaa;
  display: block;
  margin-bottom: 10px;
}

.fn-post-summary {
  width: 100%;
  float: right;
}

.fn-content {
  padding: 30px 8%;
}

@media screen and (min-width: 650px) {
  .fn-content {
    padding: 50px 15%;
  }
  .fn-post-summary-section:not(:last-child) {
    margin-bottom: 60px;
  }
  .fn-post-summary {
    width: 67%;
  }
}
</style>
