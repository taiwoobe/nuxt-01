<template>
    <div>
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis, illo quae impedit qui error incidunt sunt aliquid ipsum excepturi, recusandae necessitatibus voluptatum labore rerum molestias facere ex temporibus fuga.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui voluptate ab nobis aperiam, perspiciatis beatae illum impedit, aliquam quasi numquam fugit optio nam, iste quo architecto officiis voluptatum. Provident, pariatur!</p>
      <p>{{ data }}</p>
    </div>
</template>

<script setup>
  const { data } = await useFetch('/api/demo?name=mario', {
    method: 'post',
    body: { age: 30 }
  });
</script>

<style scoped>
@import url("~/assets/css/style.css");
</style>