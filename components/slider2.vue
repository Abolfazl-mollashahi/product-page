<template>
     <div class=" w-[350px] lg:w-[400px]">
            <div class=" flex flex-col items-center gap-6 justify-center">
                
                <div class=" w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
                    <img class=" w-full h-full ii rounded-xl" :src="ss" alt="">
                </div>
                
                <div class=" flex gap-6" >
                    <button @click="ss = src" class=" w-[75px] h-[75px]" v-for="src in product.imgs" :key="src" >
                        <img :class="ss === src ? ' scale-[0.7] border-[5px] border-red-600' : ''" class=" w-full h-full rounded-lg" :src="src" alt="">
                    </button>
                </div>
                
            </div>
        </div>
</template>

<script setup>
import { dbproducts } from '~/stores/usproduct';
const state = dbproducts()
const product = computed(()=>{
    return state.getproduct(0)
})
const ss = ref(product.value.imgs[0])

</script>
<style scoped>
.ii{
    transition: all 0.5s ease-in;
}

</style>

