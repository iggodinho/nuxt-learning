<template>
  
    <PageTitle>index</PageTitle>
    <NuxtLink to="/about">about</NuxtLink>
    <h1>{{ counter }}</h1>
    <button @click="counter++">Increment</button>
    <button @click="counter--">Decrement</button>
    <p v-if="pending">loading...</p>
    <p v-if="error">ERROR: {{ error.data.message }}</p>
    <u1 v-else class="list-disc list-inside p-4">
        <li v-for="item in data?.foods" key="food.id">
            {{ item.name }}
        </li>
    </u1>
    <pre>{{ data?.database }}</pre>
</template>

<script lang="ts" setup>
useHead({
    title: "My nuxt project",
});
const counter=useState<number>("count", () => 0);
const {data, pending, error} = useFetch("/api/items", {server:false});
</script>