<template>
    <div class="register-page p-4">
        <form class="flex flex-col gap-4 mb-5" @submit.prevent="submitForm">
            <div>
                <label for="username" class="block mb-1">Username</label>
                <input v-model="form.username" type="text" name="username" id='username' placeholder="Username"/>
            </div>
            <div>
                <label for="password" class="block mb-1">Password</label>
                <input v-model="form.password" type="password" name="password" id='password' placeholder="Password"/>
            </div>
        <button type="submit" class="border p-2 max-w-xs">Register</button>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        </form>
    </div>
</template>

<script lang="ts" setup>
const error = ref<string | null>(null);

async function submitForm() {
    error.value = null;
    if (!form.username || !form.password) {
        error.value = "Please fill in all fields.";
        return;
    }
   
    try {
        const result = await $fetch("/api/auth/register", {
            method: "POST",
            body: {username: form.username, password: form.password}
    }); 
    
        alert("Registration successful!");
        form.username = "";
        form.password = "";
    } catch (err) {
        error.value = "Registration failed.";
    }
}   

const form = reactive({
    username: "",
    password: "",
});

</script>