<template>
  <div class="comparison">
    <vxe-table
      v-for="item in list"
      :key="item.id"
      :data="item.child"
      :row-config="{ keyField: 'id', isHover: true }"
      :tree-config="{ childrenField: 'child', accordion: true }"
      empty-text="暫無數據"
      class="comparison-list"
    >
      <vxe-column field="name" :title="item.name" tree-node />
    </vxe-table>
  </div>
</template>

<script>
import comparisonList from '@/unit/instructions.json'

export default {
  name: 'ComparisonList',
  data: () => ({
    list: [],
  }),
  created() {
    this.list = comparisonList.comparison
  },
}
</script>
