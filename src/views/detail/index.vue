<template>
  <div class="detail">
    {{ id }}
    <div class="detail-header" />
    <div class="detail-wrap" />
    <div class="detail-footer" />
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      item: {
        id: null
      }
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
