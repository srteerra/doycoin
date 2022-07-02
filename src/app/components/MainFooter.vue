<template>
  <footer class="py-5">
    <b-container class="py-5">
      <b-row class="p-0">
        <b-col
          cols="12"
          md="6"
          lg="3"
          class="d-flex justify-content-center justify-content-lg-start text-center text-lg-left"
        >
          <ul class="text-dark p-0">
            <li class="py-2 font-weight-bold">
              Explore
            </li>
            <li class="py-2">
              <router-link to="/">
                Home
              </router-link>
            </li>
            <li class="py-2">
              <router-link to="/about">
                About us
              </router-link>
            </li>
            <li class="py-2">
              <router-link to="/how">
                How it works?
              </router-link>
            </li>
            <li class="py-2">
              <router-link to="/contact">
                Contact us
              </router-link>
            </li>
          </ul>
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="3"
          class="d-flex justify-content-center justify-content-lg-start text-center text-lg-left"
        >
          <ul class="text-dark p-0">
            <li class="py-2 font-weight-bold">
              Others
            </li>
            <li class="py-2">
              <router-link to="/">
                Q&A
              </router-link>
            </li>
            <li class="py-2">
              <router-link to="/about">
                Credits
              </router-link>
            </li>
            <li class="py-2">
              <router-link to="/how">
                Terms and conditions
              </router-link>
            </li>
          </ul>
        </b-col>
        <b-col
          cols="10"
          md="12"
          lg="6"
          class="pt-5 pt-lg-0 mx-auto"
        >
          <b-row
            class="d-flex justify-content-center justify-content-lg-end text-center text-lg-left px-3 px-md-0"
          >
            <ul class="text-dark p-0">
              <li class="py-2 font-weight-bold">
                Receive news and giveaways
              </li>
              <li class="py-2">
                <div>
                  <b-form
                    inline
                    class="d-flex justify-content-center"
                  >
                    <label
                      class="sr-only"
                      for="inline-form-input-username"
                    >Username</label>
                    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                      <b-form-input
                        id="inline-form-input-username"
                        class="rounded-pill px-4"
                        size="md"
                        placeholder="Enter your email..."
                      />
                    </b-input-group>
                    <b-button
                      pill
                      variant="dark"
                      class="px-4 mt-3 mt-sm-0"
                    >
                      Subscribe
                    </b-button>
                  </b-form>
                </div>
              </li>
            </ul>
          </b-row>
          <b-row
            class="d-flex justify-content-center justify-content-lg-end py-5"
          >
            <img
              id="principal-logo"
              src="../assets/logos/horizontal-black.png"
              alt=""
              srcset=""
            >
            <img
              id="secundary-logo"
              src="../assets/logos/icon-black.png"
              alt=""
              srcset=""
            >
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
	name: 'MainFooter',
	data() {
		return {}
	}
}
</script>

<style lang="scss">
@import '../assets/variables.scss';

footer {
  background-color: $secondary;
}
</style>
