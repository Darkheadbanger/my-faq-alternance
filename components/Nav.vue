<template>
  <!-- navbar-black -->
  <header class="h-16 fixed w-full z-50 top-0">
    <div class="container-raw flex justify-between h-full">
      <!-- Pour le logo -->
      <!-- Il faut changer a à nuxt-link router -->
      <a class="z-10 my-auto flex h-6 header-logo nuxt_link_active" href="/">
        <img
          class="h-full my-auto"
          src="~/assets/images/logo-white.PNG"
          alt="Logo"
        />
      </a>
      <!-- Pour le humberger -->
      <div class="my-auto md:hidden">
        <!-- Hamburger à faire, hamburger--spring is--active -->
        <button class="hamburger hamburger--spring" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <!-- Pour le menu nav animation -->
      <nav class="absolute top-0 left-0 right-0 bottom-0 flex md:block menu">
        <ul class="navbar-menu">
          <!-- container dropdown 5X -->
          <li class="container-dropdown">
            <a href="/voitures occasion">
              <img
                src="h-5 md:3 inline mr-2 my-auto"
                alt="~/assets/images/menu/voiture.png"
              />
            </a>
          </li>
          <!-- Pour ma liste -->
          <!-- Ma liste -->
          <li>
            <div class="border border-primary py-1 px-2 rounded-full">
              <a href="~/assets/images/menu/heart.png">
                <!-- Symbol coeur -->
                <svg>
                  <path></path>
                </svg>
                <span class="my-auto text-xs mr-1">(0)</span>
                <span>Ma liste</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar-black {
  opacity: 1;
  background-color: #fff;
}
.container-raw {
  margin-left: auto;
  margin-right: auto;
  width: 91.666667%;

  .menu {
    background-color: rgba(255, 255, 255);
    height: 100vh;
    width: 100vw;
    margin-left: -100vw;
    transition: margin-left 1s;

    .navbar-menu {
      list-style-type: none;
      padding-left: 0;
      width: 91.666667%;
      margin: auto;
    }
  }
  .hamburger--color {
    color: #00f3c3;
  }
}
</style>