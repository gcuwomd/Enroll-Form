<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from "vue";
import card from "./components/EnrollForm.vue";
</script>

<template>
    <div class="container">
        <n-h2 class="title">
            <span>网信委招新报名系统</span>
            <img src="./assets/logo.png" alt="" class="Logo" />
        </n-h2>

        <n-message-provider>
            <card />
        </n-message-provider>
    </div>
</template>

<style scoped lang="scss">
.container {
    padding: 10px 20px;
    .title{
        display: flex;
        align-items: center;
        gap:10px;
        .Logo {
        width: 40px;
        height: 40px;
        display: inline;
    }
    }
}
</style>
