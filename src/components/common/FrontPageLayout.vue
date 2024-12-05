<script setup lang="ts">
import AppFooter from './AppFooter.vue';
import AppHeaderBasic from './AppHeaderBasic.vue';
</script>

<template>
    <AppHeaderBasic></AppHeaderBasic>
    <slot></slot>
    <AppFooter></AppFooter>
</template>