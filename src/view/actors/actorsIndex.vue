<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-yellow-500 text-lg font-semibold">POPULAR ACTORS</h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <actorList :key="actor.id" v-for="actor in this.actors" :actor="actor" />
    </div>
    <div class=" text-center mt-5">
      <a href="" @click.prevent="Previous()"> Previous </a>
      <a href="" @click.prevent="Next()" class="ml-5"> Next </a>
    </div>
    <!-- <div class="flex justify-center">
      <div class="spinner"></div>
    </div> -->
  </div>
</template>
<script>
let currentPage = 1;
import { getPerson } from "../../services/api.service.js";
export default {
  data() {
    return {
      actors: [],
    };
  },

  methods: {
    async getPerson(page) {
      try {
        const response = await getPerson(page);
        //this.actors.push(...response.data.results);
        this.actors = response.data.results;
        //console.log("hi", this.actors.profile_path);
        //console.log('hi', this.modalVisible);
      } catch (error) {
        console.log(error);
      }
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          currentPage += 1;
          this.getPerson((currentPage += 1));
        }
      };
    },
    Next() {
      currentPage +=1
      this.getPerson(currentPage);
    },
    Previous() {
      currentPage -=1
      this.getPerson(currentPage);
    },
  },
  mounted() {
    this.getPerson(currentPage);
    this.scroll();
  },
};
</script>
<style>
.d-flex {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
}

.item {
  margin-right: 20px; /* Adjust as needed for spacing */
  flex: 0 0 auto; /* Prevent items from shrinking or growing */
  width: calc(
    75% - 20px
  ); /* Set width to 50% of the container minus the margin */
  box-sizing: border-box; /* Include padding and border in the width */
}
</style>
