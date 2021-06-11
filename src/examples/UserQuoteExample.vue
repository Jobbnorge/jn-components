<template>
  <div>
    <UserQuote
      :note="text1"
      :author="author1"
      toggleShowLessText="Vis mindre"
      toggleShowMoreText="Vis mer"
      :maxLength="200"
    />
    <UserQuote :note="text2" toggleShowLessText="Vis mindre" toggleShowMoreText="Vis mer" :maxLength="200" />
  </div>
</template>
<script>
import UserQuote from "../ui_components/containers/UserQuote"
export default {
  component: {
    UserQuote
  },
  data() {
    return {
      author1: "Per Persen",
      text1:
        "Jeg syns dette er den type kandidat vi ser etter. Det er ikke ofte at vår bransje snubler over et talent som vi har blitt vist her. Det vil være dumt å la sjansen gå forbi, selv om vi må påregne å bruke noe mere tid i en startfase. Knakende bra levert på intervju, det må jeg virkelig få understreke altså",
      text2: "Denne er vesentlig kortere og har heller ikke forfatter",
    };
  },
};
</script>
