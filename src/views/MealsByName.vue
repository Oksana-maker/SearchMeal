<template>
<div class="p-8">
   <input v-model="keyword" 
   type="text" 
   class="rounded border-2 border-gray-500 w-full" 
   placeholder="Search for Meals"
   @change="searchMeals"
   />
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
   <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl"/>
   <h3 class="px-3 font-semibold">{{meal.strMeal}}</h3>
  <div class="px-3">
   <a :href="meal.strYoutube" target="_blank">Video</a>
  <router-link to="/">Viev</router-link>
</div>
   </div>
</div>
</template>
<script setup>
import {ref} from 'vue'
import{computed} from '@vue/reactivity'
import store from '../store'

const keyword = ref('')
const meals = computed(()=>store.state.searchedMeals)
function searchMeals(){
store.dispatch('searchMeals', keyword.value)
}
</script>