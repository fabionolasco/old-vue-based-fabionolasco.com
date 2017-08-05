<template>
  <div>
  
    <fn-jumbotron>
      <h3 class="fn-text-shadow">
        {{post.title}}
      </h3>
    </fn-jumbotron>
  
    <div class="grid-x">
      <div class="cell small-12 fn-post-details">
        <div class="fn-center">
          <div class="grid-x">
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
    </div>
  
    <section class="grid-x">
      <div class="cell small-12 fn-content">
        <div v-if="loading">
          <fn-spinner></fn-spinner>
        </div>
        <div v-if="!loading">
          <div class="cell small-12 fn-published">
            Published in {{ post.longPubDate }}
          </div>
          <fn-image :src="`${post.imageName}`" :alt="`${post.title}`" class="fn-post-img"></fn-image>
          <span v-html="post.description"></span>
        </div>
      </div>
    </section>
  
  </div>
</template>

<script>
import DB from '../../plugins/db'

export default {
  data() {
    return {
      post: {},
      loading: true
    }
  },
  mounted() {
    // Get from DB if necessary
    DB.getPost('projects', this.$route.params.id)
      .then((results) => {
        results.longPubDate = DB.getLongDate(results)
        results.smallDescription = results.description.substring(0, 70) + '...'
        this.post = Object.assign({}, results)
        document.title += ' - ' + this.post.title
        this.loading = false
      })
  }
}
</script>

<style scoped>
.fn-content {
  padding: 30px 8%;
}

.fn-published {
  color: #aaa;
  margin: -20px 0 20px;
}

.fn-center {
  padding: 0 8%;
}

.fn-post-details {
  height: 40px;
  line-height: 40px;
  background-color: #ddd;
  color: #666;
}

.fn-ratings {
  unicode-bidi: bidi-override;
  direction: rtl;
  width: auto;
  float: right;
}

.fn-ratings a {
  display: table-cell;
  font-size: 0;
  width: 24px;
  position: relative;
  line-height: inherit;
}

.fn-ratings>a:before {
  position: absolute;
  top: 0;
  left: 0;
  font: 20px/1 FontAwesome;
  display: block;
  content: "\f005";
  cursor: pointer;
  color: #ccc;
  background: #bbb;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px 0;
  width: 24px;
}

.fn-ratings>a:hover:before,
.fn-ratings>a:hover~a:before,
.fn-ratings>a.selected:before,
.fn-ratings>a.selected~a:before {
  color: #f0ad4e;
  background: #f3b800;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fn-share a,
.fn-share span {
  display: inline-block;
  font-size: 1rem;
  padding: 0 4px 0 0;
  vertical-align: middle;
  height: 44px;
}

.fn-share a {
  color: #bbb;
}

.fn-share a:hover {
  color: #1b96a0;
}

.fn-share i {
  display: inline-block;
  font-size: 23px;
  padding: 9px 4px;
}

@media screen and (min-width: 650px) {
  .fn-content {
    padding: 50px 15%;
  }
  .fn-center {
    padding: 0 15%;
  }
}
</style>
