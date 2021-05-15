<template>
  <div class="component">
    {{ state.grant.group }}
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { grantsService } from '../services/GrantsService'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  name: 'Component',
  setup() {
    const route = useRoute()
    onMounted(() => {
      grantsService.getGrantById(route.params.id)
    })
    const state = reactive({
      grant: computed(() => AppState.activeGrant)
    })
    return { state }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
