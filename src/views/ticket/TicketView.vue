<script setup lang="ts">
import TicketList from './partials/TicketList.vue'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import TicketStatusModal from './partials/TicketStatusModal.vue'
import useTicket from '@/composables/useTicket'
import router from '@/router'
import toast from '@/utils/toast'
import { onMounted, ref, reactive } from 'vue'
import eventBus, { EVENT, EVENT_STATUS } from '@/utils/mitt'
import { confirmOptions } from '@/utils/data'
import { useModal } from 'vuestic-ui'

//composable function call
const { rows, getRecords, deleteRecord } = useTicket()
const { confirm } = useModal()
//manage event
eventBus.on(EVENT.TICKET_DELETE, ({ message, type }) => {
  if (type == EVENT_STATUS.SUCCESS) {
    toast(message)
    getRecords(currentPage.value)
  } else {
    toast(message, EVENT_STATUS.ERROR)
  }
})
//reactive data
const showStatusModal = ref(false)
const currentPage = ref(1)

//computed properties

//methods
const addTicket = () => {
  router.push({ name: 'ticket-add' })
}

const statusForm = reactive({
  id: '',
  status: '',
})

const handlePageChange = (pageNo) => {
  currentPage.value = pageNo
  getRecords(currentPage.value)
}

const toggleStatusModal = (open, row) => {
  if (open) {
    showStatusModal.value = true
    statusForm.id = row.id
    statusForm.status = row.status
  } else {
    showStatusModal.value = false
    getRecords(currentPage.value)
  }
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
  getRecords()
})
</script>

<template>
  <DashboardLayout>
    <div class="row">
      <div class="flx margin-b x-center">
        <h2 class="title">Tickets</h2>
        <div style="margin-left: 20px">
          <VaButton round @click="addTicket"><i class="ri-add-line"></i></VaButton>
        </div>
      </div>
      <div class="flex flex-col md12 sm12 xs12 cd bg-white">
        <TicketList
          :rows="rows"
          @onUpdateStatus="(row) => toggleStatusModal(true, row)"
          @onDelete="(id) => handleDelete(id)"
        />
        <AppPagination :rows="rows" @onPageChange="(pageNo) => handlePageChange(pageNo)" />
      </div>
    </div>
    <TicketStatusModal
      v-model="showStatusModal"
      :showStatusModal="showStatusModal"
      :form="statusForm"
      @onModalClose="toggleStatusModal(false, null)"
    />
  </DashboardLayout>
</template>
