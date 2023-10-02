<template>
  <div
    @click="() => closeModal && closeModal()"
    class="fixed z-50 w-full h-full bg-black bg-opacity-60"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';
import { Flight } from '~/types';

const props = defineProps({
  closeModal: {
    type: Function as PropType<(flight?: Flight) => void>,
    required: false,
  }
})
</script>