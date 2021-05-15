<template>
  <div class="Years">
    <router-link :to="{name: 'GrantsByYear', params: {id: years.id}}">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">
            {{ years.year }}
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Year } from '../models/Year'
export default {
  name: 'Years',
  props: {
    years: {
      type: Object,
      default: () => new Year()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
