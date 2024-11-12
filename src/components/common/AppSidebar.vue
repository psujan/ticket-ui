<template>
  <sidebar-menu :menu="menu" theme="white-theme" widthCollapsed="0px" :hideToggle="false">
    <template v-slot:toggle-icon>
      <div class="sidebar-toggle">
        <span><i class="ri ri-menu-line"></i></span>
      </div>
    </template>
  </sidebar-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        // {
        //   header: 'Main Navigation',
        //   hiddenOnCollapse: false,
        // },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'ri-dashboard-line',
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link',
            },
          ],
        },
      ],
    }
  },
}
</script>
