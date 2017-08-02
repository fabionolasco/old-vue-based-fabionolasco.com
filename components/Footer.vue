<template>
  <div>
    <footer class="grid-x">
      <div class="cell small-12">"...in Jesus are hidden all the treasures of wisdom and knowledge." Colossians 2:2,3</div>
      <div class="cell small-12">&copy; 2017 Fabio Nolasco</div>
    </footer>
    <link rel="stylesheet" type="text/css" :href="fontAwesome" />
  </div>
</template>

<script>
export default {
  name: 'fn-footer',
  data() {
    return {
      fontAwesome: ''
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.fontAwesome = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
    }, null)
  }
}
</script>

<style scoped>
footer {
  padding: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #1ea8ae;
  color: #fff;
}
</style>
