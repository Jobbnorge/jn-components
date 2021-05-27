<template>
  <li
    class="grid-wrapper"
    v-bind:class="{ borderBetween: borderBetweenElements, grow: navigable }"
    @click="navigable ? navigate() : null "
  >
    <slot name="left-side">
      <span v-if="faClass" :class="['fal', faClass]"></span>
    </slot>
    <div>
      <p v-if="secondaryText" class="secondary-text">{{secondaryText}}</p>
      <p class="title">{{title}}</p>
    </div>
    <div v-if="navigable">
        <span v-if="isExternal" class="center icon fas fa-external-link"></span>
        <span v-else class="center icon fas fa-chevron-right" ></span>
    </div>
    <div v-if="!navigable">
      <slot name="right-side"></slot>
    </div>
  </li>
</template>

<script>

export default {
  name: "JnList",
  props: {
    faClass: {
      type: String,
      default: ""
    },
    title: String,
    secondaryText: String,
    /** Viser enten ekstern eller intern ikon for navigering*/
    isExternal: Boolean,
    url: String,
    /**
     * Streker vises mellom elementene
     */
    borderBetweenElements: Boolean,
    /**
     * Viser at elementer kan klikkes på og viser navigeringsikon (ekstern eller intern)
     */
    navigable: Boolean,
  },
  methods: {
    navigate() {
      window.location.href = this.url;
    },
  },
};
</script>

<style scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  align-items: center;
  color: #44303c;
  padding: 5px 0 5px 0;
  column-gap: 0.5rem;
}
.icon {
  margin-left: 0.5rem;
}
.title {
  margin-bottom: 0.5rem;
}
.secondary-text {
  color: #127dac;
  font-size: 0.75rem;
  margin: 0.5rem 0 0.25rem 0;
}
.borderBetween {
  border-bottom: 1px solid rgba(68, 48, 60, 0.3);
}
.grow {
  transition: all 0.2s ease-in;
  cursor: pointer;
}
.grow:hover {
  transform: scale(1.03);
}
a:link {
  color: #44303c;
  text-decoration: none;
}
a:visited {
  color: #44303c;
}
a:hover {
  color: #44303c;
}
a:active {
  color: #44303c;
}
.center {
  justify-self: center;
}
.svg-inline--fa {
  width: 1.33333em;
  height: 1.33333em;
  display: inline-block;
}
</style>