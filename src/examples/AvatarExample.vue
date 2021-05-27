<template>
  <div>
    <div>
      <h4>Helt vanlig avatar</h4>
      <Avatar firstName="Marit-Iren Renate" lastName="Larsen" :id="2" />
    </div>
    <div class="mini">
      <h4>Mini avatar -bare å endre fontstørrelse</h4>
      <Avatar firstName="Kåre" lastName="Jensen" color="green" />
      <Avatar fullName="Jens Jensen" color="blue" />
    </div>
    <div>
      <h4>Anonymized Avatar</h4>
      <Avatar firstName="John" lastName="Doe" color="blue" anonymized />
    </div>
  </div>
</template>
<script>
import Avatar from "../ui_components/misc/Avatar";
export default {
  name: "AvatarExample",
  components: {
    Avatar,
  },
};
</script>
<style scoped>
.super-avatar {
  margin-top: 2rem;
}
.mini {
  font-size: 0.6rem;
}
.user {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin-bottom: 0.5rem;
}
.user > span {
  margin-left: 0.5rem;
  font-size: 1rem;
}
</style>
