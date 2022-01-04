<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { Button } from 'vant'</script>

<template>
  <div class="pxto">这是pxtovw</div>
  <div style="font-size: 20px;">这是pxtovw行内样式</div>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Button size="small" type="primary">按钮呀</Button>
  <Button type="danger" class="m-flexd-col">按钮呀</Button>
  <router-view />
</template>

<style>
.pxto {
  font-size: 20px;
}
</style>
