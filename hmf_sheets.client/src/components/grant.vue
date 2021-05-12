<template>
  <div class="Grants">
    HOWDY HOW GOES IT PARDNER
    {{ grants.name }}
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Grants',
  props: {
    grants: {
      type: Object,
      default: () => new Grant()
    }
  },
  setup() {
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
