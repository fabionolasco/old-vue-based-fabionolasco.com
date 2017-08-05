<template>
  <div>
  
    <fn-jumbotron>
      <h3 class="fn-text-shadow">
        Contact
      </h3>
    </fn-jumbotron>
  
    <div class="fn-content">
      <div class="grid-x">
        <section class="cell small-6 fn-contat-line fn-contact-" v-on:click="showContent()">
          <i class="fa fa-envelope-open" aria-hidden="true"></i>
          <span>
            <h6>E-Mail</h6>
            <span id="fn-contact-">go{{secondPart}}</span>
          </span>
        </section>
        <section class="cell small-6 fn-contat-line">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          <span>
            <h6>LinkedIn</h6>
            <a href="https://www.linkedin.com/in/gomidefabio/" target="_blank">
              https://www.linkedin.com/in/gomidefabio/
            </a>
          </span>
        </section>
        <section class="cell small-6 fn-contat-line">
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
          <span>
            <h6>Twitter</h6>
            <a href="https://twitter.com/_fabionolasco" target="_blank">
              https://twitter.com/_fabionolasco
            </a>
          </span>
        </section>
        <section class="cell small-6 fn-contat-line">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          <span>
            <h6>Facebook</h6>
            <a href="https://www.facebook.com/gomidefabio" target="_blank">
              https://www.facebook.com/gomidefabio
            </a>
          </span>
        </section>
      </div>
    </div>
  
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
      } else {
        UTILS.selectText('fn-contact-')
      }
    }
  }
}
</script>

<style scoped>
.fn-content {
  padding: 30px 8%;
}

.fn-contat-line {
  margin-bottom: 30px;
}

.fn-contat-line h6 {
  font-weight: bold;
}

.fn-contat-line i {
  font-size: 2rem;
  margin-right: 10px;
  color: #ddd;
}

.fn-contat-line i,
.fn-contat-line span {
  height: 4.2rem;
  display: inline-block;
  vertical-align: top;
}

.fn-contact- {
  cursor: pointer;
}

@media screen and (min-width: 650px) {
  .fn-content {
    padding: 50px 15%;
  }
}
</style>
