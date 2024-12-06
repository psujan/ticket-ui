<script setup lang="ts">
import FrontPageLayout from '@/components/common/FrontPageLayout.vue';
import InputFile from '@/components/forms/InputFile.vue';
import InputQuillEditor from '@/components/forms/InputQuillEditor.vue';
import InputSelect from '@/components/forms/InputSelect.vue';
import InputText from '@/components/forms/InputText.vue';
</script>

<template>
  <FrontPageLayout>
    <!-- <section class="banner">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-6 welcome-text">
            <h2>Open A Support Request</h2>
            <p>We will try to reach out to you soon</p>
          </div>
        </div>
      </div>
    </section> -->
    <section>
      <div class="container">
        <div class="row my-2  ticket-list-row">
          <div class="col-lg-8 bg-white col-sm-12" style="border-radius: 8px;">
            <h2 class="title my-4">My Support Requests</h2>
            <ul class="ticket-list" style="min-height: 500px;">
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
</style>