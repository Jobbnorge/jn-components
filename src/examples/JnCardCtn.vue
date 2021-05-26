<template>
  <div>
    <div style="width:350px;">
      <JnCard
        @buttonClick="jnCardButtonClicked"
        title="To" 
        subtitle="Kortet viser ikke tittel fordi den ikke tilfredstiller kriteriene"
        :contentPlaceholder="cardOpt.contentPlaceholder"
      >
        <template #description>
          <p>I'm a description text coming from a different context. Ain't that cool or what?</p>
        </template>
        <template #button>
          <button class="btn btn-primary" type="button" @click="anotherHandler">I'm from bootstrap</button>
        </template>
      </JnCard>
      <JnCard
        title="Sist sette stillinger"
      >
      <template #description>
        Finner ingen nylig sette stillinger
      </template>
      <template #content>
        <EmptyStateSVG />
      </template>
        <template #button>
         <JnTextButton>Gå til stillinger</JnTextButton>
        </template>
      </JnCard>
    </div>
    <div class="wrapper">
      <JnCard
        title="Uten box-shadow"
        flat 
      >
      <template #description>
        Kan man lage andre typer kort
      </template>
      <template #content>
        <p>Her er noe innhold</p>
      </template>
        <template #button>
         <JnTextButton>Bare se her</JnTextButton>
        </template>
      </JnCard>
      <JnCard
        :title="cardOpt.title"
        :subtitle="cardOpt.subtitle"
        v-for="num in [1,2,3,4,5]"
        :key="num"
        @buttonClick="jnCardButtonClicked"
      >
        <template #content>
          <div>
            <div style="height:100px; border:1px solid grey"></div>
            <div style="height:100px; border:1px solid grey"></div>
            <div style="height:100px; border:1px solid grey"></div>
            <div style="height:100px; border:1px solid grey"></div>
          </div>
        </template>
        <template #button>
          <JnTextButton>Handling</JnTextButton>
        </template>
      </JnCard>
    </div>
  </div>
</template>

<script>
import JnCard from "./../ui_components/cards/JnCard"
import ContentPlaceholder from "./../ui_components/models/ContentPlaceholder"
import JnTextButton from "./../ui_components/buttons/JnTextButton"
import EmptyStateSVG from "./../mock_data/EmptyStateSVG"

export default {
  name: "JnCardCtn",
  components: {
    JnCard,
    JnTextButton,
    EmptyStateSVG

  },
  data: function() {
    return {
      cardOpt: {
        title: "Lorem ipsum dolor",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ex?",
        contentPlaceholder: new ContentPlaceholder(
          "hamperokken.jpg",
          "hamperokken alt text"
        )
      }
    };
  },
  methods: {
    jnCardButtonClicked(event) {
      console.info(event);
    },
    anotherHandler(e){
      console.info(e)
    }
  }
};
</script>

<style scoped>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }
</style>