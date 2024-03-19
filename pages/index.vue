<script setup>
  
    // Define the page transition
    definePageMeta({})
    useHead({
      title: 'Nav Menu - 002',
      meta: [
         { name: 'Nav Menu - 002', content: 'Nav Menu - 002' }
      ],
    })
 
    onMounted(() => {
      window.scrollTo(0, 0); 
    });
</script>

<template>
 <section class="h-screen flex flex-col justify-center">
    <div class="relative h-full">
      <figure class="absolute left-0 top-0 w-full h-full">
        <NuxtImg class="w-full h-full object-cover" src="https://res.cloudinary.com/dnwakycvo/image/upload/v1710860213/sample/neom-9633dHhioC8-unsplash_zz1jjd.jpg" alt="" />
      </figure>
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="lg:text-8xl text-5xl text-white text-center flex flex-col">
          <span>Unveiling the Mysteries</span>
          <span>of the Mind</span>
        </h1>
      </div>
    </div>
  </section> 
</template>

<style lang="scss" scoped>


</style>
