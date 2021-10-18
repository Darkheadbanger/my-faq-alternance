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
            <span>Appelez-nous</span>
            <div class="container-i">
              <font-awesome-icon :icon="['fas', 'phone']" />
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
.container-i {
  display: flex;
  opacity: 1;
  background-color: #ee285b;
  background-color: rgba(238, 40, 91, var(--bg-opacity));
  height: 50px;
  width: 50px;
  z-index: 4;
}
</style>