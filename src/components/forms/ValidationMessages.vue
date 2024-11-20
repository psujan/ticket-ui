<script setup>
defineProps({
  messages: {
    required: false,
    default: () => [],
  },
  title: {
    required: false,
    default: 'One or More Validation Error Occured',
  },
})
</script>

<template>
  <div class="error-occ">
    <h6 class="">
      <span><i class="ri-error-warning-fill"></i>{{ title }}</span>
    </h6>

    <ul class="message-wrap">
      <li v-for="(msg, i) in messages" :key="i">{{ msg }}</li>
    </ul>
  </div>
</template>

<style scoped>
.error-occ {
  padding: 10px 8px;
  background: #ffeeee;
  color: #fd1111;
  /* font-size: 14px; */
  border-radius: 8px;
  margin-bottom: 20px;
}

.error-occ h6 {
  font-size: 14px;
}
.message-wrap {
  padding: 8px;
}

.message-wrap li {
  margin: 6px 0;
  font-size: 13px;
  list-style:;
}
</style>
