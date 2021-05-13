<template>
  <div class="Grants">
    HOWDY HOW GOES IT PARDNER
    {{ grants.group }}
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
