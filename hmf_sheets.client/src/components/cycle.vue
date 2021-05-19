<template>
  <div class="Cycles">
    <router-link :to="{name: 'GrantsByCycle', params: {id: cycles.id}}">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">
            {{ cycles.name }}
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Cycle } from '../models/Cycle'
export default {
  name: 'Cycles',
  props: {
    cycles: {
      type: Object,
      default: () => new Cycle()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
