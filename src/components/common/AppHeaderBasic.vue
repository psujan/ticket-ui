<script setup>
import useAuthService from '@/composables/Auth/useAuthService'
import { useAuthStore } from '@/stores/useAuthStore'
import router from '../../router'
const { logout } = useAuthService()
const { user, isAuthenticated } = useAuthStore()
// import { useSidebarStore } from '@/stores/useSidebarStore'
// const sidebar = useSidebarStore()
</script>

<template>
  <header class="flx x-center border-b">
    <div class="container flx">
      <div class="flx x-between x-center">
        <div class="flx x-center">
          <RouterLink to="/">
            <div class="app-logo">
              <span class="clr-primary">Helpmate</span>
            </div>
          </RouterLink>
        </div>
        <div>
          <VaDropdown :offset="[12, 0]">
            <template #anchor>
              <VaButton class="mr-2" preset="secondary">
                <span v-if="!isAuthenticated">Welcome <i class="ri-arrow-down-s-line"></i></span>
                <span v-else>
                  <span class="me-1">Hi</span> {{ user?.fullName }}
                  <span><i class="ri-arrow-down-s-line"></i></span
                ></span>
              </VaButton>
            </template>

            <VaDropdownContent>
              <VaMenuList v-if="!isAuthenticated">
                <VaMenuItem class="list-item" @click="() => router.push('/login')">
                  <Route to="/login"><i class="ri-login-circle-line me-2"></i>Login</Route>
                </VaMenuItem>
              </VaMenuList>
              <VaMenuList v-else>
                <VaMenuItem class="list-item" @click="() => router.push('/my-request')"
                  ><i class="ri-save-line me-2"></i>My Tickets</VaMenuItem
                >
                <VaDivider class="list-item" />
                <VaMenuItem class="list-item" @click="() => logout()"
                  ><i class="ri-logout-circle-r-line me-2"></i>Logout</VaMenuItem
                >
              </VaMenuList>
            </VaDropdownContent>
          </VaDropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-logo {
  margin-left: 0 !important;
}

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
