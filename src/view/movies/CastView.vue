<template>
  <div class="container mx-auto border-b border-gray-600 px-4 py-4">
    <h2 class="text-4xl font-semibold mb-5">
      CAST
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div class="mr-2" :key="cast.id" v-for="cast in casts">
          <img :src="castProfileImage(cast)" alt=""
          class="hover:opacity-75 tansition easy-in-out duration-200">
        <span class="text-gray-300">{{cast.name}}</span>
        </div>
        
        
    </div>
  </div>
</template>
<script>
export default {
    name: "CastView",
    props:{
      casts:{},
      
    },
    methods:{
      castProfileImage(cast){
        if(cast.profile_path){
          return "https://image.tmdb.org/t/p/w300/" + cast.profile_path;
        }
        else{
          return "https://via.placeholder.com/300 x 450";
        }
        
      }

    },
};
</script>
