<template>
  <div class="relative">
    <button @click="dropdownOpen()" >
      <img
        src="@/assets/images/avatar.png"
        alt=""
        class="h-10 rounded-full mr-1"
      />
    </button>

    <button @click="dropdownOpen()" v-if="dropdown" class="fixed top-0 right-0 bottom-0 w-full h-full cursor-default bg-black opacity-50">

    </button>
    <div  class="absolute bg-white py-2 rounded-lg w-48 right-0 mr-3 shadow-xl" v-if="dropdown">
        <a href="" class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white">Account Setting</a>
        <a href="" class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white">Support</a>
        <a @click.prevent="logout" href="" class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white">Logout</a>
    </div>
  </div>
</template>
<script>
export default {

    data(){
        return{
            dropdown:false,
        };
    },
    methods:{
      dropdownOpen(){
        this.dropdown = ! this.dropdown;
      },
      logout(){
        this.$store.dispatch("setUserLoggedIn",false);
        this.dropdown = false;
      },
    },
    created(){
      const handleEscape = (e) => {
        if(e.key == "Esc" || e.key == "Escape"){
          this.dropdown = false;
        }
      };
      document.addEventListener("keydown", handleEscape);
      
    },
};
</script>
