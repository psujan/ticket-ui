<script setup lang="ts">
import TicketList from './partials/TicketList.vue'
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import useTicket from '@/composables/useTicket'
import router from '@/router'

//composable function call
const { rows, getRecords } = useTicket()
//manage event

//reactive data

//computed properties

//methods
const addTicket = () => {
  router.push({ name: 'ticket-add' })
}
//watchers
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
        <TicketList :rows="rows" />
        <AppPagination :rows="rows" @onPageChange="(pageNo) => getRecords(pageNo)" />
      </div>
    </div>
  </DashboardLayout>
</template>
