<script setup>
const { $gsap } = useNuxtApp()
const menuOpen = ref(false);
const menuItems = ref(null);
const { $lenis } = useNuxtApp()
const menuButton = ref(null); // Reference to the menu button element

const toggleMenu = () => {
  // Toggle on off
  menuOpen.value = !menuOpen.value;
  // Animation function
  animateMenu();
};
// Close menu if menu open
const closeMenu = () => {
  if (menuOpen.value) {
    toggleMenu()
  }
};


// Animation function
const animateMenu = () => {
  // Disable menu button during animation
  // This will prevent interuption when menu open or close only aplicable if using gsap animation
  menuButton.value.disabled = true;

  // Menu gsap animation
  if (menuOpen.value) {
      document.body.classList.add('menu-open');
      // Stop Lenis when open menu
      $lenis.stop()
      // Enable menu button on animation completion
      menuButton.value.disabled = false; 

  } else {
    document.body.classList.remove('menu-open');
    // Start Lenis after closing menu
    $lenis.start()
    // disable menu button on animation completion
    menuButton.value.disabled = false; 
  }
};

onMounted(() => {});

</script>

<template>
  <nav class="menu fixed left-0 top-0 z-10	w-full" >
    <div class="flex px-4 py-6 items-center menu-wrapper gap-6">
      <div class="logo z-10"> <NuxtLink to="/" @click="closeMenu" class="md:text-xl uppercase"><span class="sans-serif-bold text-3xl text-white ">Dream</span></NuxtLink> </div>
      <div class="">
        <div class="mobile-menu">
          <button ref="menuButton" class="toggle-menu menu-btn" @click="toggleMenu">{{ menuOpen ? 'Close' : 'Menu' }}</button>
          <div ref="menuItems" class="menu-items lg:grid grid-cols-3 flex flex-col">
              <article class="menu-left col-span-2 h-full">
                  <ul class="flex flex-col justify-center h-full text-7xl md:text-9xl menu-left-items sans-serif-bold px-4 text-white">
                      <li class="menu-left-item">Project</li>
                      <li class="menu-left-item">About</li>
                      <li class="menu-left-item">Explore</li>
                  </ul>
              </article>
              <article class="menu-right col-span-1">
                  <figure class="h-full menu-right-image">
                     <NuxtImg class="w-full" src="https://res.cloudinary.com/dnwakycvo/image/upload/v1710781429/sample/dream_fur78g.jpg" alt="" />
                  </figure>
              </article>
          </div>

        </div>
      </div>
      <!-- <div class="flex items-center">
        <ul class="z-10">
          <li > <NuxtLink to="/">Contact</NuxtLink></li>
        </ul>
      </div> -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>


  .menu-open{
     .menu-left,.menu-right{
        clip-path: inset(0% 0% 0% 0% );
     }
     .menu-left-item{
        transform: translate(0);
     }
     .menu-right-image{
        transition: transform 1.2s cubic-bezier(.38,.005,.215,1);
        transform: scaleZ(1) translate(0);
     }

  }
  .menu-right-image{
        transform: scale3d(1.1,1.1,1) translate(1rem);
        transition: transform .6s cubic-bezier(.38,.005,.215,1);
  }
  .menu-left-item{
      transition: transform .6s cubic-bezier(.38,.005,.215,1);
      transform: translate(-7.5rem);
      &:nth-child(1){  
        transition-delay: .05s;
      }
      &:nth-child(2){
        transition-delay: .1s;
      }
      &:nth-child(3){
        transition-delay: .15s;
      } 
  }
  .menu-left,.menu-right{
      transition: clip-path .6s cubic-bezier(.38,.005,.215,1);
  }
  .menu-left{
      height: 100%;
      width: 100%;
      background-color: #992424;
      clip-path: inset(0% 0% 100% 0% );
      @media (min-width: 1024px){
        clip-path: inset(0% 100% 0% 0% );
      }
  }
  .menu-right{
      height: 100%;
      width: 100%;
      background-color: #7c3232;
      clip-path: inset(100% 0% 0% 0% );
  }
  .menu-btn{
    position: relative;
    height: 3.5rem;
    width: 3.5rem;
    /* padding: 0rem; */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &::before{
      content: '';
      position: absolute;
      background-color: #ffffff;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 50px;
      z-index: -1;
    }
  }
 .logo{
  color: #131313;
 }
 .menu-wrapper{
  z-index: 999;
  position: relative;
 }
.menu{
  &::after{
    backdrop-filter: blur(12px);
    background: rgba(0, 0, 0, .8);
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    transition: opacity .5s cubic-bezier(.3,.86,.36,.95);
    z-index: 30;
  }
}
.menu-open{
  .menu{
  &::after{
    content: "";
    opacity: 1;

  }
}
}
.mobile-menu {
  /* Your menu styles */
  .toggle-menu{
    z-index: 88;
    position: relative;
  }
}

.menu-items{
    position: fixed;
    width: 100%;
    height:100vh;
    top: 0;
    left:0;
    // display: none;
}

</style>