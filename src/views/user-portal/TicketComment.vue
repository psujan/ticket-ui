<script setup lang="ts">
import FrontPageLayout from '@/components/common/FrontPageLayout.vue';
import { useAuthStore } from '@/stores/useAuthStore';
import { onMounted, ref } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router'
import useComment from '@/composables/useComment';
import eventBus, { EVENT_COMMENT as EVENT } from '@/utils/mitt'
import toast from '@/utils/toast';

eventBus.on(EVENT.ADD, (data) => {
  toast(data?.message)
  comment.value = ''
  getAll(route.params.id)
})

const { rows, getAll, add } = useComment()
const ticketId = ref();
const route = useRoute()
const { isAuthenticated, user } = useAuthStore();
const comment = ref();

const handleSubmit = (e) => {
  e.preventDefault();
  add({
    comment: comment.value,
    ticketId: ticketId.value,
    userName: user.email
  })
}

onMounted(() => {
  if (!isAuthenticated) {
    router.replace("/")
  }
  ticketId.value = route.params.id
  getAll(ticketId.value);
})
</script>

<template>
  <FrontPageLayout>
    <section>
      <div class="container">
        <div class="row my-2  ticket-list-row">
          <div class="col-lg-8 bg-white col-sm-12" style="border-radius: 8px;">
            <div class="my-4">
              <a href="#" title="Back" @click="router.replace('/my-request')" class="btn-back"><i
                  class="ri-arrow-left-line"></i>
                Back</a>
              <h2 class="title mt-3">Comments</h2>

              <div class="chat-container" v-if="user && rows.length">
                <div class="chat-messages" v-for="(row, i) in rows" :key="i">
                  <div class="message" :class="[user?.id == row.userId ? 'sent' : 'received']">
                    {{ row.comment }}
                  </div>
                </div>

              </div>
              <Form @submit="(e) => handleSubmit(e)" v-if="!rows.length">
                <div class="chat-footer">
                  <input type="text" placeholder="Add a comment ..." v-model="comment" />
                  <button type="submit">Send</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </FrontPageLayout>
</template>

<style scoped>
.btn-back {
  color: #154ce1;
  font-size: 13px;
  padding: 8px;
  background-color: #fcfcfc;
  transition: 0.35s ease;
  border-radius: 6px;
}

.btn-back:hover {
  background-color: #f4f4f4;
}

.title {
  font-size: 18px !important;
  margin-bottom: 10px;
}

.ticket-category {
  font-size: 13px;
  color: #686868;
  display: inline-block;
  margin: 4px 0 4px;
}

.ticket-status {
  font-size: 13px;
  padding: 4px 10px;
  background-color: #f3f3f3;
  border-radius: 12px;
  display: inline-block;
}

.ticket-list li {
  /* border-radius: 8px; */
  border-bottom: 1px solid #eee;
}

.ticket-list li a {
  color: inherit;
  font-size: 15px;
}

.ticket-list-row {
  border-radius: 8px;
  justify-content: center;
}

.banner {
  background-color: #154ce1;
  color: #fff;
}

.banner .container {
  padding: 30px 0;
}

.container h2 {
  font-size: 22px;
  margin-bottom: 16px;
}

.banner .container p {
  font-size: 14px;
}

.form-btn {
  min-width: 160px;
  padding: 6px;
  margin-left: 12px
}

.welcome-text h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.welcome-text p {
  color: #eeeded;
  font-size: 14px;
  max-width: 70%;
}

.support-req-btn {
  padding: 8px;
  border-radius: 6px;
  display: inline-flex;
  margin: 10px;
  justify-content: center;
  min-width: 150px;
  text-align: center;
  background-color: #154ce1;
  color: #fff !important
}

.go-back {
  padding: 8px;
  border-radius: 6px;
  display: inline-flex;
  margin: 10px;
  justify-content: center;
  min-width: 150px;
  text-align: center;
  background: #f8f8f8 !important;
  color: #000 !important;
}

.is-new {
  color: #f03030;
  background-color: #fdf7f7;
}

.is-inprogress {
  color: #134680;
  background-color: #eff1f9
}

.is-resolved {
  color: #04a604;
  background-color: #f6fdf6
}

.is-reopened {
  color: #070707;
  background-color: #f1f1f1
}

.is-terminated {
  /* text-decoration: underline; */
  color: #666;
  background-color: #faf2fb
}



/**Chat */
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