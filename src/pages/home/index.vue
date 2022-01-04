<template>
    <div class="mystyle">
        {{a}}, {{b}}
    </div>
    <MyCom></MyCom>
</template>

<script setup>
import { computed, ref } from 'vue';
import MyCom from '../../components/mycom';
import { useStore } from 'vuex'

const store = useStore()

let a = ref('12345456')
let b = computed(() => store.state.myName )
</script>

<style lang="scss" scoped>
.mystyle {
    color: #edaeda;
    font-size: 18px;
}
</style>