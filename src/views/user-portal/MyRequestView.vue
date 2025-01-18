<script setup lang="ts">
import FrontPageLayout from '@/components/common/FrontPageLayout.vue';
import UserService from '@/services/UserService';
import { useAuthStore } from '@/stores/useAuthStore';
import { onMounted, ref } from 'vue';
import { timeAgo } from '@/utils/functions';
import router from '@/router';
const { isAuthenticated } = useAuthStore();
const rows = ref(null);

const getTickets = async () => {
  const result = await UserService.getPaginatedTickets();
  if (result.isSucc) {
    rows.value = result.res.data.data
  }
}

onMounted(() => {
  if (isAuthenticated) {
    getTickets();
  }
})
</script>

<template>
  <FrontPageLayout>
    <section>
      <div class="container" style="height: 100vh">
        <div class="row my-2  ticket-list-row">
          <div class="col-lg-8 bg-white col-sm-12" style="border-radius: 8px;">
            <h2 class="title my-4">My Support Requests</h2>
            <ul class="ticket-list" style="min-height: 400px;" v-if="isAuthenticated">
              <template v-if="rows && rows?.data.length">
                <li class="bg-white py-2 px-4 mb-3" v-for="(row, i) in rows.data" :key="i">
                  <div class="d-flex justify-content-between">
                    <span>{{ '#' + row.id + " " + row.title }}</span>
                    <span style="font-size: 12px; color: #000;">{{ `-${timeAgo(row.createdAt)}`
                      }}</span>
                  </div>
                  <div class="flx x-between x-center">
                    <div class="mt-2">
                      <span class="ticket-category mr-3">{{ row.category.title }} </span> <span
                        style="color:#666">|</span>
                      <span class="ticket-status ms-3" :class="`is-${row.status.toLowerCase()}`">{{ row.status
                        }}</span>
                    </div>
                    <div>
                      <div class="ml-2" style="display: inline;">
                        <VaDropdown>
                          <template #anchor>
                            <VaButton class="" preset="secondary">
                              <span><i class="ri-more-2-line"></i></span>
                            </VaButton>
                          </template>

                          <VaDropdownContent>
                            <VaMenuList class="action-list">
                              <VaMenuItem @click="router.replace('/comments/' + row.id)">
                                <span><i class="ri-chat-4-line"></i> Discussion</span>
                              </VaMenuItem>
                            </VaMenuList>
                          </VaDropdownContent>
                        </VaDropdown>
                      </div>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
            <div class="text-center" style="min-height: 200px;" v-else>
              <p class="clr-gray">Please login to view your submitted request</p>
              <div style="width: 100%; text-align: center; margin:20px 0">
                <a class="go-back" href="/">Back</a>
                <a class="support-req-btn" href="/login">Login</a>
              </div>
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
</style>