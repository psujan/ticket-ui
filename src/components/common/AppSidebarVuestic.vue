<script setup>
import router from '@/router'
import { useSidebarStore } from '@/stores/useSidebarStore'
const sidebar = useSidebarStore()

const handleClick = (routeName) => {
  router.push({ name: routeName })
}
</script>

<template>
  <div style="min-height:100vh ; height: 100vh">
    <VaSidebar :minimized="sidebar.isMinimized" :minimizedWidth="0">
      <VaSidebarItem @click="handleClick('dashboard')">
        <VaSidebarItemContent>
          <VaIcon>
            <i class="ri-dashboard-line"></i>
          </VaIcon>
          <VaSidebarItemTitle>Dashboard</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>

      <VaSidebarItem @click="handleClick('category')">
        <VaSidebarItemContent>
          <VaIcon>
            <i class="ri-menu-unfold-line"></i>
          </VaIcon>
          <VaSidebarItemTitle>Categories</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>

      <VaSidebarItem @click="handleClick('ticket')">
        <VaSidebarItemContent>
          <VaIcon>
            <i class="ri-share-forward-box-line"></i>
          </VaIcon>
          <VaSidebarItemTitle>Tickets</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>

      <VaSidebarItem>
        <VaSidebarItemContent>
          <VaIcon>
            <i class="ri-stack-line"></i>
          </VaIcon>
          <VaSidebarItemTitle>Solution Guide</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem>

      <!-- <VaAccordion>
        <VaCollapse body-color="#00000022">
          <template #header="{ value: isCollapsed }">
            <VaSidebarItem>
              <VaSidebarItemContent>
                <VaIcon name="mail" />
                <VaSidebarItemTitle>Messages</VaSidebarItemTitle>
                <VaSpacer />
                <VaIcon :name="isCollapsed ? 'va-arrow-up' : 'va-arrow-down'" />
              </VaSidebarItemContent>
            </VaSidebarItem>
          </template>

          <template #body>
            <VaSidebarItem>
              <VaSidebarItemContent>
                <VaIcon name="send" />
                <VaSidebarItemTitle>Send</VaSidebarItemTitle>
              </VaSidebarItemContent>
            </VaSidebarItem>

            <VaSidebarItem>
              <VaSidebarItemContent>
                <VaIcon name="drafts" />
                <VaSidebarItemTitle>Drafts</VaSidebarItemTitle>
              </VaSidebarItemContent>
            </VaSidebarItem>
          </template>
        </VaCollapse>
      </VaAccordion> -->

      <!-- <VaSidebarItem>
        <VaSidebarItemContent>
          <VaIcon name="room" />
          <VaSidebarItemTitle>Address book</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem> -->

      <!-- <VaSpacer />

      <VaSidebarItem>
        <VaSidebarItemContent>
          <VaIcon name="settings" />
          <VaSidebarItemTitle>Settings</VaSidebarItemTitle>
        </VaSidebarItemContent>
      </VaSidebarItem> -->
    </VaSidebar>
  </div>
</template>
