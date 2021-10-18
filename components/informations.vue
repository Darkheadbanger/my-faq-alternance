<template>
  <div>
    <div class="container relative bg-white faq">
      <section id="faq" class="text-black my-12 md:my container">
        <!-- bg-ray f-9 on change -->
        <div
          class="
            mb-5
            py-4
            md:py-8
            px-5
            md:px-10
            transition-colors
            duration-300
            bg-gray-f6
          "
        >
          <p
            class="
              md:text-xl
              font-semibold
              flex
              justify-between
              cursor-pointer
              transition-all
              duration-300
              mb-6
            "
          >
            <span class="my-auto">
              {{ cardsinfo.title }}
            </span>
            <!-- fontawesome -rotate-180 quans s'ouvre -->
            <span class="my-auto"
              ><font-awesome-icon
                class="
                  text-gray-400
                  transform
                  transition
                  duration-300
                  w-6
                  text-gray-a6
                  stroke-current
                "
                size="2x"
                :icon="['fas', 'chevron-up']"
            /></span>
          </p>
          <!-- Pour écrire l'explication -->
          <div
            class="
              md:border-l-8 md:pl-6
              text-sm
              border-gray-e0
              transition-all
              duration-300
              overflow-hidden
              paragraph
            "
          >
            <p class="font-medium mb-1">{{ cardsinfo.reponse.reponse }}</p>
            <div>
              <p>
                {{ cardsinfo.reponse.informations.infos }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/prop-name-casing
  // eslint-disable-next-line vue/require-prop-types
  props: ['cardsinfo'],
}
</script>
