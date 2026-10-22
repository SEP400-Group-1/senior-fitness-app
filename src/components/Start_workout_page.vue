<script setup>
import knabojImage from '../assets/images/knaboj.jpg'
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <div class="bg-white-200" > 
            <img :src="knabojImage" alt="Start workout" class="mx-auto block w-[90%] h-auto"/>
        </div>

        <main class="flex-1 bg-linear-to-t from-orange-200 to-white">
        <button class="rounded-full border w-full  fixed bottom-12 bg-blue-500 text-white  border-gray-300 p-2" >Starta Träning</button>
        </main>
    </div>
</template>

<style scoped>

</style>
