<template>
  <div class="fn-loading" v-bind:style="{ color: color }">
    <div id="fn-loading-ball">
      <div id="fn-loading-ball_1" class="fn-loading-ball" v-bind:style="{ backgroundColor: color }"></div>
      <div id="fn-loading-ball_2" class="fn-loading-ball" v-bind:style="{ backgroundColor: color }"></div>
      <div id="fn-loading-ball_3" class="fn-loading-ball" v-bind:style="{ backgroundColor: color }"></div>
      <div id="fn-loading-ball_4" class="fn-loading-ball" v-bind:style="{ backgroundColor: color }"></div>
      <div id="fn-loading-ball_5" class="fn-loading-ball" v-bind:style="{ backgroundColor: color }"></div>
      <div id="fn-loading-ball_6" class="fn-loading-ball" v-bind:style="{ backgroundColor: color }"></div>
      <div id="fn-loading-ball_7" class="fn-loading-ball" v-bind:style="{ backgroundColor: color }"></div>
      <div id="fn-loading-ball_8" class="fn-loading-ball" v-bind:style="{ backgroundColor: color }"></div>
    </div>
    Loading...
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#1b96a0'
    }
  }
}
</script>

<style scoped>
.fn-loading {
  text-align: center;
}

.fn-loading,
.fn-loading * {
  vertical-align: middle;
  line-height: 3rem;
  color: #1b96a0;
}

#fn-loading-ball {
  position: relative;
  width: 58px;
  height: 58px;
  margin: auto;
  display: inline-block;
  margin-right: 10px;
}

.fn-loading-ball {
  position: absolute;
  background-color: #1b96a0;
  width: 14px;
  height: 14px;
  border-radius: 9px;
  -o-border-radius: 9px;
  -ms-border-radius: 9px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  animation-name: bounce_fn-loading-ball;
  -o-animation-name: bounce_fn-loading-ball;
  -ms-animation-name: bounce_fn-loading-ball;
  -webkit-animation-name: bounce_fn-loading-ball;
  -moz-animation-name: bounce_fn-loading-ball;
  animation-duration: 0.428s;
  -o-animation-duration: 0.428s;
  -ms-animation-duration: 0.428s;
  -webkit-animation-duration: 0.428s;
  -moz-animation-duration: 0.428s;
  animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-direction: normal;
  -o-animation-direction: normal;
  -ms-animation-direction: normal;
  -webkit-animation-direction: normal;
  -moz-animation-direction: normal;
}

#fn-loading-ball_1 {
  left: 0;
  top: 23px;
  animation-delay: 0.158s;
  -o-animation-delay: 0.158s;
  -ms-animation-delay: 0.158s;
  -webkit-animation-delay: 0.158s;
  -moz-animation-delay: 0.158s;
}

#fn-loading-ball_2 {
  left: 6px;
  top: 6px;
  animation-delay: 0.214s;
  -o-animation-delay: 0.214s;
  -ms-animation-delay: 0.214s;
  -webkit-animation-delay: 0.214s;
  -moz-animation-delay: 0.214s;
}

#fn-loading-ball_3 {
  top: 0;
  left: 23px;
  animation-delay: 0.27s;
  -o-animation-delay: 0.27s;
  -ms-animation-delay: 0.27s;
  -webkit-animation-delay: 0.27s;
  -moz-animation-delay: 0.27s;
}

#fn-loading-ball_4 {
  right: 6px;
  top: 6px;
  animation-delay: 0.326s;
  -o-animation-delay: 0.326s;
  -ms-animation-delay: 0.326s;
  -webkit-animation-delay: 0.326s;
  -moz-animation-delay: 0.326s;
}

#fn-loading-ball_5 {
  right: 0;
  top: 23px;
  animation-delay: 0.382s;
  -o-animation-delay: 0.382s;
  -ms-animation-delay: 0.382s;
  -webkit-animation-delay: 0.382s;
  -moz-animation-delay: 0.382s;
}

#fn-loading-ball_6 {
  right: 6px;
  bottom: 6px;
  animation-delay: 0.428s;
  -o-animation-delay: 0.428s;
  -ms-animation-delay: 0.428s;
  -webkit-animation-delay: 0.428s;
  -moz-animation-delay: 0.428s;
}

#fn-loading-ball_7 {
  left: 23px;
  bottom: 0;
  animation-delay: 0.484s;
  -o-animation-delay: 0.484s;
  -ms-animation-delay: 0.484s;
  -webkit-animation-delay: 0.484s;
  -moz-animation-delay: 0.484s;
}

#fn-loading-ball_8 {
  left: 6px;
  bottom: 6px;
  animation-delay: 0.54s;
  -o-animation-delay: 0.54s;
  -ms-animation-delay: 0.54s;
  -webkit-animation-delay: 0.54s;
  -moz-animation-delay: 0.54s;
}



@keyframes bounce_fn-loading-ball {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(.3);
  }
}

@-o-keyframes bounce_fn-loading-ball {
  0% {
    -o-transform: scale(1);
  }

  100% {
    -o-transform: scale(.3);
  }
}

@-ms-keyframes bounce_fn-loading-ball {
  0% {
    -ms-transform: scale(1);
  }

  100% {
    -ms-transform: scale(.3);
  }
}

@-webkit-keyframes bounce_fn-loading-ball {
  0% {
    -webkit-transform: scale(1);
  }

  100% {
    -webkit-transform: scale(.3);
  }
}

@-moz-keyframes bounce_fn-loading-ball {
  0% {
    -moz-transform: scale(1);
  }

  100% {
    -moz-transform: scale(.3);
  }
}
</style>
