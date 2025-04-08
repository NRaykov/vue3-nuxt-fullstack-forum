<script setup lang="ts">
import Navbar from '~/components/layouts/navbar.vue';
</script>
<template>
    <div class="h-screen">
        <Navbar />
        <div class="flex-1 overflow-auto">
            <slot />
        </div>
    </div>
</template>