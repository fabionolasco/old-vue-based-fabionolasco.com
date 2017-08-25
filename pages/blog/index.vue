<template>
  <div>

    <fn-jumbotron>
      <h3 class="fn-text-shadow">Blog</h3>
    </fn-jumbotron>

    <div class="fn-content">
      <div v-if="loading" class="fb-large-bottom">
        <fn-spinner></fn-spinner>
      </div>
      <section class="grid-x fn-post-summary-section" v-for="post in posts" v-bind:key="post.slug">
        <div class="cell small-12 fn-jumbotron">
          <router-link :to="'/blog/' + post.slug">
             <fn-image v-bind:src="post.imageName" :alt="post.title" class="fn-post-summary-img"></fn-image> 
          </router-link>
          <div class="fn-post-summary">
            <router-link :to="'/blog/' + post.slug"><h5>{{post.title}}</h5></router-link>
            <span class="fn-post-summary-date">{{post.date}}</span>
            <p>
              {{post.description}}
              <br>
              <router-link :to="'/blog/' + post.slug">Read More...</router-link>
            </p>
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
      title: 'Fabio Nolasco - Blog'
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
      fromLocal = localStorage.getItem('blog/posts')
      if (fromLocal) {
        const results = JSON.parse(fromLocal)
        results.reverse()
        this.posts = results.slice(0)
        this.loading = false
      }
    }
    // Get from DB if necessary
    DB.getLastPosts('blog', 9999)
      .then((results) => {
        const keys = Object.keys(results)
        const postsResult = []
        keys.forEach((key) => {
          console.log(key, results[key])
          postsResult.push(results[key])
        })
        postsResult.reverse()
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
