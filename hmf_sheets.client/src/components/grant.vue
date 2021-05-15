<template>
  <div class="Grants">
    <router-link :to="{name: 'GrantInfo', params: {id: grants.id}}">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">
            {{ grants.group }}
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Grant } from '../models/Grant'
export default {
  name: 'Grants',
  props: {
    grants: {
      type: Object,
      default: () => new Grant()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
