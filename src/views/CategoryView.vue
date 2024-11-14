<script setup lang="ts">
import DashboardLayout from '@/components/layout/DashboardLayout.vue'

const pageNo = 3
</script>

<template>
  <DashboardLayout>
    <div class="row">
      <div class="flx margin-b x-center">
        <h2 class="title">Categories</h2>
        <div style="margin-left: 20px">
          <VaPopover class="mr-2 mb-2" message="Add Item">
            <VaButton round><i class="ri-add-line"></i></VaButton>
          </VaPopover>
        </div>
      </div>
      <div class="flex flex-col md12 sm12 xs12 cd bg-white">
        <div class="table-wrapper">
          <table class="fl-table">
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
                <th>Header 4</th>
                <th>Header 5</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>Content 1</td>
                <td>
                  <div class="action-items">
                    <a href="#" title="Edit Item"><i class="ri-edit-box-line"></i></a>
                    <a href="#" title="Delete Item"><i class="ri-delete-bin-line"></i></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 2</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 3</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 4</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 5</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 6</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 7</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 8</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 9</td>
                <td>Content 1</td>
              </tr>
              <tr>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 10</td>
                <td>Content 1</td>
              </tr>
            </tbody>

            <tbody></tbody>
          </table>
        </div>
        <div class="pagination cd">
          <VaPagination class="pagination-content" v-model="pageNo" :pages="10" :visible-pages="3"
            buttons-preset="primary" gapped />
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
