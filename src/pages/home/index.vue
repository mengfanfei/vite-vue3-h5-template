<template>
  <div class="mystyle">
    {{a}}, {{b}}
  </div>
  <MyCom></MyCom>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import MyCom from '../../components/MyCom';
import {useStore} from '@/store'

const store = useStore()

let a = ref('12345456')
let b = store.name
</script>

<style lang="scss" scoped>
.mystyle {
    color: #edaeda;
    font-size: 18px;
}
</style>