<script setup lang="ts">
import VVanta from 'vue-vanta-revamp'
import Card from '@/components/Card.vue'

const effect = 'fog'
const options = {
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0xfffbc6,
  midtoneColor: 0xde4b90,
  lowlightColor: 0x00f0ff,
  baseColor: 0xfff3e9,
  zoom: 1.1,
}
</script>

<template>
  <div class="page-root">
    <VVanta :effect="effect" :options="options" vantaId="vanta-bg" aria-hidden="true" />
    <main class="content" role="main">
      <Card />
    </main>
  </div>
</template>

<style>
/* Global reset to ensure full-bleed cover and no scrollbars */
html,
body,
#app {
  height: 100%;
  margin: 0;
  overflow: hidden;
  /* prevent vertical & horizontal overflow */
  background: #0b0c10;
  /* fallback color behind Vanta */
}

.page-root {
  position: relative;
  min-height: 100%;
  width: 100%;
}

#vanta-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  height: 100vh;
  width: 100vw;
}

.content {
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}
</style>
