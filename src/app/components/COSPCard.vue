<template>
  <div id="cosp__container" class="shadow-lg rounded-lg">
    <b-container>
      <b-row id="myContribution__container">
        <b-col>
          <p class="font-weight-bold text-white text-center my-auto py-2">My contribution</p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-v="center">
        <b-col class="text-center pb-3 pt-5">
          <h3 class="font-weight-bold">56 Trees</h3>
          <p>per month</p>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col class="text-center">
          <p class="font-weight-light my-auto py-3"><small>*this is an approximate</small></p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  name: 'COSPCard'
}
</script>

<style lang="scss">
  @import '../assets/variables.scss';

  #cosp__container {
    width: 400px;
    max-width: 400px;
    background-color: white;
  }

  #myContribution__container {
    background-color: $success;
  }
</style>