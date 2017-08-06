<template>
  <div class="fn-contact">
  
    <fn-jumbotron>
      <h3 class="fn-text-shadow">
        Contact
      </h3>
    </fn-jumbotron>
  
    <section class="fn-content">
      <div class="grid-x">
        <div class="cell small-12">
          <!-- <h4>Thank you for contacting me!</h4>
          <h5>I will answer as fast as I can!</h5> -->
        </div>
        <section class="cell small-16 large-6 fn-contat-line fn-contact-" v-on:click="showContent()">
          <i class="fa fa-envelope-open" aria-hidden="true"></i>
          <span>
            <h6>E-Mail</h6>
            <span id="fn-contact-">go{{secondPart}}</span>
          </span>
        </section>
        <section class="cell small-16 large-6 fn-contat-line">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          <span>
            <h6>LinkedIn</h6>
            <a href="https://www.linkedin.com/in/gomidefabio/" target="_blank">
              https://www.linkedin.com/in/gomidefabio/
            </a>
          </span>
        </section>
        <section class="cell small-16 large-6 fn-contat-line">
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
          <span>
            <h6>Twitter</h6>
            <a href="https://twitter.com/_fabionolasco" target="_blank">
              https://twitter.com/_fabionolasco
            </a>
          </span>
        </section>
        <section class="cell small-16 large-6 fn-contat-line">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          <span>
            <h6>Facebook</h6>
            <a href="https://www.facebook.com/gomidefabio" target="_blank">
              https://www.facebook.com/gomidefabio
            </a>
          </span>
        </section>
      </div>
    </section>
  
  </div>
</template>

<script>
import UTILS from '../plugins/utils.js'

export default {
  name: 'fn-contact',
  data() {
    return {
      original: 'xxxxxxx (click to show)',
      secondPart: 'xxxxxxx (click to show)'
    }
  },
  methods: {
    showContent: function () {
      const ext = '@gm'
      if (this.secondPart !== 'midefabio' + ext + 'ail.com') {
        this.secondPart = 'midefabio' + ext + 'ail.com'
      }
      UTILS.selectText('fn-contact-')
    }
  }
}
</script>

<style scoped>
.fn-contat-line {
  margin-bottom: 30px;
}

.fn-contat-line h6 {
  font-weight: bold;
  margin: 0;
}

.fn-contat-line #fn-contact-,
.fn-contat-line a {
  line-height: 2.2rem;
  display: inline-block;
}

.fn-contat-line i {
  font-size: 2rem;
  margin-right: 10px;
  color: #aaa;
}

.fn-contat-line i,
.fn-contat-line span {
  height: 4.2rem;
  display: inline-block;
  vertical-align: top;
}

.fn-contact h4,
.fn-contact h5 {
  margin: 0;
  color: #aaa;
}

.fn-contact h4 {
  font-size: 1.7rem;
}

.fn-contact h5 {
  font-size: 1.2rem;
  margin-bottom: 60px;
}

.fn-contat-line,
.fn-contat-line span {
  overflow: hidden;
  white-space: nowrap;
}

.fn-contact- {
  cursor: pointer;
}
</style>
