<template>
  <div class="container">
    <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold">
      Popular Movies
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:cols-4 lg:grid-cols-5 gap-8">
      <Movie-page
        :key="movie.id"
        v-for="movie in movies"
        :movie="movie"
        :genres="genres"
      />
    </div>
  </div>
</template>
<script>
import { movie } from "../services/api.service.js";
import { getGenre } from "../services/api.service.js";
import MoviePage from "./popularMovie.vue";
export default {
  name: "BodyPage",
  components: {
    "Movie-page": MoviePage,
  },
  data: function () {
    return {
      movies: [],
      genres: [],
    };
  },
  async mounted() {
    try {
      const response = await movie();
      this.movies = response.data.results;
    } catch (error) {
      console.log(error);
    }
    this.getGenres();
  },
  methods: {
    async getGenres() {
      try {
        const response = await getGenre();
        this.genres = response.data.genres;
        //console.log("response", this.genres);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style></style>
