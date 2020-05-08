<i18n>
{
  "en": {
    "modal": {
      "modalTitle": "Fancy english stuff"
    },
    "hello": "hello world!",
    "fluff": "in english"
  },
  "ja": {
    "modal": {
      "modalTitle": "Fancy japanese stuff"
    },
    "hello": "こんにちは、世界！",
    "fluff": "in japanese"
  }
}
</i18n>

<template>
    <div>
      <label for="locale">locale</label>
      <select v-model="locale">
        <option>en</option>
        <option>ja</option>
      </select>
      <p>message: {{ $t('hello') }}</p>
    </div>
</template>

<script>
export default {
    name: "LocaleDemo",
    data() {
    this.$root.$i18n.locale = "en";
    return {
      locale: "en"
    };
  },
  watch: {
    locale(val) {
      this.$root.$i18n.locale = val;
    }
  }
};
</script>