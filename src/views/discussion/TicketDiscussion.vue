<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import useComment from '@/composables/useComment'
import { useRoute } from 'vue-router'
import { watch, ref } from 'vue'
import { useAuthStore } from '@/stores/useAuthStore'
import toast from '@/utils/toast'
import eventBus, { EVENT_COMMENT as EVENT } from '@/utils/mitt'

const route = useRoute()
const { user } = useAuthStore()
console.log(user)
const { rows, getAll, add } = useComment()
const comment = ref('')

eventBus.on(EVENT.ADD, (data) => {
  toast(data?.message)
  comment.value = ''
  getAll(route.params.id)
})

const handleSubmit = (e) => {
  e.preventDefault()
  if (!comment.value) {
    toast('Please add comment', 'error')
    return
  }

  add({
    comment: comment.value,
    ticketId: route.params.id,
    userName: user.userName,
  })
}

//watcher
watch(
  () => route,
  (to) => {
    if (to.params.id) {
      getAll(to.params.id)
    }
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <DashboardLayout>
    <div class="wrap">
      <div class="flx margin-b x-center">
        <h2 class="title">Ticket Discussions</h2>
        <div style="margin-left: 20px">
          <VaButton round @click="$router.push({ name: 'ticket' })"
            ><i class="ri-external-link-line"></i
          ></VaButton>
        </div>
      </div>
      <div class="flex flex-col md12 sm12 xs12 cd bg-white">
        <div class="chat-container" v-if="user && rows.length">
          <div class="chat-messages" v-for="(row, i) in rows" :key="i">
            <div class="message" :class="[user?.id == row.userId ? 'sent' : 'received']">
              {{ row.comment }}
            </div>
            <!-- <div class="message sent">Hi! I need some assistance with my account.</div> -->
            <!-- <div class="message received">Sure! Can you please provide more details?</div> -->
            <!-- <div class="message received">{{ row.comment }}</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div> -->
          </div>
          <Form @submit="handleSubmit">
            <div class="chat-footer">
              <input type="text" placeholder="Type a message..." v-model="comment" />
              <button type="submit">Send</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
.chat-container {
  /*width: 400px;*/
  /* height: 600px; */
  /* background: #ffffff; */
  /* border-radius: 10px; */
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow-y: auto;
  /* background-color: #f9f9f9; */
}

.message {
  /* margin: 10px 0; */
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.4;
}

.message.sent {
  background-color: #dae9f4;
  /* color: white; */
  align-self: flex-end;
  border-bottom-right-radius: 0;
}

.message.received {
  background-color: #e0e0e0;
  color: #333;
  align-self: flex-start;
  border-bottom-left-radius: 0;
}

.chat-footer {
  display: flex;
  padding: 10px;
  background-color: #ffffff;
  /* border-top: 1px solid #ddd; */
}

.chat-footer input[type='text'] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
}

.chat-footer button {
  margin-left: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #0078d7;
  color: white;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.chat-footer button:hover {
  background-color: #005bb5;
}

/* Scrollbar styling for the chat messages */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
</style>
