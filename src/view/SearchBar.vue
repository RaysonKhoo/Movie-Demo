<template>
  <div class="mt-5 flex relative">
    <div class="relative">
      <input
        ref="searchBox"
        type="text"
        class="rounded-full bg-gray-600 px-5 w-50 h-10 mr-3 focus:outline-none focus:outline-shadow"
        placeholder="Search.."
        @input="debounceSearch"
        v-model="searchAnswer"
        @focus="handleFocus"
      />

      <i
        class="fas fa-search absolute right-6 top-3 text-white"
        style="color: white"
      ></i>
    </div>
    <div
      class="absolute mt-12 ml-3 pl-1 rounded bg-gray-600 w-60 z-50"
      style="width: 200px"
    >
      <ul class="mt-2 pb-1" v-if="showSearchResults">
        <li :key="index" v-for="(movie, index) in searchResult">
          <router-link
            :to="`/MoviePage/${movie.id}`"
            @click="showSearchResults = false"
            class="flex items-center border-b border-gray-500 p-1"
          >
            <img :src="posterPath(movie.poster_path)" alt="" class="w-10" />
            <span class="pl-2">{{ movie.title }}</span>
          </router-link>
        </li>
      </ul>
      <ul class="px-3" v-if="searchResult.length == 0 && searchAnswer">
        <li >No results found for {{ searchAnswer }}</li>
      </ul>
    </div>
    <AccountDropdown/>
  </div>
</template>
<script>
import { fetchSearch } from "@/services/api.service";
export default {
  data() {
    return {
      searchResult: [],
      searchAnswer: "",
      showSearchResults: false,
      id: "",
    };
  },
  mounted() {
    this.KeyboardEvent();
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.fetchSearch(event.target.value);
      }, 100);
    },
    
    async fetchSearch(term) {
      try {
        const response = await fetchSearch(term);
        this.searchResult = response.data.results;
        this.showSearchResults = response.data.results ? true : false;
        this.id = response.data.results;
        //console.log("hi", this.searchResult);
        console.log("hi", this.id);
      } catch (error) {
        console.log(error);
      }
    },
    handleFocus() {
      if (this.searchAnswer != "") {
        this.showSearchResults = true;
      }
    },
    posterPath(poster_path) {
      if (poster_path) {
        return "https://image.tmdb.org/t/p/w500/" + poster_path;
      } else {
        return "https://via.placeholder.com/50 x 75";
      }
    },

    KeyboardEvent() {
      let windowObj = this;
      window.addEventListener("click", (e) => {
        if (!this.$el.contains(e.target)) {
          this.showSearchResults = false;
        }
      });
      window.addEventListener("keypress", (e) => {
        if (e.keycode == "47") {
          e.preventDefault();
          windowObj.$refs.searchBox.focus();
        }
      });

      window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          this.showSearchResults = false;
        }
      });
    },
  },
};
</script>
<style></style>
