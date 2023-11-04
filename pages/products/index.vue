<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script setup allowjs>
    definePageMeta({
        layout: 'products'
    });
    const { data: products } = await useFetch('https://fakestoreapi.com/products');
    useHead({
        title: 'Nuxt Demo - Product',
        meta: [
            { name: 'description', content: 'Product Description' }
        ]
    })
</script>

<style scoped>

</style>