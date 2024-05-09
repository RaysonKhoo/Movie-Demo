<template>
  <div id="example">
    <h2 class="uppercase text-yellow-500 font-semibold text-lg mt-10 ml-2 mb-5">
      Upcoming Movies
    </h2>
    <carousel
      :height="500"
      :autoplay="2000"
      :key="UpcomingMovies.length"
      :wrap-around="true"
      :listData="UpcomingMovies"
      v-model="currentSlide"
      ref="carousel"
    >
      <slide :index="i" :key="i" v-for="(movie, i) in this.UpcomingMovies">
        <figure @click="slideTo(i - 1)">
          <img
            :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
            alt=""
            class="mb-5"
          />
          <figureCaption class="font-semibold text-lg">
            <router-link :to="`/MoviePage/${movie.id}`">
              {{ movie.title }}
            </router-link>
          </figureCaption>
        </figure>
        {{ slide }}
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>
<script>
import { getUpcomingMovie } from "../services/api.service.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      UpcomingMovies: [],
    };
  },
  mounted() {
    this.getUpcomingMovie();
  },
  methods: {
    async getUpcomingMovie() {
      try {
        const response = await getUpcomingMovie();
        //this.actors.push(...response.data.results);
        this.UpcomingMovies = response.data.results.slice(1, 10);
        //console.log("hi", this.actors.profile_path);
        //console.log('hi', this.modalVisible);
      } catch (error) {
        console.log(error);
      }
    },
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>
<style>


</style>
