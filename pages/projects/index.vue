<template>
  <div>

    <fn-jumbotron>
      <h3 class="fn-text-shadow">
        Projects
      </h3>
    </fn-jumbotron>

    <div class="fn-content">
      <div v-if="loading" class="fb-large-bottom">
        <fn-spinner></fn-spinner>
      </div>
      <p class="fn-note">
        <strong>Important note:</strong>
        Between my job, family and home care I have very little time for personal projects. Most
        came about with the main purpose of practicing whatever I happened to 
        be studying at the time.
        Therefore, even though these projects are not a precise showcase of what I can do, 
        I am listing them to share some ideas and keep myself motivated.
      </p>
      <section class="grid-x fn-post-summary-section" v-for="post in posts" v-bind:key="post.slug">
        <div class="cell small-12 fn-jumbotron">
          <router-link :to="'/projects/' + post.slug">
             <fn-image :src="post.imageName" v-bind:alt="post.title" class="fn-post-summary-img"></fn-image> 
          </router-link>
          <div class="fn-post-summary">
            <router-link :to="'/projects/' + post.slug"><h5>{{post.title}}</h5></router-link>
            <span class="fn-post-summary-date">{{post.date}}</span>
            <p v-html="post.description"></p>
            <router-link :to="'/projects/' + post.slug">More details...</router-link>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import DB from '../../plugins/db'

export default {
  head() {
    return {
      title: 'Fabio Nolasco - Projects'
    }
  },
  data () {
    return {
      posts: [],
      loading: true
    }
  },
  mounted () {
    // Get from localStorage if present
    let fromLocal
    if (localStorage) {
      fromLocal = localStorage.getItem('projects/posts')
      if (fromLocal) {
        const results = JSON.parse(fromLocal)
        this.posts = results.slice(0)
        this.loading = false
      }
    }
    // Get from DB if necessary
    DB.getLastPosts('projects', 99, 'orderByChild', 'importance')
      .then((results) => {
        const keys = Object.keys(results)
        const postsResult = []
        keys.forEach((key) => {
          postsResult.push(results[key])
        })
        this.loading = false
        // Only update array if it is different from localStorage
        if (JSON.stringify(fromLocal) !== JSON.stringify(postsResult)) {
          this.posts = postsResult.slice(0)
        }
      })
  }
}
</script>

<style scoped>
.fn-note {
  margin: 0 0 60px 0;
}

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

@media screen and (min-width: 650px) {
  .fn-post-summary-section:not(:last-child) {
    margin-bottom: 60px;
  }
  .fn-post-summary {
    width: 67%;
  }
}
</style>
