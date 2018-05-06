<template>
    <div>
        <div class="container">
            <app-header></app-header>
        </div>
        <app-advertisement></app-advertisement>
    </div>
</template>


<script>
import Header from './Header.vue'
import Advertisement from './Advertisement.vue'
export default {
  components: {
      appHeader: Header,
      appAdvertisement: Advertisement
  }
}
</script>
