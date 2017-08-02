<template>
  <div class="grid-x">
    <div class="cell small-12 fn-jumbotron">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fn-jumbotron'
}
</script>

<style scoped>
.fn-jumbotron {
  background-color: #1ea8ae;
  text-align: center;
  background: url("../static/bg1.svg")  no-repeat top left;
  background-size: cover;
  padding: 100px 50px;
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

@media screen and (min-width: 650px) {
  .fn-jumbotron {
    margin-top: 133px;
    padding: 100px 25%;
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
