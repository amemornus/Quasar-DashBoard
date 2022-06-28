<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-white" bordered>
      <q-toolbar
        style="
          background-color: #537895;
          background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
        "
      >
        <q-btn
          v-if="$q.platform.is.desktop"
          @click="drawer = !drawer"
          round
          icon="menu"
        >
          <q-tooltip>Menu</q-tooltip>
        </q-btn>
        <q-avatar v-if="$q.platform.is.mobile" class="q-ma-sm">
          <img src="../assets/face-7.jpg" />
          <q-tooltip>User</q-tooltip>
        </q-avatar>
        <q-space />
        <q-input
          bg-color="white"
          outlined
          rounded
          dense
          borderless
          v-model="text"
          input-class="text-left"
          class="q-ml-md"
          label="Search..."
        >
          <template v-slot:prepend>
            <q-icon name="search" color="black" />
          </template>
        </q-input>
        <q-space v-if="$q.platform.is.desktop" />
        <q-separator vertical />
        <!-- <q-space v-if="$q.platform.is.desktop" /> -->
        <q-btn
          v-if="$q.platform.is.desktop"
          dense
          outline
          flat
          class="q-mx-lg"
          icon="fas fa-language"
          style="color: white"
        >
          <q-tooltip>Language</q-tooltip>
        </q-btn>
        <q-separator vertical />
        <!-- <q-btn dense outline flat icon="far fa-bell" class="q-mx-lg">
          <q-bage color="green" floating transparent>4</q-bage>
        </q-btn> -->
        <q-btn round dense flat color="white" icon="notifications">
          <q-badge color="red" text-color="white" floating> 2 </q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
        <q-separator vertical />
        <q-avatar v-if="$q.platform.is.desktop" class="q-ma-sm">
          <img src="../assets/face-7.jpg" />
          <q-tooltip>User</q-tooltip>
        </q-avatar>
        <q-separator vertical />
        <!--  -->
        <q-btn-dropdown
          class="q-pa-sm"
          outline
          flat
          dense
          label=""
          dropdown-icon="change_history"
        >
          <q-tooltip>More</q-tooltip>
          <q-list>
            <q-item clickable dense v-close-popup @click="onItemClick">
              <q-item-section avatar clickable v-ripple>
                <q-icon name="fas fa-user fa-microphone-alt" color="grey-5" />
              </q-item-section>
              <q-item-section>
                <q-item-label>profiles</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable dense v-close-popup @click="onItemClick">
              <q-item-section avatar clickable v-ripple>
                <q-icon name="fas fa-gear" color="grey-5" />
              </q-item-section>
              <q-item-section>
                <q-item-label>settings</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable dense v-close-popup @click="onItemClick">
              <q-item-section avatar clickable v-ripple>
                <q-icon name="fas fa-ellipsis-h" color="grey-5" />
              </q-item-section>
              <q-item-section>
                <q-item-label>more</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable dense v-close-popup @click="onItemClick">
              <q-item-section avatar clickable v-ripple>
                <q-icon name="fas fa-sign-out" color="grey-5" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Sign Out</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <!-- FOOTER -->
    <q-footer
      bordered
      class="text-white"
      style="
        background-color: #537895;
        background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
      "
    >
      <div class="row q-col-gutter-md">
        <div class="col-4">
          <q-btn
            v-if="$q.platform.is.mobile"
            outline
            @click="drawer = !drawer"
            class="q-mx-xl"
            icon="menu"
            style="color: white"
          >
            <q-tooltip>Language</q-tooltip>
          </q-btn>
        </div>
        <div class="col-4">
          <q-btn
            v-if="$q.platform.is.mobile"
            outline
            class="q-mx-lg"
            icon="fas fa-language"
            style="color: white"
          >
            <q-tooltip>Language</q-tooltip>
          </q-btn>
        </div>
        <!-- <q-separator vertical /> -->
        <!-- <q-separator vertical /> -->
        <div class="col-4">
          <q-btn
            v-if="$q.platform.is.mobile"
            outline
            class="q-mx-lg"
            icon="home"
            style="color: white"
            @click="link = 'Dashboard'"
            to="/dashboard"
          >
            <q-tooltip>Home</q-tooltip>
          </q-btn>
        </div>
      </div>
    </q-footer>
    <!-- FOOTEREND -->
    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      bordered
      style="
        background-color: #537895;
        background-image: linear-gradient(315deg, #537895 0%, #09203f 74%);
      "
    >
      <q-scroll-area class="fit">
        <!-- <div class="q-mt-md q-ml-md">
          <q-btn dense flat round icon="lens" size="8.5px" color="red" />
          <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
          <q-btn dense flat round icon="lens" size="8.5px" color="green" />
        </div> -->
        <q-list padding text-white>
          <div class="text-center q-py-md">
            <!-- <q-btn
              color="light-blue-8"
              icon="fas fa-cloud-upload-alt"
              label="Upload"
              class="q-px-lg"
            ></q-btn> -->
            <div>
              <q-avatar class="q-mb-sm">
                <img src="../assets/face-7.jpg" alt="profile" />
              </q-avatar>
            </div>
            <span>
              <q-icon name="fa fa-lock" color="white"></q-icon>

              <span class="q-pl-sm" style="color: white">Steve</span>
            </span>
            <!--  -->

            <!--  -->
          </div>
          <q-separator color="light-white-8" />
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'My page'"
            @click="link = 'My page'"
            to="/chat"
          >
            <q-item-section avatar clickable v-ripple>
              <!-- <q-icon name="fas fa-book" /> -->
              <q-icon name="fas fa-microphone-alt" color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: white">Record</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Dashboard'"
            @click="link = 'Dashboard'"
            to="/dashboard"
          >
            <q-item-section avatar clickable v-ripple>
              <q-icon name="fas fa-tachometer-alt" color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: white">Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Edit Page'"
            @click="link = 'Edit Page'"
            to="/table"
          >
            <q-item-section avatar clickable v-ripple>
              <q-icon name="fas fa-pencil-alt" color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: white">Edit Page</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Chat'"
            @click="link = 'Chat'"
            to=""
          >
            <q-item-section avatar clickable v-ripple>
              <q-icon name="fas fa-comments" color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: white">Chat Page</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Community'"
            @click="link = 'Community'"
          >
            <q-item-section avatar clickable v-ripple>
              <q-icon name="fas fa-satellite-dish" color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: white">Community</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Settings'"
            @click="link = 'Settings'"
          >
            <q-item-section avatar clickable v-ripple>
              <q-icon name="fas fa-cog" color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: white">Settings</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            clickable
            active-class="my-menu-link"
            v-ripple
            :active="link === 'Creators'"
            @click="link = 'Creators'"
          >
            <q-item-section avatar clickable v-ripple>
              <q-icon name="fas fa-user" color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color: white">Creators</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
        -->
      <!-- <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div> -->
      <div
        class="q-py-md"
        style="position: absolute; bottom: 0; margin-left: 50px"
      >
        <q-btn text-color="white" label="Logout" class="q-px-lg" outline />
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
// import EssentialLink from "components/EssentialLink.vue";
// import SideBar from "components/SideBar.vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      link: "My page",
      text: "",
    };
  },

  components: {
    // EssentialLink,
    // SideBar,
  },

  setup() {
    const miniState = ref(false);
    return {
      onItemClick() {
        // console.log('Clicked on an Item')
      },
      miniState,
      drawer: ref(true),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
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
});
</script>
<style scope>
.my-menu-link {
  border-left: 4px solid #2698d6;
}
</style>
