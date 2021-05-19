<template>
  <div class="container-fluid">
    <!-- <Grants v-for="grants in state.grants" :key="grants.id" :grants="grants" /> -->
    <div class="row">
      <p class="col">
        Sort By Year
      </p>
      <Years v-for="years in state.years" :key="years.id" :years="years" />
    </div>
    <div class="row">
      <p class="col">
        Sort By Cycle
      </p>
      <Cycles v-for="cycles in state.cycles" :key="cycles.id" :cycles="cycles" />
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { grantsService } from '../services/GrantsService'
import { yearsService } from '../services/YearsService'
import { cyclesService } from '../services/CyclesService'

export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      grantsService.getGrants()
      yearsService.getYears()
      cyclesService.getCycles()
    })
    const state = reactive({
      grants: computed(() => AppState.grants),
      years: computed(() => AppState.years),
      cycles: computed(() => AppState.cycles)
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
