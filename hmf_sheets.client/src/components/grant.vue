<template>
  <div class="Grants">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">
          {{ grants.group }}
        </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>
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
