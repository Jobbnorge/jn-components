<template>
  <div class="message-grid">
    <section class="message-details" v-bind:class="{end: isLoggedInUser}">
      <span>{{details}}</span>
      <JnBadge v-if="showBadge" colorClass="pink">Ny</JnBadge>
    </section>
    <div class="message-container" v-bind:class="{right: isLoggedInUser}">
      <Avatar v-if="!isLoggedInUser" :fullName="author" :id="authorId"></Avatar>
      <div class="message" v-bind:class="{senderBg: isLoggedInUser}">
        <slot name="message-body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
import JnBadge from "./JnBadge";
export default {
  name: "JnUserMessage",
  components: {
    Avatar,
    JnBadge,
  },
  props: {
    /** Viser badge for denne meldingen*/
    showBadge: {
      type: Boolean,
      default: false,
    },
    /** Toggler noen CSS-klasser slik at brukerens egne meldinger vises forskjellig fra de andres*/
    isLoggedInUser: {
      type: Boolean,
      default: false,
    },
    sent: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "Jobbadmin Bruker",
    },
    authorId: {
      type: Number,
      default: null,
    },
  },
  computed: {
    details: (vm) => {
      if (vm.isLoggedInUser) {
        return `${vm.sent}`;
      } else {
        return `${vm.author} - ${vm.sent}`;
      }
    },
  },
};
</script>
<style scoped>
.message-grid {
  display: grid;
  margin-bottom: 1rem;
}
.message-container {
  display: grid;
  grid-template-columns: auto 1fr;
}
.message-container:first-child {
  display: flex;
}
.message-details {
  display: flex;
  align-items: baseline;
  font-size: 0.8rem;
  font-weight: 500;
}
.message-details span {
  margin-right: 0.5rem;
}
.message {
  background: #f6f5f6;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.5rem;
  width: fit-content;
}
.message:empty {
  display: none;
}
.senderBg {
  background: #e8f5fa;
}
.end {
  justify-self: end;
}
.right {
  grid-template-columns: 1fr;
  justify-items: end;
}
@media only screen and (max-width: 800px) {
  .message-grid {
    max-width: 100%;
  }
}
</style>