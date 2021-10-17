<template>
  <!-- Main englobe depuis toute en haut même le nav jusqu'à avant footer -->
  <main class="pt-16">
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
              <a class="text-sm text-white flex nuxt-link-active" href="/">
                <p>o</p>
                Retourner à l'accueil
              </a>
              <h1 class="text-sm text-2xl font-bold md:text-3x1">FAQ</h1>
            </div>
          </div>
        </section>
      </div>
      <!-- Grand espace, pour ecrire la section centre, 5X -->
      <div>
        <section>
          <div>
            <p>
              <span> </span>
              <span> </span>
            </p>
            <!-- Pour écrire l'explication -->
            <div>
              <p></p>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- En bas, pour la "vous n'avez pas de réponse -->
      <div>
        <section>
          <h3></h3>
          <div>
            <!-- 2X pour ke hotline et chat en ligne -->
            <div>
              <div>
                <a href="">
                  <img src="" alt="" />
                </a>
                <!-- hidden on medium -->
                <button></button>
                <!--  pour information tel et chat -->
                <div>
                  <p></p>
                  <div>
                    <p>
                      <!-- a pour numéro tel -->
                      <a href=""></a>
                    </p>
                  </div>
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
export default {}
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
</style>