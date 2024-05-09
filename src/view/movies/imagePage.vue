<template>
  <div class="container mx-auto border-b border-gray-600 px-4 py-4">
    <h2 class="text-4xl font-semibold mb-5">Images</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="mr-2 mt-2" :key="index" v-for="(image, index) in images">
        <img
          @click="openImage(image)"
          :src="MovieImage(image)"
          alt=""
          class="hover:opacity-75 tansition easy-in-out duration-200"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "imageView",
  props: {
    images: {
      require:true,
    },
  },
  methods: {
    MovieImage(image) {
      //console.log('hi1',image.file_path);
      if (image.file_path) {
        return "https://image.tmdb.org/t/p/w300/" + image.file_path;
      } else {
        return "https://via.placeholder.com/300 x 450";
      }
    },
    openImage(image){
      let imageFullPath=""
      //console.log('hi', image.file_path);
      if(image.file_path)
      {
        imageFullPath = "https://image.tmdb.org/t/p/original/" + image.file_path;
      }
      else{
        imageFullPath = "https://via.placeholder.com/300 x 450";
      }
      this.$emit('Image-click', imageFullPath);
    }
  },
};
</script>
