<script setup>
import { isDark } from '~/composables'
</script>

<template>
  <nav class="text-xl mt-6 inline-flex gap-2">
    <button @click="toggleDark()">
      <CarbonMoon v-if="isDark" />
      <CarbonSun v-else />
    </button>
  </nav>
</template>
