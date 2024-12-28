<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import router from '@/router'
import toast from '@/utils/toast'
import { onMounted, ref } from 'vue'
import eventBus, { EVENT_SOLUTIONGUIDE as EVENT, EVENT_STATUS } from '@/utils/mitt'
import { confirmOptions } from '@/utils/data'
import { useModal } from 'vuestic-ui'
import SolutionGuideList from './partials/SolutionGuideList.vue'
import useSolutionGuide from '@/composables/useSolutionGuide'

//composable function call
const { rows, getPaginated, deleteRecord } = useSolutionGuide()
const { confirm } = useModal()
//manage event
eventBus.on(EVENT.DELETE, ({ message, type }) => {
  if (type == EVENT_STATUS.SUCCESS) {
    toast(message)
    getPaginated(currentPage.value)
  } else {
    toast(message, EVENT_STATUS.ERROR)
  }
})

const currentPage = ref(1)

//computed properties

//methods
const addSolutionGuide = () => {
  router.push({ name: 'solution-guide-new' })
}

const handlePageChange = (pageNo) => {
  currentPage.value = pageNo
  getPaginated(currentPage.value)
}

const handleDelete = (id) => {
  confirm(confirmOptions).then((ok) => {
    if (!ok) {
      return
    }
    deleteRecord(id)
  })
}
//watchers

//lifecycle
onMounted(() => {
  getPaginated()
})
</script>

<template>
  <DashboardLayout>
    <div class="wrap">
      <div class="flx margin-b x-center">
        <h2 class="title">Solution Guide</h2>
        <div style="margin-left: 20px">
          <VaPopover placement="bottom" message="Add Solution Guide">
            <VaButton round @click="addSolutionGuide"><i class="ri-add-line"></i></VaButton>
          </VaPopover>
        </div>
      </div>
      <div class="flex flex-col md12 sm12 xs12 cd bg-white">
        <SolutionGuideList :rows="rows" @onDelete="(id) => handleDelete(id)" />
        <AppPagination :rows="rows" @onPageChange="(pageNo) => handlePageChange(pageNo)" />
      </div>
    </div>
  </DashboardLayout>
</template>
