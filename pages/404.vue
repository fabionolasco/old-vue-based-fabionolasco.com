<template>
  <div>

    <fn-jumbotron>
      <h3 class="fn-text-shadow">
        Ooops, page not found!
      </h3>
    </fn-jumbotron>

    <div class="fn-content text-center">
        <img src="/static/page404small.png" alt="Page Not Found"><br><br>
        Sorry, but the address that you are looking for does not exist!<br><br>
        The system just sent me an alert, and I will investigate it as soon as possible.<br><br>
        Meanwhile, please try using the top bar search.<br><br>
        Thank you for your visit!
    </div>

  </div>
</template>

<style scoped>
.fn-content {
  padding: 30px 8%;
}

@media screen and (min-width: 650px) {
  .fn-content {
    padding: 50px 15%;
  }
}
</style>
