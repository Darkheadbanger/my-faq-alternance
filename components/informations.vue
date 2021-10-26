<template>
  <div>
    <div class="relative bg-white faq flex flex-wrap content-center">
      <section
        id="faq"
        class="text-black mt-10 md:my container sm:mx-10 mx-12 lg:mx-28"
      >
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
            bg-gray-100
          "
          type="button"
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
            "
          >
            <span class="my-auto">
              {{ cardsinfo.title }}
            </span>
            <!-- fontawesome -rotate-180 quans s'ouvre -->
            <span class="my-auto">
              <button
                ref="buttonInfo"
                type="button"
                @click="informationOpenAndClosed($event)"
              >
                <font-awesome-icon
                  class="
                    text-gray-400
                    transform
                    transition
                    duration-300
                    w-6
                    text-gray-a6
                    stroke-current
                  "
                  :class="{ 'rotate-180': !view.infoOpen }"
                  size="2x"
                  :icon="['fas', 'chevron-down']"
                />
              </button>
            </span>
          </p>
          <!-- Pour écrire l'explication -->
          <div
            id="foo"
            class="
              md:border-l-8 md:pl-6
              text-sm
              border-gray-e0
              transition-all
              duration-300
              overflow-hidden
              paragraph
            "
            :class="{
              'h-0': !view.infoOpen,
            }"
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
  // eslint-disable-next-line vue/component-definition-name-casing
  name: 'informations',
  // eslint-disable-next-line vue/prop-name-casing
  // eslint-disable-next-line vue/require-prop-types
  props: ['cardsinfo'],
  data() {
    return {
      view: {
        infoOpen: true,
      },
    }
  },
  methods: {
    informationOpenAndClosed(event) {
      this.view.infoOpen = !this.view.infoOpen
      // eslint-disable-next-line no-console
      console.log(this.$refs, event)
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  .container {
    max-width: 1295px;
  }
  .-rotate-180 {
    transform: rotate(-180deg);
  }
}
</style>