<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
    <div class="container">
        <n-h2 class="title" v-if="route.path==='/'">
            <span>网信委招新报名系统</span>
            <img src="./assets/logo.png" alt="" class="Logo" />
        </n-h2>

        <n-message-provider>
            <router-view></router-view>
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
