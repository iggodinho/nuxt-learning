<template>
    <nav class="flex justify-between p-4 bg-neutral-300">
        <NuxtLink to="/">Home</NuxtLink>
        <ul class="inline-flex gap-4">
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/register">Register</NuxtLink></li>
            <li><NuxtLink to="/login">Login</NuxtLink></li>
        </ul>    
        <div v-if="user">Logged in as: {{ user.username }}</div>
    </nav>
</template>

<script lang="ts" setup>
interface User {
    username: string;
    id: number;
}  
const user = ref<User | null>(null);

onMounted(async () => {
    const token = useCookie("jwt_token");
    if(!token){
    return;
    }
    const result = await $fetch("/api/auth/verifyToken", {
        method: "POST",
        body: {token: token.value},
    });
    if(!result.success){
        return;
    }
    console.log(result.user);
    user.value = result.user;
});

</script>