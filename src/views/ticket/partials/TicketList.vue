<script setup>
import { timeAgo } from '@/utils/functions'
import router from '@/router'
defineProps({
  rows: {
    default: null,
  },
})

const emit = defineEmits(['onUpdateStatus'])

//component methods
const routeTo = (routeName , rowId) => {
  router.push({ name: routeName, params: { id: rowId } })
}

const updateStatusAction = (row) => {
  emit('onUpdateStatus', { id: row.id, status: row.status })
}
</script>

<template>
  <div class="table-wrapper">
    <table class="fl-table" v-if="rows">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows.data" :key="i">
          <td>{{ row.id }}</td>
          <td>{{ row.title }}</td>
          <td>
            <p>
              {{ row.status }}
            </p>
          </td>
          <td>
            <p>Created: {{ timeAgo(row.createdAt) }}</p>
            <p>Updated: {{ timeAgo(row.updatedAt) }}</p>
          </td>
          <td>
            <VaDropdown trigger="hover" placement="bottom-left">
              <template #anchor>
                <div class="action-items">
                  <a href="#"><i class="ri-more-2-line"></i></a>
                </div>
              </template>

              <VaDropdownContent>
                <VaMenuList class="action-list">
                  <VaMenuItem @click="routeTo('ticket-edit' , row.id)">
                    <span><i class="ri-edit-box-line"></i> Edit </span>
                  </VaMenuItem>
                  <VaMenuItem @click="updateStatusAction(row)">
                    <span><i class="ri-ticket-line"></i>Update Status</span>
                  </VaMenuItem>
                  <VaMenuItem @click="routeTo('ticket-discussion' , row.id)">
                    <span><i class="ri-chat-4-line"></i> Discussion</span>
                  </VaMenuItem>
                  <VaDivider></VaDivider>
                  <VaMenuItem @click="$emit('onDelete', row.id)">
                    <span><i class="ri-delete-bin-line"></i> Delete</span>
                  </VaMenuItem>
                </VaMenuList>
              </VaDropdownContent>
            </VaDropdown>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.action-list i {
  margin-right: 8px;
}

.action-list span {
  display: block;
}
.action-list span:hover {
  color: #154ec1;
}
</style>
