<template>
  <!-- List of everything that dosen't work -->
  <!-- 1. Change color on scroll, dosen't work -->
  <!-- 2. Hamburgers dosen't work -->
  <!-- 3. Chevron-up for infrmation, dosen't work -->

  <!--  I don't use <nuxt-link> </nuxt-link> because i use external link to simulate the link on your site because The NuxtLink component is used to navigate only to other pages inside your same application.-->
  <body
    id="body"
    data-aos-easing="ease"
    data-aos-duration="1250"
    data-aos-delay="100"
  >
    <div id="__nuxt">
      <div id="__layout">
        <Nav />
        <Hero-Header />
        <Footer />
      </div>
    </div>
  </body>
</template> 

<script>
export default {}
</script>
