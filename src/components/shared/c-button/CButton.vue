<script setup lang="ts">
type ColorType = "default" | "primary" | "secondary";

const props = defineProps<{
  color?: ColorType;
  isFull?: boolean;
}>();

const emits = defineEmits<{
  (e: "click", event?: MouseEvent): void;
}>();

const colorClasses = {
  primary: "bg-orange-500 focus:bg-orange-800 text-white",
  secondary: "bg-black text-white",
  default: "bg-gray-300 focus:bg-gray-400",
};

// Handle click safely
function handleClick(event: MouseEvent) {
  event.preventDefault()
  emits("click", event);
}
</script>

<template>
  <button
    @click="handleClick"
    type="button"
    :class="[colorClasses[props.color ?? 'default'], { 'w-full !rounded-lg py-2': props.isFull }]"
    class="px-4 py-1 rounded-full text-xs"
  >
    <slot />
  </button>
</template>
