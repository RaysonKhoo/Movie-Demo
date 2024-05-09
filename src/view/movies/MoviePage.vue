<template>
  <div>
    <div class="container mx-auto flex mt-10 border-b border-gray-600 pb-5">
      <img :src="posterPath" alt="" class="w-64" />
      <div class="ml-24">
        <h1 class="text-4xl font-semibold">{{ this.movie.title }}</h1>
        <span class="text-gray-500 text-sm flex">
          <svg
            class="fill-current text-yellow-500 w-4 h-4 mt-1 mr-1"
            viewBox="0 0 24 24"
          >
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          {{ (this.movie.vote_average * 10).toFixed(2) }}% |
          {{ this.movie.release_date }}
          <span :key="index" v-for="(item, index) in movie.genres" class="ml-1">
            {{ item.name }}
            <span v-if="movie.genres.length - 1 != index">, </span></span
          >
        </span>
        <p class="mt-5">
          {{ this.movie.overview }}
        </p>
        <div class="mt-5">
          <span class="mt-5 font-semibold"> Featured Cast</span>
        </div>
        <div class="flex">
          <div :key="index" v-for="(crew, index) in movie.credits.crew">
            <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
              <span>{{ crew.name }}</span>
              <span class="text-gray-500">{{ crew.job }}</span>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a
            @click.prevent="openModal()"
            class="rounded bg-yellow-500 px-3 py-2 inline-flex text-black font-bold mr-2"
          >
            <svg
              class="w-6 fill-current mr-2"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 60 60"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"
                  ></path>
                  <path
                    d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
                  ></path>
                </g>
              </g>
            </svg>
            <span>Play Trailer</span>
          </a>

          <a
            href="#"
            target="_blank"
            class="rounded bg-yellow-500 px-3 py-2 inline-flex text-black font-bold"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="#000000"
              class="w-6 fill-current mr-2"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#CCCCCC"
                stroke-width="102.4"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M802.4 967.2c-7.2 0-15.2-1.6-21.6-4.8l-258.4-128.8-252.8 140c-18.4 10.4-41.6 5.6-56-9.6-8.8-9.6-12.8-23.2-11.2-36.8l43.2-285.6L33.6 444C20.8 432 16 414.4 21.6 397.6c4.8-16.8 18.4-28.8 36-31.2l285.6-48L464.8 56c7.2-15.2 22.4-25.6 39.2-26.4 17.6-0.8 33.6 8.8 41.6 24l133.6 256.8 287.2 35.2c17.6 2.4 31.2 13.6 36.8 30.4 5.6 16 1.6 34.4-10.4 46.4L790.4 629.6l55.2 284c2.4 12.8-0.8 26.4-8.8 36.8-8.8 10.4-21.6 16.8-34.4 16.8zM520.8 784.8c7.2 0 15.2 1.6 21.6 4.8l255.2 127.2-54.4-280c-3.2-14.4 1.6-29.6 12-40l200-203.2L672 358.4c-14.4-1.6-28-11.2-34.4-24L506.4 81.6 385.6 340c-6.4 13.6-19.2 23.2-33.6 25.6L70.4 412l208 194.4c11.2 10.4 16 24.8 13.6 40L249.6 928l249.6-137.6c7.2-3.2 14.4-4.8 21.6-5.6z"
                  fill=""
                ></path>
              </g>
            </svg>

            <span class="ml-2">Favourite</span>
          </a>
        </div>
      </div>
    </div>
    <CastView :casts="cast" />
    <ImageView :images="images" @Image-click="showImageModal"/>
    <mediaModel :value="modalVisible" :mediaURL="mediaURL" @input="closeModal()" :isVideo="modalVisible"/>
  </div>
</template>
<script>
import { getMovie } from "../../services/api.service.js";
export default {
  components: {},
  // mounted() {
  //   this.getMovie(this.$route.params.id);
  // },
  data() {
    return {
      movie: {
        credits: {
          cast: {},
        },
        images: {
          backdrops: {},
        },
        videos: {
          results: [
            {
              key: "",
            },
          ],
        },
      },
      modalVisible: false,
      isVideo:false,
      mediaURL: "",
    };
  },
  watch:{
    "$route.params.id": {
      handler(){
        this.getMovie(this.$route.params.id);
      },
      immediate:true,
    },
  },
  methods: {
    async getMovie(movieId) {
      const params = {
        append_to_response: "credits,videos,images",
      };
      try {
        const response = await getMovie(movieId, params);
        this.movie = response.data;
        //console.log("response", response.data);
        //console.log('hi',this.movie.credits.cast);
        //console.log('hi',this.movie.images.backdrops);
        //console.log("hi", this.movie.videos.results[0].key);
        this.cast = this.movie.credits.cast;
        this.images = this.movie.images.backdrops;
        this.crew = this.movie.credits.crew;
        this.resuls = this.movie.videos.results[0].key;
        //console.log('hi', this.modalVisible);
      } catch (error) {
        console.log(error);
      }
    },
    openModal(){
      this.mediaURL= this.youtubeVideo();
      this.modalVisible=true;
      this.isVideo=true;
      console.log('hi',this.mediaURL);
    },
    openImage(){
      this.modalVisible=false;
      this.isVideo=false;
      
    },
    closeModal(){
      this.modalVisible=false;
      this.isVideo=false;
    },
    showImageModal(imageFullPath){
      this.mediaURL= imageFullPath;
      this.modalVisible=true;
      this.isVideo=false;
      //console.log('hi',imageFullPath);
    },
    youtubeVideo() {
      if (!this.movie.videos) return;
      return (
        "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
      );
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
    
  },
  
};
</script>
