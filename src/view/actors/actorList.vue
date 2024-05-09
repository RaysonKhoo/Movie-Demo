<template>
  <div class="py-3">
    <router-link :to="`actors/${this.actor.id}`">
      <img :src="profileImage()" alt="" />
      <h3>{{ actor.name }}</h3>
      <p class="text-gray-400">{{ knownfor }}</p>
    
  </router-link>
</div>
</template>
<script>
export default {
  props: {
    actor: {
      require: true,
    },
  },
  data() {
    return {
  
    };
  },
  methods:{
    profileImage() {
    if(this.actor.profile_path)
      {return "https://image.tmdb.org/t/p/w235_and_h235_face/" + this.actor.profile_path;
      }
      else{
        return "https://via.placeholder.com/235 x 235";
      }
    },
  },
  computed: {
    knownFor(){
      let knownStr ="";
      for(let i; i<this.actor.known_for.length-1; i++){
        knownStr +=this.actor.known_for[i].title;
      }
      return knownStr;
    }
  },
};
</script>
