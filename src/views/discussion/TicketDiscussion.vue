<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout>
    <div class="row">
      <div class="flx margin-b x-center">
        <h2 class="title">Ticket Discussions</h2>
        <div style="margin-left: 20px">
          <VaButton round @click="$router.push({ name: 'ticket' })"
            ><i class="ri-external-link-line"></i
          ></VaButton>
        </div>
      </div>
      <div class="flex flex-col md12 sm12 xs12 cd bg-white">
        <div class="chat-container">
          <div class="chat-messages">
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
            <div class="message received">Hello! How can I help you today?</div>
            <div class="message sent">Hi! I need some assistance with my account.</div>
            <div class="message received">Sure! Can you please provide more details?</div>
          </div>
          <div class="chat-footer">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
.chat-container {
  /*width: 400px;*/
  height: 600px;
  /* background: #ffffff; */
  /* border-radius: 10px; */
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  /* background-color: #f9f9f9; */
}

.message {
  margin: 10px 0;
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.4;
}

.message.sent {
  background-color: #0078d7;
  color: white;
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
