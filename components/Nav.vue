<template>
  <!-- navbar-black -->
  <!-- Change color on scroll dosen't work -->
  <!-- Hamburger dosen't work, i tried -->
  <!-- :class="{ `bg-white`: scrollPosition > 0 }" -->
  <!-- @scroll="handleScroll" -->

  <header
    id="navbar"
    class="h-16 fixed w-full z-50 top-0"
    :class="{ 'bg-white': !view.beforeScroll }"
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
            view.beforeScroll
              ? require(`~/assets/images/logo/logo-white.svg`)
              : require(`~/assets/images/logo/logo-color.svg`)
          "
          alt="Logo"
        />
      </NuxtLink>
      <!-- Pour le humburger -->
      <div class="my-auto md:hidden">
        <!-- Hamburger à faire, hamburger--spring is--active -->
        <button
          class="hamburger hamburger--spring"
          type="button"
          @click.prevent="hamburgerClick"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <!-- Pour le menu nav animation -->
      <nav
        class="
          absolute
          top-0
          left-0
          right-0
          bottom-0
          flex
          md:relative md:block md:invisible
          menu
        "
        :class="{ active: !navOpen }"
      >
        <nav
          class="
            absolute
            top-0
            left-0
            right-0
            bottom-0
            flex
            md:visible
            justify-end
            mt-2.5
          "
        >
          <ul
            class="navbar-menu text-white text-xs"
            :class="{ 'text-gray-900': !view.beforeScroll }"
          >
            <!-- container dropdown 5X -->
            <li class="container-dropdown mx-3">
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

            <li class="container-dropdown mx-3">
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

            <li class="container-dropdown mx-3">
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

            <li class="container-dropdown mx-3">
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

            <li class="container-dropdown mx-3">
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
            <li class="container-dropdown mx-3">
              <div
                class="
                  border border-primary
                  py-1
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
                    class="my-auto text-xs mr-1 text-white"
                    :class="{ 'text-gray-900': !view.beforeScroll }"
                  >
                    (0)
                  </span>
                  <span
                    class="text-white"
                    :class="{ 'text-gray-900': !view.beforeScroll }"
                  >
                    Ma liste
                  </span>
                </NuxtLink>
              </div>
            </li>
          </ul>
        </nav>
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
        hamburgerClick: true,
        // navOpen: 1, // true
      },
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('click', this.hamburgerClick)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('click', this.hamburgerClick)
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
      e.currentTarget.classList.toggle('is-active')
      this.hamburgerClick = true
    },
    // navOpen() {
    //   this.hamburgerClick = true
    // },
  },
}
</script>

<style lang="scss" scoped>
.navbar-black {
  opacity: 1;
  background-color: $background_color;
}
.container-raw {
  margin-left: auto;
  margin-right: auto;
  width: 91.666667%;

  .menu {
    background-color: $background_color;
    height: 100vh;
    width: 100vw;
    margin-left: -100vw;
    transition: margin-left 1s;
    .menu-big {
      background-color: $background_color;
      height: 100vh;
      width: 100vw;
      margin-left: -100vw;
      transition: margin-left 1s;
    }
    .navbar-menu {
      // list-style-type: none;
      // padding-left: 0;
      // width: 91.666667%;
      // margin: auto;
      width: auto;
      display: flex;
      align-items: baseline;
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      ul {
        list-style: none;
      }
    }
  }
  .hamburger--color {
    color: $eveho_color;
  }
  .heart-color {
    color: $eveho_color;
  }
}
.scrollColor {
  background-color: $background_color;
}
</style>