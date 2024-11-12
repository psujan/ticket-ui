<script setup>
import AppHeader from '../common/AppHeader.vue'
import AppSidebarVuestic from '../common/AppSidebarVuestic.vue'
</script>

<template>
  <AppHeader></AppHeader>
  <div class="flx">
    <AppSidebarVuestic></AppSidebarVuestic>
    <main class="main">
      <div class="container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
