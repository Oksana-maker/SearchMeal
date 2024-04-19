<template>
   <div class="p-8 pb-0">
      <input v-model="keyword" type="text" class="rounded border-2 border-gray-500 w-full"
         placeholder="Search for Meals" @change="searchMeals" />
   </div>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
         <router-link :to="{ name: 'mealDetails', params:{id: meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover" />
         </router-link>
         <div class="p-3">
            <h3 class="px-3 font-bold">{{ meal.strMeal }}</h3>
            <p class="mb-4">{{ meal.strInstructions }}</p>
            <div class="flex items-center justify-between">
               <a :href="meal.strYoutube" target="_blank"
                  class="px-3 py-2 rounded border-2 border-red-600 bg-red-500 hover:bg-red-500 hover:text-white transition-colors">YouTube</a>
               <!-- <router-link to="/"
                  class="px-3 py-2 rounded border-2 bg-purple-500 border-purple-600 hover:bg-purple-600 hover:text-white transition-colors">View</router-link> -->
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router';
import store from '../store'

const route = useRoute();
const keyword = ref('')
const meals = computed(()=>store.state.searchedMeals)
function searchMeals(){
store.dispatch('searchMeals', keyword.value)
}
onMounted(() => {
   keyword.value = route.params.name
   if (keyword.value) {
      searchMeals()
   }
})
</script>