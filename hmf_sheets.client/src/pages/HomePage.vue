<template>
  <!-- <Grants v-for="grants in state.grants" :key="grants.id" :grants="grants" /> -->
  <p>Sort By Year</p>
  <Years v-for="years in state.years" :key="years.id" :years="years" />
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { grantsService } from '../services/GrantsService'
import { yearsService } from '../services/YearsService'

export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      grantsService.getGrants()
      yearsService.getYears()
    })
    const state = reactive({
      grants: computed(() => AppState.grants),
      years: computed(() => AppState.years)
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
