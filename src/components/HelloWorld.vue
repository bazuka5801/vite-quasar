<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a> |
    <a href="https://quasar.dev/" target="_blank">Quasar 2 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <q-btn @click="showNotify">Quasar button</q-btn>
</template>

<script setup>
import { defineProps, reactive, onMounted } from 'vue'
import { useQuasar } from 'quasar'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
const quasar = useQuasar()

onMounted(() => {
  showNotify()
})

function showNotify () {
  quasar.notify('Quasar inside Vite')
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>