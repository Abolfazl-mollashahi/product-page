<template>
    <Header />

    <!--  -->

    <div class="main mt-5 w-full flex flex-col justify-center items-center md:items-start md:flex-row ">
        <div :class="'w-full'? 'w-full md:hidden' : 'hidden'">
            <Slider/>
        </div>
        <div :class="'hidden'? 'hidden md:block' : 'hidden'">
            <Slider2/>
        </div>
        <div class="sm:w-[70%] md:w-[350px] lg:w-[400px] bg-red-4400 flex flex-col justify-center items-center gap-5 p-5 ">
            <h3 class=" font-medium text-orange-500 uppercase">sneakers Company</h3>
            <h1 class=" text-[27px] font-bold">{{ productfind.title }}</h1>
            <p class=" text-gray-600">{{ productfind.disc }}</p>
            <div class="w-full flex justify-center items-center gap-5">
                <h4 class=" font-bold text-[23px]">${{ p }}</h4>
                <h2 class="p-1 px-2 rounded-lg font-bold text-red-600 bg-orange-300">{{ productfind.discunt }}%</h2>
                <p class=" text-red-700 font-bold line-through">${{ productfind.price }}</p>
            </div>
            <div class="w-full flex flex-col gap-5 md:flex-row justify-center items-center">
                <div class="w-[80%] md:w-[150px] flex justify-between items-center">
                    <!-- dec -->
                    <button @click="deccriment" class="w-[30px] h-[30px] flex items-center justify-center bg-orange-200 rounded-full">
                        <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <path
                                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                                    id="a" />
                            </defs>
                            <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
                        </svg>
                    </button>
                    <!-- cunt -->
                    <h3 class=" text-[20px] font-bold">{{ cunt }}</h3>
                    <!-- inc -->
                    <button @click="incriment" class="w-[30px] h-[30px] flex items-center justify-center bg-orange-200 rounded-full">
                        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <path
                                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                                    id="b" />
                            </defs>
                            <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
                        </svg>
                    </button>
                </div>
                <!-- btn-cart -->
                <button @click="addtocart" class=" w-[60%] py-2 md:w-[150px] flex items-center justify-center rounded-2xl text-white bg-orange-500">
                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="#ffffff" fill-rule="nonzero" />
                </svg>
                <span>Add to cart</span>
            </button>
            </div>
        </div>

    </div>
    <div class=" flex flex-col justify-center border-t-4 shadow-lg  items-center p-2 gap-2 md:mt-10 md:text-[20px] ">
        <h1 class=" text-white bg-orange-700 p-2 px-5 rounded-xl">Front-End Developer : Abolfazl mollashahi</h1>
        <h3 class="text-white bg-orange-700 p-2 px-5 rounded-xl">Nuxt.js And Tailwindcss</h3>
    </div>
</template>

<script setup>
import { dbproducts } from '~/stores/usproduct';
const state = dbproducts()
const productfind = computed(()=>{
    return state.getproduct(0)
})
let cunt = ref(1)
let p = ref((productfind.value.price * productfind.value.discunt)/100)

const deccriment =()=>{
    if(cunt.value <= 1){
        cunt.value = 0
    }else{
        cunt.value--
    }
}
const incriment =()=>{
    cunt.value++
}
const addtocart =()=>{
    state.add(productfind.value,cunt.value)
}

</script>
