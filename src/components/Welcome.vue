<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import confetti from "canvas-confetti";
const router = useRouter();
onMounted(() => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
  };

  function fire(
    particleRatio: number,
    opts: {
      spread: number;
      startVelocity?: number;
      decay?: number;
      scalar?: number;
    }
  ) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
});
//const linear = "linear-gradient(to right, #ff6f91, #ff7c81, #ff8b72, #ff9c67, #ffae61, #ffb35b, #fdb854, #fbbd4e, #f8b541, #f6ad33, #f3a524, #f19d10)";
const linear =
  "linear-gradient(to right, #ff6f91, #ff717d, #ff7767, #ff8051, #ff8b3a, #ff873c, #ff823f, #ff7e41, #ff6a5e, #ff5d7c, #f05998, #d65db1)";
</script>
<template>
  <n-card class="shadow" content-style="display:flex;align-items:center">
    <n-result status="404">
      <n-space justify="center" align="center">
        <n-gradient-text type="warning" :size="24" :gradient="linear"
          >网信委大家庭期待你的加入</n-gradient-text
        >
        <n-text>报名信息填错了？</n-text>
      </n-space>
      <template #footer>
        <n-button type="primary" text @click="router.push({ path: '/' })"
          >重新报名</n-button
        >
      </template>
    </n-result>
  </n-card>
</template>
<style lang="scss" scoped>
.n-card {
  height: 90vh;
  .n-space {
    height: 40%;
  }
  .n-result {
  }
}
</style>
