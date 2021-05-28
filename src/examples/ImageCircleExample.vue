<template>
  <div>
    <ImageCircle
      src="https://jobbnorgewpstorage.blob.core.windows.net/blobs/2019/02/0N7A3590-5c65207ad7f13.jpg"
      :size="100"
    ></ImageCircle>
    <ImageCircle
      src="https://jobbnorgewpstorage.blob.core.windows.net/blobs/2019/02/0N7A3590-5c65207ad7f13.jpg"
      :size="120"
    ></ImageCircle>
    <div>
      <p>Jeg er et <code>RandomImage</code> som fungerer som en slags karusell hver gang jeg rendres fordi jeg tar imot en array av bilde sources</p>
      <RandomImage :images="images" :size="150" />
    </div>

  </div>
</template>

<script>
import ImageCircle from "../ui_components/misc/ImageCircle";
import RandomImage from "../ui_components/misc/RandomImage";

export default {
  components: {
    ImageCircle,
    RandomImage,
  },
  data() {
    return {
      images: [
        "https://jobbnorgewpstorage.blob.core.windows.net/blobs/2019/02/0N7A3590-5c65207ad7f13.jpg",
        "https://jobbnorgewpstorage.blob.core.windows.net/blobs/2019/02/0N7A2913.jpg",
        "https://www.jobbnorge.no/about/wp-content/uploads/2018/11/Jan_280x280.jpg",
        "https://www.jobbnorge.no/about/wp-content/uploads/2018/12/Hanne_280x280.jpg",
        "https://www.jobbnorge.no/about/wp-content/uploads/2018/12/Kathrine_280x280.jpg",
        "https://jobbnorgewpstorage.blob.core.windows.net/blobs/2019/02/0N7A1303.jpg",
      ],
    };
  },
};
</script>
