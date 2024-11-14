<script setup></script>

<template>
  <VaModal no-padding>
    <template #content="{ ok }">
      <!-- <VaImage :ratio="16 / 9" src="https://picsum.photos/1500" /> -->
      <VaCardContent>
        <div class="row"></div>
      </VaCardContent>
      <VaCardActions>
        <VaButton @click="$emit('closeModal')"> Apply </VaButton>
      </VaCardActions>
    </template>
  </VaModal>
</template>
