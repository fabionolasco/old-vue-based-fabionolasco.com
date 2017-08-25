<template>
  <div class="grid-x">
    <div class="cell small-12 fn-jumbotron">
      <div v-if="SearchService.isLoading" class="fn-router-loading">
        <fn-spinner color="#fff"></fn-spinner>
      </div>
      <slot v-if="!SearchService.isLoading"></slot>
    </div>
  </div>
</template>

<script>
import SearchService from '../plugins/search'

export default {
  name: 'fn-jumbotron',
  data () {
    return {
      SearchService: SearchService
    }
  }
}
</script>

<style scoped>
.fn-jumbotron {
  background-color: #1ea8ae;
  text-align: center;
  background: url("../static/bg1.svg")  no-repeat top left;
  background-size: cover;
  padding: 150px 50px;
}

.fn-jumbotron h3 {
  color: #fff;
  line-height: 2rem;
  font-size: 1.5rem;
}

.fn-jumbotron .fn-im {
  display: block;
  font-size: 2rem;
  margin-bottom: 20px;
}

.fn-jumbotron .fn-desc {
  display: block;
  font-size: 1.2rem;
}

.fn-router-loading {
  width: 100%;
  text-align: center;
  padding: 50px;
  margin-bottom: 40px;
}

@media screen and (min-width: 650px) {
  .fn-jumbotron {
    margin-top: 133px;
    padding: 150px 25%;
  }
  .fn-jumbotron h3 {
    line-height: 2.6rem;
    font-size: 2rem;
  }
  .fn-jumbotron .fn-im {
    font-size: 2.3rem;
  }
  .fn-jumbotron .fn-desc {
    font-size: 1.4rem;
  }
}
</style>
