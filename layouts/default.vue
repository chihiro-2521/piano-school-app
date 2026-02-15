<template>
  <div>
    <AppHeader @open-modal="showModal = true" />
    
    <slot />

    <AppFooter />

    <ModalTerms v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>
