<script setup lang="ts">
import FrontPageLayout from '@/components/common/FrontPageLayout.vue';
import { useAuthStore } from '@/stores/useAuthStore';
import { onMounted } from 'vue';

const { isAuthenticated ,user } = useAuthStore();

onMounted(()=>{
  if(isAuthenticated){
    console.log('calling api here', user.email)
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
            <ul class="ticket-list" style="min-height: 500px;" v-if="isAuthenticated">
              <li class="bg-white py-2 px-4 mb-3 ">
                <div class="flx x-between x-center">
                  <div>
                    <a href="">Payment of $200 Held</a>
                    <div class="py-1">
                      <span class="ticket-status mr-3">Resolved</span>
                      <span class="ticket-category">Refund and Payment</span>
                    </div>

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
                            <VaMenuItem>
                              <span><i class="ri-chat-4-line"></i> Discussion</span>
                            </VaMenuItem>
                          </VaMenuList>
                        </VaDropdownContent>
                      </VaDropdown>
                    </div>
                  </div>
                </div>
              </li>
              <li class="bg-white py-2 px-4 mb-3 ">
                <div class="flx x-between x-center">
                  <div>
                    <a href="">Payment of $200 Held</a>
                    <div class="py-1">
                      <span class="ticket-status mr-3">Resolved</span>
                      <span class="ticket-category">Refund and Payment</span>
                    </div>

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
                            <VaMenuItem>
                              <span><i class="ri-chat-4-line"></i> Discussion</span>
                            </VaMenuItem>
                          </VaMenuList>
                        </VaDropdownContent>
                      </VaDropdown>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="text-center" style="min-height: 200px;">
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
.title {
  font-size: 18px !important;
  margin-bottom: 10px;
}

.ticket-category {
  font-size: 13px;
  color: #666;
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
  color:#fff !important
}

.go-back{
  padding: 8px;
  border-radius: 6px;
  display: inline-flex;
  margin: 10px;
  justify-content: center;
  min-width: 150px;
  text-align: center;
  background: #f8f8f8 !important;
  color:#000 !important;
}
</style>