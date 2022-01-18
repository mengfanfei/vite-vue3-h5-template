<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from './components/SvgIcon.vue'
import { Button } from 'vant'
import { useStore } from './store'

const store = useStore()

</script>


<template>
  <div class="pxto">这是pxtovw</div>
  <div style="font-size: 20px;">这是pxtovw行内样式</div>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Button size="small" type="primary">按钮呀</Button>
  <Button type="danger" class="m-flexd-col" @click="store.counter++">按钮呀</Button>
  <router-view />
  <SvgIcon name="home-add"></SvgIcon>
  <SvgIcon name="data-chart"></SvgIcon>
  <SvgIcon name="data-money"></SvgIcon>
  <SvgIcon name="data-order"></SvgIcon>
  <SvgIcon name="data-people"></SvgIcon>
  <SvgIcon name="expand"></SvgIcon>
  <SvgIcon name="home-add" color="#8B81C3" style="width: 30px;height: 30px;"></SvgIcon>
  <SvgIcon name="QQ" prefix="iconfont"></SvgIcon>
  <SvgIcon name="QQ" prefix="iconfont" style="color:#edaeda;"></SvgIcon>
  <SvgIcon name="QQ" prefix="iconfont" style="font-size: 30px;"></SvgIcon>
</template>

<style>
.pxto {
  font-size: 20px;
}
</style>
