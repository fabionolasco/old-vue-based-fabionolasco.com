<template>
  <div class="fn-about">

    <fn-jumbotron>
      <h3 class="fn-text-shadow">
        Fabio Nolasco
      </h3>
    </fn-jumbotron>

    <div class="fn-content">
      <fn-image :src="`about-photo@0x.png`" alt="About Fabio Nolasco" class="fn-post-img"></fn-image>
      <p>Hi there! <br><br>I started in the Web Development world around 1997, while still a young fellow. In 2001, right before College, I began to work professionally as a Full Stack LAMP Developer. Finally, in 2012 I got the opportunity to focus on Front-end Development, my long time passion! I am currently a full time Senior Front-end Architect, which gives me opportunity to lead Front-end shops, set the standards for the development work, define seamless workflow for the developers, provide assistance to the most difficult challenges in each project, and conduct exploratory research into new technologies with prototypes and POC's.</p>
      <p>My job also involves the analysis and implementation of measures to guarantee that our Front-end products are secure, fast, testable, scalable, maintainable, well documented and as future proof as possible. I also aim to favor code patterns and architectures that will facilitate an easy conversion of the Apps between Web, Mobile, Desktop and Wearables Applications.</p>
      <p>An uncommon thing about myself is that I went to College for Forest Engineering. My goal at that time was to work with Software Development to solve to real world problems. As time reveled, programming inside Engineering was often more complex than other areas, what was very beneficial to me. That also created in me a robust systemic and analytical thinking process, as well as a solid ability for Project Management, through a mindset focused on balancing Scope, Time, Resources, Quality and Budget. But despite my appreciation for that Engineering background, I was aware of the importance of formal preparation in Computer Science, so I made sure to also take several dozen courses on that field, some in college level.</p>
      <p>It is the combination of it all: the Engineering mindset, hundreds of courses in formal preparation, and 14+ years of market experience that empowers me to be an efficient and effective Front-end Architect, able to work with projects of all sorts of subjects and complexity levels.</p>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Fabio Nolasco - About'
    }
  }
}
</script>

<style>
.fn-post-img img {
  width: 200px;
}
</style>
