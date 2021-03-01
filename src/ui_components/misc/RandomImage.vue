<template>
  <ImageCircle :src="imageSrc" :size="size"></ImageCircle>
</template>

<script>
import ImageCircle from "./ImageCircle"
export default {
  components: {
    ImageCircle
  },
  props: {
    images: Array,
    size: Number 
  },
  computed: {
    imageSrc: function() {
      let img = Math.floor(Math.random() * (this.images.length-1)) + 1
      return this.images[img]; 
    }
  }
}
</script>