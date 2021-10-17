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
            <!-- hamburger box -->
            <span class="hamburger-inner"><!--Hamberger inner--></span>
          </span>
        </button>
      </div>
      <!-- Pour le menu nav animation -->
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <!-- Ma liste -->
          <li>
            <div>
              <a href="">
                <!-- Symbol coeur -->
                <svg>
                  <path></path>
                </svg>
                <span></span>
                <span></span>
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
.container-raw {
  margin-left: auto;
  margin-right: auto;
  width: 91.666667%;
}
.hamburger {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: absolute;
  z-index: 1;
  // outline: 2px solid transparent;
  // outline-offset: 2px;
  // position: relative;
  // z-index: 10;
  // padding: 15;
}
</style>