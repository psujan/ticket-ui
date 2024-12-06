<script setup>
// import { useSidebarStore } from '@/stores/useSidebarStore'
// const sidebar = useSidebarStore()
</script>

<template>
  <header class="flx x-center border-b">
    <div class="container flx">
      <div class="flx x-between x-center">
        <div class="flx x-center">
          <RouterLink to="/user-portal">
            <div class="app-logo">
              <span class="clr-primary">Helpmate</span>
            </div>
          </RouterLink>
        </div>
        <div>
          <VaDropdown>
            <template #anchor>
              <VaButton class="mr-2" preset="secondary">
                Sujan Poudel <span><i class="ri-arrow-down-s-line"></i></span>
              </VaButton>
            </template>

            <VaDropdownContent> Dropped down! </VaDropdownContent>
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
