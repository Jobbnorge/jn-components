<template>
  <div style="display: flex; font-size: 1em">
    <h1>Flagg</h1>
    <ApplicationFlag flagName="isQualified" isClickable />
    <ApplicationFlag flagName="isNotQualified" />
    <ApplicationFlag flagName="isCalledForInterview" />
    <ApplicationFlag flagName="setPriority" />
    <ApplicationFlag flagName="hasReferenceCheck" />
    <ApplicationFlag flagName="isHired" />
    <ApplicationFlag flagName="isRejected" />
  </div>
</template>
<script>
import ApplicationFlag from "../ui_components/misc/ApplicationFlag"
export default {
  components: {
    ApplicationFlag
  }
}
</script>