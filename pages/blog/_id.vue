<template>
  <div>
  
    <fn-jumbotron>
      <h3 class="fn-text-shadow">
        The Most Special Blog Post
      </h3>
    </fn-jumbotron>
  
    <div class="grid-x">
      <div class="cell small-12 fn-post-details">
        <div class="fn-center">
          <div class="grid-x">
            <div class="cell small-8 fn-share">
              <span>Share on</span>
              <a href="https://twitter.com/share?text=I really liked this post: &url=http://www.fabionolasco.com" title="Share this post on Twitter" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/sharer.php?u=http://www.fabionolasco.com" title="Share this post on Facebook" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//www.fabionolasco.com&title=My%20Post&summary=super%20cool&source=" title="Share this post on LinkedIn" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </div>
            <div class="cell small-4 text-right">
              <div class="fn-ratings">
                <a title="5 Stars" v-on:click.prevent="vote(5)"></a>
                <a title="4 Stars" v-on:click.prevent="vote(4)"></a>
                <a title="3 Stars" v-on:click.prevent="vote(3)"></a>
                <a title="2 Stars" v-on:click.prevent="vote(2)"></a>
                <a title="1 Star" v-on:click.prevent="vote(1)"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <section class="grid-x">
      <div class="cell small-12 fn-content">
        <div class="cell small-12 fn-published">
          Published in August 14th, 2017
        </div>
         <fn-image :src="'post@0x.png'" alt="Post Alt" class="fn-post-img"></fn-image> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id diam arcu. Nulla eleifend rutrum semper. Vestibulum blandit, lectus sed vulputate aliquam, leo mauris dignissim purus, volutpat sollicitudin ex ipsum eu nulla. Etiam eu justo augue. Vivamus quam odio, auctor vitae tincidunt id, iaculis maximus quam. Vivamus vitae mauris ut urna fermentum convallis. Suspendisse ut tellus ex. Ut quis purus justo. Pellentesque pharetra non eros sit amet dictum. Aliquam egestas dapibus velit, quis interdum enim faucibus sit amet.</p>
        <p>Maecenas ipsum neque, maximus tincidunt condimentum a, viverra at tortor. Sed tincidunt tempus augue, a rhoncus arcu laoreet et. Duis convallis velit in scelerisque condimentum. Vestibulum consequat nibh non vestibulum ullamcorper. Proin vel lorem eleifend ipsum iaculis condimentum non et neque. Curabitur mauris risus, bibendum sed nisi sed, elementum viverra diam. Nunc et rutrum metus. Nam tincidunt tortor eget tortor varius, scelerisque dictum mi lacinia. Nulla quis finibus turpis. Donec nec sapien consectetur, tincidunt leo ut, condimentum eros. Ut rhoncus lacus et ante eleifend, eu faucibus libero volutpat. Sed mollis sodales tempor.</p>
        <p>Mauris ut elementum eros. Aliquam erat volutpat. Suspendisse a elementum arcu, nec tempus metus. Ut egestas cursus dapibus. Aliquam vehicula mauris metus, et elementum ligula egestas eu. Quisque ullamcorper euismod eros eget egestas. Aenean placerat, nisi scelerisque maximus porta, metus est aliquam urna, sed sagittis leo nulla a elit. Donec interdum urna dui, id elementum turpis porta a. Integer tristique purus sed rhoncus volutpat. Quisque molestie velit eget nunc rhoncus mattis. Quisque eu urna at tortor aliquam cursus. Morbi ullamcorper fringilla nibh, vel gravida tortor efficitur eget. Quisque in nunc erat.</p>
      </div>
    </section>
  
  </div>
</template>

<script>
export default {
  created: () => {
    document.title += ' - My Post Title'
  },
  methods: {
    vote (x) {
      window.log('Voted', x)
    }
  }
}
</script>

<style scoped>
.fn-content {
  padding: 30px 8%;
}

.fn-content p:first-of-type::first-letter {
  font-size: 4rem;
  display: inline-block;
  font-family: serif;
  height: 1rem;
  line-height: 3rem;
  padding-top: 10px;
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
