<template>
<header class="bg-white shadow h-16 flex justify-between items-center items-stretch">
<router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">Home</router-link>
<div class="flex items-center gap-1">
<router-link :to="{name: 'byName'}" class="px-2 h-full inline-flex items-center transition-colors hover:bg-purple-200">Search Meals</router-link>
<router-link :to="{name: 'byLetter'}" class="px-2 h-full inline-flex items-center transition-colors hover:bg-purple-200">Search by letter</router-link>
<router-link :to="{name: 'byIngredient'}" class="px-2 h-full inline-flex items-center transition-colors hover:bg-purple-200">Search by ingredients</router-link>
</div>
</header>
</template>