<template>
  <div
    class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto z-50"
    style="background-color: rgba(0, 0, 0, 0.5)"
    tabindex="0"
    v-if="showModal"
  >
    <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
      <div class="bg-gray-900 rounded">
        <div class="flex justify-end pr-4 pt-2">
          <button
            @click="close"
            class="text-3xl leading-none hover:text-gray-300"
          >
            &times;
          </button>
        </div>
        <div class="modal-body px-8 py-8">
          <div
            class="responsive-container overflow-hidden relative"
            :style="isVideo ? { 'padding-top': '56.25%' } : {}"
          >
            <img :src="mediaURL" v-if="!isVideo" />
            <iframe
              v-if="isVideo"
              :src="mediaURL"
              class="responsive-iframe absolute top-0 left-0 w-full h-full"
              style="border: 0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "imageView",
  props: {
    value: {
      required: true,
    },
    mediaURL: {
      required: true,
    },
    isVideo: {
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    close() {
      this.showModal = false;
      this.$emit("input", !this.value);
      console.log("hi", this.showModal);
    },
  },
  watch: {
    value(val) {
      if (val === true) {
        this.showModal = true;
      }
    },
  },
};
</script>
