<script setup>
import { computed } from 'vue'
const props = defineProps({
  rows: {
    default: null,
  },
})
const pageNo = 5


//const openModal = ref(false);
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
            <p :class="row.status ? 'is-active' : 'in-inactive'">
              {{ row.status ? 'Active' : 'Inactive' }}
            </p>
          </td>
          <td>
            <p>Created At : {{ row.createdAt }}</p>
            <p>Updated At : {{ row.updatedAt }}</p>
          </td>
          <td>
            <div class="action-items">
              <a href="#" title="Edit Item" @click="$emit('onEdit', row)"
                ><i class="ri-edit-box-line"></i
              ></a>
              <a href="#" title="Delete Item" @click="$emit('onDelete', row.id)"
                ><i class="ri-delete-bin-line"></i
              ></a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
