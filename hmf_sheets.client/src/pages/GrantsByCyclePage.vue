<template>
  <div class="component">
    <Grants v-for="grants in state.grants" :key="grants.id" :grants="grants" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { grantsService } from '../services/GrantsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
export default {
  name: 'Component',
  setup() {
    const route = useRoute()
    onMounted(() => {
      grantsService.getGrantsByCycle(route.params.id)
    })
    const state = reactive({
      grants: computed(() => AppState.grants)
    })
    return { state }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
