<template>
  <!-- footer qui englobe tout -->
  <footer>
    <!-- Pour organiser -->
    <div class="container flex flex-col py-1 md:py-6">
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
            <div class="w-1/2 mt-3 text-xs">
              <a href="/garanties-shoppingauto" class=""> Nos garanties </a>
            </div>
            <div class="w-1/2 mt-3 text-xs">
              <a href="/qui-sommes-nous" class=""> Qui sommes-nous ? </a>
            </div>
            <div class="w-1/2 mt-3 text-xs">
              <a href="faq" class=""> FAQ </a>
            </div>
            <div class="w-1/2 mt-3 text-xs">
              <a href="/mentions-legales" class=""> Mentions légales </a>
            </div>
            <div class="w-1/2 mt-3 text-xs">
              <a href="/conditions-generales-services" class="">
                Conditions générales de services
              </a>
            </div>
            <div class="w-1/2 mt-3 text-xs">
              <a href="/actualites" class=""> Actualités </a>
            </div>
            <div class="w-1/2 mt-3 text-xs">
              <a href="/contact" class=""> Contact </a>
            </div>
            <div class="w-1/2 mt-3 text-xs">
              <a href="/connexion" class=""> Me connecter </a>
            </div>
          </nav>
        </div>
        <!-- container rs -->
        <div class="text-left flex-col space-between mt-8">
          <p>Suivez-nous</p>
          <!-- reseaux sociaux -->
          <nav class="flex justify-end mb-auto">
            <!-- a 3X -->
            <!-- facebook -->
            <a
              class="fa-container btn-primary"
              href="https://www.facebook.com/shoppingauto"
            >
              <font-awesome-icon
                color="#00f3c3"
                :icon="['fab', 'facebook']"
                size="2x"
              />
            </a>
            <!-- Instagram -->
            <a
              class="fa-container btn-primary instagram instagram--color ml-0.5"
              href="https://www.facebook.com/shoppingauto"
            >
              <font-awesome-icon
                color="#00f3c3"
                :icon="['fab', 'instagram-square']"
                size="2x"
              />
            </a>
            <!-- Youtube -->
            <a
              class="fa-container btn-primary youtube outube--color mr-1.5"
              href="https://www.facebook.com/shoppingauto"
            >
              <font-awesome-icon
                color="#00f3c3"
                :icon="['fab', 'youtube']"
                size="2x"
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
    <!-- Le crezdit dernier -->
    <div id="footer-copyright" class="py-0">
      <div
        class="
          w-10/12
          text-center
          mx-auto
          md:w-full
          flex flex-col
          md:flex-row
          justify-center
        "
      >
        <p
          class="
            text-gray-600 text-xs
            my-auto
            mx-auto
            mb-2
            md:mb-0 md:ml-0 md:mr-3
            flex
          "
        >
          <span class="my-auto mr-1">
            shoppingauto.fr utilise la technologie</span
          >
          <a href="">
            <!-- Logo eveho -->
            <img
              class="object-contain h-5 w-full"
              src="~/assets/images/logo/Eveho.PNG"
              alt="Eveho logo"
            />
          </a>
        </p>
        <!-- Mention legale -->
        <p class="text-gray-600 text-2xs mt-auto">
          © 2021 shoppingauto.fr —
          <!-- shopping auto.fr -->
          <a href="/mentions-legales" class="text-2xs">
            <!-- mention legale -->
            Mentions
          </a>
          <span>
            et
            <a href="/conditions-generales-servicess"> cgs</a>
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
  background-color: rgba(246, 246, 246);
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
    .facebook {
      .facebook--color {
        color: $facebook-color;
      }
    }
    .instagram {
      .instagram--color {
        color: $instagram-color;
      }
    }
    .youtube {
      .youtube--color {
        color: $youtube-color;
      }
    }
  }
  .footer-copyright {
    opacity: 1;
    color: #975656;
    padding-bottom: 3rem;
  }
  .text-2xs {
    font-size: 0.6rem;
  }
}
</style>