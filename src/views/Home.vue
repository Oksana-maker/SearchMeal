<template>
    <div class="flex flex-col p-8 ">
   <div class="items-center justify-center mt-10">
    
   </div>
      
    <div class="flex justify-center gap-2">
     <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
{{ letter }}
     </router-link>   
    </div>
    <pre>Ingredients: {{ingredients}}</pre>
</div>
</template>
<script setup>
import {computed,onMounted,ref } from 'vue'
import store from '../store'
import axiosClient from '../axiosClient';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const ingredients = ref([]);

onMounted ( async() => {
    const response = await axiosClient.get('/list.php?i=list')
   console.log(response.data)
   ingredients.value=response.data
}
)

</script>
