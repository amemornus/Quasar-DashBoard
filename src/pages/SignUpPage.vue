<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="
      background-color: #537895;
      background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
    "
  >
    <!-- <div class="column q-pa-lg"> -->
    <div class="row">
      <q-card
        square
        bordered
        class="shadow-24"
        style="width: 300px; height: 485px"
      >
        <q-card-section class="bg-deep-purple-7">
          <h4 class="text-h5 text-white q-my-md text-center">Registration</h4>
          <!-- <div
              class="absolute-bottom-right q-pr-md"
              style="transform: translateY(50%)"
            >
              <q-btn fab icon="close" color="purple-4" />
            </div> -->
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl q-pb-lg">
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
              v-model="username"
              type="username"
              label="Username"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
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
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            dense
            size="lg"
            color="purple-4"
            class="full-width text-white"
            label="Submite"
            to="/login"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <q-side-link clickable to="/login">Return to login</q-side-link>
          <!-- <p class="text-grey-6">Return to login</p> -->
        </q-card-section>
      </q-card>
    </div>
    <!-- </div> -->
  </q-page>
</template>

<script>
export default {
  name: "SignUpPage",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
};
</script>

<style></style>
