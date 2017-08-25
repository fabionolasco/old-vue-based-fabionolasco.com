<template>
  <div>
  
    <fn-jumbotron>
      <h3 class="fn-text-shadow" v-if="post">
        {{post.title}}
      </h3>
    </fn-jumbotron>
  
    <div class="grid-x">
      <div class="cell small-12 fn-post-details">
        <div class="grid-x" v-if="post">
          <div class="cell small-8 fn-share">
            <span>Share on</span>
            <a :href="`https://twitter.com/share?text=${post.title}&url=https://fabionolasco.com/blog/${post.slug}`" title="Share this post on Twitter" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            <a :href="`https://www.facebook.com/sharer.php?u=https://fabionolasco.com/blog/${post.slug}`" title="Share this post on Facebook" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://fabionolasco.com/blog/${post.slug}&title=${post.title}&summary=${post.smallDescription}&source=`" title="Share this post on LinkedIn" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>
          <div class="cell small-4 text-right">
            <!-- <div class="fn-ratings">
                <a title="5 Stars" v-on:click.prevent="vote(5)"></a>
                <a title="4 Stars" v-on:click.prevent="vote(4)"></a>
                <a title="3 Stars" v-on:click.prevent="vote(3)"></a>
                <a title="2 Stars" v-on:click.prevent="vote(2)"></a>
                <a title="1 Star" v-on:click.prevent="vote(1)"></a>
              </div> -->
          </div>
        </div>
      </div>
    </div>
  
    <section class="grid-x fn-post">
      <div class="cell small-12 fn-content">
        <div v-if="!post" class="fb-large-bottom">
          <fn-spinner></fn-spinner>
        </div>
        <div v-if="post">
          <div class="cell small-12 fn-published">
            Published in {{ post.longPubDate }}
          </div>
          <div class="fn-tags">
            Keywords: 
            <ul>
              <li v-for="item in post.tags" v-bind:key="item">{{item}}</li>
            </ul>
          </div>
          <span v-html="post.content"></span>
        </div>
      </div>
    </section>
  
  </div>
</template>

<script>
import DB from '../../plugins/db'
import UTILS from '../../plugins/utils.js'

export default {
  head() {
    return {
      title: 'Fabio Nolasco - Project: ' + this.post.title
    }
  },
  data() {
    return {
      post: false
    }
  },
  created() {
    // Get from DB if necessary
    DB.getPost('projects', this.$route.params.id)
      .then((results) => {
        results.longPubDate = UTILS.getLongDate(results)
        results.smallDescription = results.description.substring(0, 70) + '...'
        results.tags = results.keywords.split(',')
        this.post = Object.assign({}, results)
      })
  }
}
</script>

<style scoped>
.fn-tags {
  margin-bottom: 30px;
  color: #aaa;
}
.fn-tags ul {
  margin: 0;
  display: inline-block;
}
.fn-tags li {
  list-style: none;
  display: inline-block;
  padding: 1px 7px;
  margin-right: 5px;
  background-color: #ccc;
  color: #999;
  border-radius: 7px;
  font-size: .9rem;
}
</style>
