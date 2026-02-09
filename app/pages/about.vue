<template>
    <PageTitle colorClass="text-red-500">About</PageTitle>
    <h2>{{ counter }}</h2>
</template>

<script lang="ts" setup>
const counter=useState<number>("count", () => 0);
</script>