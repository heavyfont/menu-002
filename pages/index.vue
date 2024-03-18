<script setup>
  
    const { $ScrollTrigger } = useNuxtApp();
    const { $gsap } = useNuxtApp();

    // Define the page transition
    definePageMeta({})
    useHead({
      title: 'Half Menu',
      meta: [
         { name: 'Half Menu', content: 'Half Menu' }
      ],
    })



 
    onMounted(() => {
      window.scrollTo(0, 0); 
    });
</script>

<template>
    <section class="h-screen">
       <div class="h-full flex justify-center items-center">
          <h1 class="title">
             This is a Template for creating half menu with subtle animation
          </h1>
       </div>
    </section>   
</template>

<style lang="scss" scoped>
.title{
  font-size: 7vw;
  text-align: center;
  line-height: 1;
  text-transform: uppercase;
}

</style>
