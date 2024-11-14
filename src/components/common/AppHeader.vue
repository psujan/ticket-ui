<script setup>
import { useSidebarStore } from '@/stores/useSidebarStore'
const sidebar = useSidebarStore()
</script>

<template>
  <header class="flx x-center border-b">
    <div class="container flx">
      <div class="flx x-between x-center">
        <div class="flx x-center">
          <div class="sidebar-toggle" @click="sidebar.toggleSidebar()">
            <span><i class="ri ri-menu-line"></i></span>
          </div>
          <RouterLink to="/">
            <div class="app-logo">
              <span class="clr-primary">Helpmate</span>
            </div>
          </RouterLink>
        </div>
        <nav>
          <ul class="flex spaced ctr dropdown-wrap">
            <li class="flx">
              <div class="user-icon bg-primary"><span>J</span></div>
              <VaButtonDropdown preset="primary" class="mr-2 mb-2" :stickToEdges="true">
                <template #label>
                  <span class="username">Hi John Doe</span>
                </template>
                <VaMenuList>
                  <VaMenuItem class="list-item"><i class="ri-user-line"></i>Profile</VaMenuItem>
                  <VaDivider class="list-item" />
                  <VaMenuItem class="list-item"
                    ><i class="ri-logout-circle-r-line"></i>Logout</VaMenuItem
                  >
                </VaMenuList>
              </VaButtonDropdown>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 60px;
  background-color: #fff;
  position: relative;
  z-index: 999;
}

.username {
  padding-left: 8px;
}

.list-item {
  margin: 4px 0;
}

.user-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 12px;
  color: #fff;
  border-radius: 50%;
}

.app-logo {
  visibility: visible;
  margin-left: 40px;
}

.app-logo span {
  font-weight: 500;
  font-size: 22px;
}
</style>
