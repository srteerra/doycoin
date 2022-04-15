<template>
  <div id="cosp__container" class="shadow-lg">
    <b-container>
      <b-row id="myContribution__container">
        <b-col>
          <p class="font-weight-bold text-white text-center my-auto py-2">My contribution</p>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-v="center">
        <b-col class="text-center pb-2 pt-5">
          <p class="p-0"><small>I've already planted</small></p>
          <h3 class="font-weight-bold">210 Trees</h3>
          <hr>
          <p><small>I'm planting</small></p>
          <p><span class="font-weight-bold">56 trees</span> per month</p>
        </b-col>
      </b-row>
      <b-row align-v="center">
        <b-col class="text-center">
          <p class="font-weight-light my-auto pb-3"><small>*this is an approximate<span><router-link to="/cosp" class="px-1"><b-icon-question-circle></b-icon-question-circle></router-link></span></small></p>
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
    border-radius: 30px;
    background-color: white;
  }

  #myContribution__container {
    background-color: $success;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
  }
</style>