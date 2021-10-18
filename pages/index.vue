<template>
  <body
    id="body"
    data-aos-easing="ease"
    data-aos-duration="1250"
    data-aos-delay="100"
  >
    <div id="__nuxt">
      <div id="__layout">
        <Nav />
        <Hero-Header
          v-for="cardInfo in cardInformations"
          :key="cardInfo.id"
          :cardsinfo="cardInfo"
        />
        <Footer />
      </div>
    </div>
  </body>
</template> 

<script>
import { cardInformation } from '@/assets/data.js'
export default {
  data() {
    return {
      cardInformations: cardInformation,
    }
  },
}
</script>
