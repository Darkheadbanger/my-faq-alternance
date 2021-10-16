<template>
  <body
    id="body"
    data-aos-easing="ease"
    data-aos-duration="1250"
    data-aos-delay="100"
  >
    <div id="__nuxt">
      <div id="__layout">
        <div class="template-shoppingauto"><Aos /></div>
      </div>
    </div>
  </body>
</template>

<script>
export default {}
</script>
<style lang="scss">
$border_logo: #e2e8f0;
$background_color: #f00;

* {
  box-sizing: border-box;
  border: 0 solid $border_logo;
}
#body {
  overflow-x: hidden;
  margin: 0;
  background-color: $background_color;
}
</style>
