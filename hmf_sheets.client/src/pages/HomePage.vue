<template>
  <Grants v-for="grants in state.grants" :key="grants.id" :grants="grants" />
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { grantsService } from '../services/GrantsService'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      grantsService.getGrants()
    })
    const state = reactive({
      grants: computed(() => AppState.grants)
    })
    return {
      state

    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
