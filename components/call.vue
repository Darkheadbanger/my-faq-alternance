<template>
  <div>
    <div class="container-sidebar hidden md:block fixed left-0 z-50">
      <ul></ul>
    </div>
    <div class="container-sidebar hidden md:block fixed right-0 z-50">
      <ul>
        <li class="flex">
          <button
            class="flex"
            to="#appelez-nous"
            href="#appelez-nous"
            target=""
          >
            <span class="container-text">Appelez-nous</span>
            <div class="container-i">
              <font-awesome-icon
                class="
                  text-white text-xl
                  m-auto
                  svg-inline--fa
                  fa-phone fa-w-16
                "
                aria-hidden="true"
                focusable="false"
                :icon="['fas', 'phone']"
              />
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  .container-sidebar {
    transform: translateY(-50%);
    top: 50%;
    .container-text {
      background-color: $call-button_color;
      margin-top: auto;
      margin-bottom: auto;
      position: absolute;
      font-size: 1rem;
      text-transform: uppercase;
      display: flex;
      transition: all 0.4s;
      width: 250px;
      height: 50px;
      transform: translate(250px);
      .container-i {
        display: flex;
        opacity: 1;
        background-color: $call-button_color;
        height: 50px;
        width: 50px;
        z-index: 4;
      }
    }
  }
  ul {
    list-style: none;
    li {
      margin: 0;
      padding: 0;
    }
  }
  button {
    background-color: transparent;
    background-image: none;
    text-transform: none;
  }
}
</style>