<template>
    <div class=" w-full relative h-[400px] ">
        <button @click="prev" class="p-2 text-white bg-orange-400 rounded-full absolute left-2 top-[50%]">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="#ffffff" stroke-width="3" fill="none" fill-rule="evenodd" />
            </svg>
        </button>
        <button @click="next" class=" p-2 text-white bg-orange-400 rounded-full absolute right-2 top-[50%]">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="m5 1 8 8-8 8" stroke="#ffffff" stroke-width="3" fill="none" fill-rule="evenodd" />
            </svg>
        </button>
        <img class=" w-full h-full rounded-2xl" :src="productimgs.imgs[index]" alt="">
    </div>
</template>


<script setup>
import { dbproducts } from '~/stores/usproduct';
const state = dbproducts()

const productimgs = computed(()=>{
    return state.getproduct(0)
})

let index = ref(0)

const prev =()=>{
    if(index.value == 0){
        index.value = productimgs.value.imgs.length
    }
    index.value--
}

const next =()=>{
    if(index.value == productimgs.value.imgs.length -1){
        index.value = -1
    }
    index.value++
}


</script>