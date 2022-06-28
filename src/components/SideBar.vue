<template>
  <!-- <div class="q-pa-md"> -->
  <nav>
    <q-drawer
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <div class="q-mt-md q-ml-md">
          <q-btn dense flat round icon="lens" size="8.5px" color="red" />
          <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
          <q-btn dense flat round icon="lens" size="8.5px" color="green" />
        </div>
        <q-list>
          <div class="text-center q-py-md">
            <q-btn
              color="light-blue-8"
              icon="fas fa-cloud-upload-alt"
              label="Upload"
              class="q-px-lg"
            ></q-btn>
          </div>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'My page'"
            @click="link = 'My page'"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-book" />
            </q-item-section>
            <q-item-section>
              <q-item-label>My page</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Dashboard'"
            @click="link = 'Dashboard'"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-tachometer-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Edit Page'"
            @click="link = 'Edit Page'"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-pencil-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Edit Page</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Chat'"
            @click="link = 'Chat'"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-comments" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Chat Page</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Community'"
            @click="link = 'Community'"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-satellite-dish" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Community</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Settings'"
            @click="link = 'Settings'"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-cog" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Settings</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Creators'"
            @click="link = 'Creators'"
          >
            <q-item-section avatar>
              <q-icon name="fas fa-user" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Creators</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
        -->
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>
  </nav>
  <!-- </div> -->
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const miniState = ref(false);

    return {
      drawer: ref(false),
      miniState,

      drawerClick(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false;

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation();
        }
      },
    };
  },
};
</script>
