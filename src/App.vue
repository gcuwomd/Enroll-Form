<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from "vue";
import card from "./components/EnrollForm.vue";

</script>

<template>
    <div class="container">
        <n-h2>网信委招新报名系统</n-h2>
        <card />
    </div>
</template>

<style scoped>
.container {
    padding: 10px 20px;
}
</style>
