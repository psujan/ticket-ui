<script setup>
const pageNo = 5

//const openModal = ref(false);
</script>

<template>
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
    <VaPagination
      class="pagination-content"
      v-model="pageNo"
      :pages="10"
      :visible-pages="3"
      buttons-preset="primary"
      gapped
    />
  </div>
</template>
