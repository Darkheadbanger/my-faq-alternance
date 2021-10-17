<template>
  <!-- footer qui englobe tout -->
  <footer>
    <!-- Pour organiser -->
    <div class="container flex flex-col py-4 md:py-6">
      <!-- container footer -->
      <div class="flex-col">
        <!-- logo shopping auto -->
        <div class="container-logo">
          <a class="footer-logo block nuxt-link-active" href="">
            <img
              class="lazyloaded object-contain"
              data-src="~/assets/images/logo/logo-footer.svg"
              alt="Logo"
              src="~/assets/images/logo/logo-footer.svg"
            />
          </a>
        </div>
        <!-- container navigation -->
        <div class="mt-6">
          <!-- Navigation -->
          <p class="font-bold">Navigation</p>
          <!-- list de nav -->
          <nav class="flex flex-wrap flex-row">
            <!-- 10X -->
            <div class="w-1/2 mt-3 text-xs">
              <a href="/voitures-occasion" class=""> Nos voitures </a>
            </div>
          </nav>
        </div>
        <!-- container rs -->
        <div class="text-left flex-col space-between mt-8">
          <p>Suivez-nous</p>
          <!-- reseaux sociaux -->
          <nav class="flex items-end mb-auto">
            <!-- a 3X -->
            <a
              class="fa-container btn-primary"
              href="https://www.facebook.com/shoppingauto"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" size="2x" />
            </a>
          </nav>
        </div>
      </div>
    </div>
    <!-- Le crezdit dernier -->
    <div>
      <div>
        <p>
          <span></span>
          <a href="">
            <!-- Logo eveho -->
            <svg>
              <path></path>
            </svg>
          </a>
        </p>
        <!-- Mention legale -->
        <p>
          <!-- shopping auto.fr -->
          <a href="">
            <!-- mention legale -->
          </a>
          <span>
            <!-- et -->
            <span>cgs</span>
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  opacity: 1;
  .container {
    margin-left: auto;
    margin-right: auto;
    width: 91.666667%;
  }
  .container-logo {
    a {
      margin-right: 3rem;
      display: block;
      img {
        width: 12rem;
        max-width: 100%;
        height: auto;
        display: block;
        border-style: solid;
      }
    }
  }
  .space-between {
    justify-content: space-between;
    .fa-container {
      height: 2.5rem;
      width: 2.5rem;
      display: table;
      border-radius: 9999px;
      position: relative;
      .fa-container:not(:last-child) {
        margin-right: 1rem;
      }
    }
    .btn-primary {
      opacity: 1;
    }
  }
}
</style>