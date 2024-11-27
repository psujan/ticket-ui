<script setup>
import { computed, ref, watch } from 'vue'
const props = defineProps({
  rows: {
    required: false,
    default: null,
  },
  warpperClass: {
    default: 'pagination cd',
  },
  paginationClass: {
    default: 'pagination-content',
  },
  activePage: {
    default: 1,
  },
})

//emit
const emit = defineEmits(['onPageChange'])

//computed properties
const computedTotalCount = computed(() => {
  return props.rows == null ? 0 : props.rows.totalCount
})

const computedPages = computed(() => {
  if (props.rows == null) {
    return 0
  }
  let totalCount = parseInt(props.rows.totalCount / props.rows.pageSize)
  let remainder = props.rows.totalCount % props.rows.pageSize

  if (remainder > 0) {
    totalCount = totalCount + 1
  }
  return totalCount
})

const computedVisiblePages = computed(() => {
  let visisbleCount = 3
  if (computedPages.value > 10) {
    visisbleCount = 5
  }
  return visisbleCount
})

const pageNo = ref(1)

watch(pageNo, (newPageNo) => {
  console.log('Page Changed', newPageNo)
  emit('onPageChange', newPageNo)
})
</script>

<template>
  <div :class="warpperClass">
    <VaPagination
      :class="paginationClass"
      v-model="pageNo"
      :pages="computedPages"
      :total="computedTotalCount"
      :visible-pages="computedVisiblePages"
      buttons-preset="primary"
      active-page-color="#154EC1"
      gapped
      :hideOnSinglePage="true"
    />
  </div>
</template>
