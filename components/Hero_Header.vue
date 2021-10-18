/* eslint-disable vue/prop-name-casing */
<template>
  <!-- Main englobe depuis toute en haut même le nav jusqu'à avant footer -->
  <main class="pt-0">
    <div>
      <!-- page header avec photo voiture -->
      <div class="relative page-header">
        <!-- section pour la photo -->
        <section id="page-header" class="h-48 md:h-64 bg-cover">
          <div id="page-header-color" class="flex h-full">
            <!-- Grand espace entre nav, endroit pour ecrire retourner a l'accueil -->
            <div
              class="
                m-auto
                container-raw
                mb-auto
                pt-20
                default-title
                text-white
              "
            >
              <NuxtLink to="/" class="text-sm text-white flex nuxt-link-active">
                <font-awesome-icon
                  :icon="['fas', 'chevron-left']"
                  size="xs"
                  class="mt-1 mr-2"
                />
                Retourner à l'accueil
              </a>
              <h1 class="text-sm text-2xl font-bold md:text-3x1">FAQ</h1>
            </div>
          </div>
        </section>
      </div>
      <!-- Grand espace, pour ecrire la section centre, 5X -->
      <Informations
        v-for="cardInfo in cardInformations"
        :key="cardInfo.id"
        :cardsinfo="cardInfo"
      />
      <!-- En bas, pour la "vous n'avez pas de réponse -->
      <div class="relative bg-white custom_contact_us px-10 container mx-16">
        <section
          id="custom-contact-us"
          class="text-black my-12 md:my-24 container"
        >
          <h3 class="text-xl md:text-4xl font-semibold mb-8">
            Vous n’avez pas trouvé de réponse à votre question ? Contactez-nous
            !
          </h3>
          <div class="flex flex-col md:flex-row md:flex-wrap">
            <!-- 2X pour ke hotline et chat en ligne -->
            <div class="flex mb-4 md:mr-24 last:mr-0">
              <div class="mr-6 my-auto">
                <a class="md:hidden block" href="tel:02 37 64 84 40">
                  <img
                    class="w-16"
                    src="~/assets/images/contact/HOTLINE.svg"
                    alt="Hotline"
                  />
                </a>
                <button class="hidden md:block">
                  <img
                    src="https://admin.shoppingauto.fr/storage/uploads/2020/12/15/5fd88680e42195d7fae39ec200PICTO_Hotline.svg"
                    class="w-16"
                  />
                </button>
              </div>
              <div class="my-auto flex-1">
                <p class="text-base md:text-xl font-semibold">
                  Hotline téléphonique
                </p>
                <div class="text-sm">
                  <p>
                    Du lundi au samedi de 9h00 à 19h00 au
                    <a href="tel:0237648440">02 37 64 84 40</a>.
                  </p>
                </div>
              </div>
            </div>
            <!-- Ici deuxième -->
            <div class="flex mb-4 md:mr-24 last:mr-0">
              <div class="mr-6 my-auto">
                <img
                  class="w-16"
                  src="~/assets/images/contact/CHAT.svg"
                  alt="Hotline"
                />
              </div>
              <div class="my-auto flex-1">
                <p class="text-base md:text-xl font-semibold">Chat en ligne</p>
                <div class="text-sm">
                  <p>7 jours sur 7, de 6h à minuit</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
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

<style lang="scss" scoped>
#page-header {
  background-image: url(~assets/images/header-Shopping-auto-1.jpg);
  background-position: center center;
  #page-header-color {
    background-color: rgba(0, 0, 0, 0.5);
    .container-raw {
      margin-left: auto;
      margin-right: auto;
      width: 91.666667%;
    }
    .default-title {
      font-size: 1.125rem;
      font-weight: 700;
    }
  }
}

.paragraph {
  height: 88px;
}
</style>