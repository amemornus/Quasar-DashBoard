<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="
      background-color: #537895;
      background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
    "
  >
    <div class="q-pa-md">
      <div class="">
        <q-card
          square
          bordered
          flat
          class="shadow-24"
          style="width: 300px; height: 485px"
        >
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md text-center">LogIn</h4>
            <!-- <div
              class="absolute-bottom-right q-pr-md"
              style="transform: translateY(50%)"
            >
              <q-btn fab icon="add" color="purple-4" />
            </div> -->
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input
                square
                clearable
                v-model="email"
                type="email"
                label="Email"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="password"
                type="password"
                label="Password"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pa-md q-gutter-md">
              <q-btn round color="indigo-7">
                <q-icon name="fab fa-facebook-f" size="1.2rem" />
              </q-btn>
              <q-btn round color="red-8">
                <q-icon name="fab fa-google-plus-g" size="1.2rem" />
              </q-btn>
              <q-btn round color="light-blue-5">
                <q-icon name="fab fa-twitter" size="1.2rem" />
              </q-btn>
            </div>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <!-- <div class="row justify-evenly q-pa-md"> -->
            <div class="col q-gutter-sm">
              <q-btn
                unelevated
                dense
                size="lg"
                color="purple-4"
                class="full-width text-white"
                label="Sign In"
                to="/dashboard"
              />
            </div>
            <div class="col q-gutter-sm">
              <q-btn
                unelevated
                dense
                size="lg"
                color="pink-4"
                class="full-width text-white"
                label="Register"
                to="/register"
              />
            </div>
            <!-- </div> -->
          </q-card-actions>
          <q-card-section class="text-center">
            <p class="text-grey-6">Forgot your password?</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "LogInPage",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
};
</script>

<style scoped></style>
