<template>
  <div class="component">
    nice
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { grantsService } from '../services/GrantsService'
export default {
  name: 'Component',
  setup() {
    onMounted(() => {
      grantsService.getGrantsByYear()
    })
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
