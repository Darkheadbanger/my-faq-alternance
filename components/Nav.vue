<template>
  <header
    id="navbar"
    :class="{
      'bg-white': !view.beforeScroll,
      '': view.beforeScroll,
      'navbar-black': !view.whiteHeader,
      '': view.whiteHeader,
    }"
    class="h-16 fixed w-full z-50 top-0"
  >
    <div class="container-raw flex justify-between h-full">
      <!-- Pour le logo -->
      <!-- Il faut changer a à nuxt-link router -->
      <NuxtLink
        to="/"
        class="z-10 my-auto flex h-6 header-logo nuxt_link_active"
      >
        <img
          class="h-full my-auto"
          :src="
            view.beforeScroll && view.whiteHeader
              ? require(`~/assets/images/logo/logo-white.svg`)
              : require(`~/assets/images/logo/logo-color.svg`)
          "
          alt="Logo"
        />
      </NuxtLink>
      <!-- Pour le humburger -->
      <div class="my-auto md:hidden">
        <button
          class="hamburger hamburger--spring buttonHamburger"
          type="button"
          @click="hamburgerClick"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <nav
        class="
          absolute
          md:top-0 md:left-0 md:right-0 md:bottom-0 md:mt-2.5
          menu
        "
        :class="{
          'menu-active': !view.whiteHeader,
          '': view.whiteHeader,
        }"
      >
        <ul
          class="
            mt-16
            ml-11
            md:ml-0
            md:mt-0
            md:navbar-menu
            md:text-white
            md:text-xs
            md:flex
            md:justify-end
          "
          :class="{ 'md:text-gray-900': !view.beforeScroll }"
        >
          <!-- container dropdown 5X -->
          <li class="relative md:mx-3 pt-1 md:pt-3.5">
            <a href="/voitures occasion">
              <img
                class="h-5 md:3 inline mr-2 my-auto"
                src="~/assets/images/menu/car.svg"
                alt="Voitures"
              />
              Nos voitures
            </a>
          </li>
          <!-- Pour ma liste -->

          <li class="relative md:mx-3 pt-1 md:pt-3.5">
            <div>
              <NuxtLink to="/garanties-shoppingauto">
                <!-- Symbol coeur -->
                <img
                  class="h-5 md:3 inline mr-2 my-auto"
                  src="~/assets/images/menu/Garanties.svg"
                  alt="Garanties"
                />
                Nos garanties
              </NuxtLink>
            </div>
          </li>

          <li class="relative md:mx-3 pt-1 md:pt-3.5">
            <div>
              <a href="/qui-sommes-nous">
                <!-- Symbol coeur -->
                <img
                  class="h-5 md:3 inline mr-2 my-auto"
                  src="~/assets/images/menu/list.svg"
                  alt="Qui sommes-nous ?"
                />
                Qui sommes-nous ?
              </a>
            </div>
          </li>

          <li class="relative md:mx-3 pt-1 md:pt-3.5">
            <div>
              <NuxtLink
                to="/garanties-shoppingauto"
                class="nuxt-link-exact-active nuxt-link-active"
              >
                <!-- Symbol coeur -->
                <img
                  class="h-5 md:3 inline mr-2 my-auto"
                  src="~/assets/images/menu/chat.svg"
                  alt="FAQ"
                />
                FAQ
              </NuxtLink>
            </div>
          </li>

          <li class="relative md:mx-3 pt-1 md:pt-3.5">
            <div>
              <a href="/garanties-shoppingauto">
                <img
                  class="h-5 md:3 inline mr-2 my-auto"
                  src="~/assets/images/menu/person.svg"
                  alt="Garanties"
                />
                Me connecter
              </a>
            </div>
          </li>

          <!-- Ma liste -->
          <li class="relative md:mx-3 pt-1 md:pt-3.5">
            <div
              class="
                border border-primary
                py-1.5
                px-2
                rounded-full
                border-green-300
              "
            >
              <NuxtLink to="/mon-compte/wishlist" class="heart-color">
                <!-- Symbol coeur -->
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="
                    text-sm
                    my-auto
                    md:mt-1
                    text-primary
                    svg-inline--fa
                    fa-heart fa-w-16
                  "
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                    class=""
                  ></path>
                </svg>
                <span
                  class="md:my-auto md:text-xs md:mr-1 md:text-white"
                  :class="{ 'md:text-gray-900': !view.beforeScroll }"
                >
                  (0)
                </span>
                <span
                  class="md:text-white"
                  :class="{ 'md:text-gray-900': !view.beforeScroll }"
                >
                  Ma liste
                </span>
              </NuxtLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      view: {
        beforeScroll: 1, // true
        hamburgerClicks: true,
        whiteHeader: true,
        // navLeftActive: true,
      },
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('click', this.hamburgerClick)
    // window.addEventListener('change', this.navOpen)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('click', this.hamburgerClick)
    // window.removeEventListener('change', this.navOpen)
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.view.beforeScroll = 0 // false
      } else {
        this.view.beforeScroll = 1 // true
      }
    },
    hamburgerClick(e) {
      // this.$el.querySelector('.buttonHamburger').classList.toggle('is-active')
      // hamburgerClick(e) {
      e.currentTarget.classList.toggle('is-active')
      this.view.whiteHeader = !this.view.whiteHeader
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-black {
  background-color: $background_color;
}
.container-raw {
  margin-left: auto;
  margin-right: auto;
  width: 91.666667%;

  .hamburger--color {
    color: $eveho_color;
  }
  .heart-color {
    color: $eveho_color;
  }
}
header {
  @media (max-width: 768px) {
    .menu {
      background-color: $background_color;
      height: 100vh;
      width: 100vw;
      margin-left: -105vw;
      // margin-left: 0;
      transition: margin-left 1s;
      opacity: 1;
    }
  }
  .menu-active {
    margin-left: -6vw;
  }
  .navbar-menu {
    width: auto;
    display: flex;
    align-items: baseline;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    ul {
      list-style: none;
    }
  }
  .scrollColor {
    background-color: $background_color;
  }
}
</style>