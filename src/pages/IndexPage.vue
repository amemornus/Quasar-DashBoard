<template>
  <q-page
    style="
      background-color: #bdd4e7;
      background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
    "
  >
    <div class="q-pa-md">
      <div v-if="$q.platform.is.desktop" class="row q-col-gutter-md">
        <div class="col-3">
          <q-card class="my-card" style="background-color: #09203f">
            <q-item>
              <q-item-section>
                <div class="text-h4 text-center" style="color: white">
                  <strong class="text-h4">ICDL</strong>
                </div>
                <q-item-label class="text-center" style="color: white" caption
                  >Active</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-separator color="white" />
            <q-item>
              <q-item-section>
                <div class="text-h3 text-center" style="color: white">
                  <strong>50K</strong>
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="my-card" style="background-color: #09203f">
            <q-item>
              <q-item-section>
                <div class="text-h4 text-center" style="color: white">
                  <strong class="text-h4">CSD</strong>
                </div>
                <q-item-label class="text-center" style="color: white" caption
                  >Active</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-separator color="white" />
            <q-item>
              <q-item-section>
                <div class="text-h3 text-center" style="color: white">
                  <strong>120K</strong>
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="my-card" style="background-color: #09203f">
            <q-item>
              <q-item-section>
                <div class="text-h4 text-center" style="color: white">
                  <strong class="text-h4">LabView</strong>
                </div>
                <q-item-label class="text-center" style="color: white" caption
                  >Active</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-separator color="white" />
            <q-item>
              <q-item-section>
                <div class="text-h3 text-center" style="color: white">
                  <strong>22K</strong>
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="my-card" style="background-color: #09203f">
            <q-item>
              <q-item-section>
                <div class="text-h4 text-center" style="color: white">
                  <strong class="text-h4">IOT</strong>
                </div>
                <q-item-label class="text-center" style="color: white" caption
                  >Active</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-separator color="white" />
            <q-item>
              <q-item-section>
                <div class="text-h3 text-center" style="color: white">
                  <strong>11K</strong>
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="row q-col-gutter-md">
          <div class="col-8">
            <q-toolbar>
              <q-toolbar-title class="text-overline"
                >ACTIVE PROJECTS</q-toolbar-title
              >
              <!-- <q-btn flat text-color="light-blue-8" label="Show All" /> -->
            </q-toolbar>
            <q-card class="my-card gt-sm">
              <!-- style="padding: 33px 0px 33px 0px; background-color: #09203f" -->
              <q-item>
                <q-item-section>
                  <q-item-label
                    ><div class="text-h3" style="color: white">
                      Performance Anaylisis
                    </div></q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item>
                <item-section class="">
                  <LineChart />
                </item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-4 q-pr-auto">
            <q-toolbar>
              <q-toolbar-title class="text-overline"
                >WORKS AVAILABLE</q-toolbar-title
              >
              <q-btn flat text-color="light-blue-8" label="Show All"></q-btn>
            </q-toolbar>
            <q-card
              class="my-card gt-md"
              style="max-width: 420px; height: 332px"
            >
              <q-item>
                <q-item-section>
                  <div style="align-items: center" class="">
                    <DoughnutChart />
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="row q-pa-md">
            <div class="col-8">
              <q-card class="my-card q-pa-sm">
                <!-- style="padding: 33px 0px 33px 0px; background-color: #09203f" -->
                <q-item>
                  <q-item-section>
                    <q-item-label
                      ><div class="text-h3" style="color: white">
                        Performance Anaylisis
                      </div></q-item-label
                    >
                  </q-item-section>
                </q-item>
                <q-item>
                  <item-section class="">
                    <BarChart />
                  </item-section>
                </q-item>
              </q-card>
            </div>
            <div class="col-4 q-pa-md">
              <q-card class="q-pl-md q-mt-sm">
                <q-item-section>
                  <q-item-lable>
                    <q-toolbar-title class="text-weight-bold color-primary">
                      Tweet
                    </q-toolbar-title>
                  </q-item-lable>
                </q-item-section>
                <q-list separator>
                  <q-item class="">
                    <q-item-section>
                      <q-item-label overline class="text-grey"
                        >Engineering</q-item-label
                      >
                      <q-item-label class="text-weight-bold"
                        >Ghana has lunch their first Space Rocket!</q-item-label
                      >
                      <q-item-label caption
                        >Secondary line text. Lorem ipsum dolor sit amet,
                        consectetur adipiscit elit.</q-item-label
                      >
                    </q-item-section>

                    <q-item-section side top>
                      <q-item-label caption>5 min ago</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="q-pa-md">
                    <q-item-section>
                      <q-item-label overline class="text-grey"
                        >Engineering</q-item-label
                      >
                      <q-item-label class="text-weight-bold"
                        >Ghana has lunch their first Space Rocket!</q-item-label
                      >
                      <q-item-label caption
                        >Secondary line text. Lorem ipsum dolor sit amet,
                        consectetur adipiscit elit.</q-item-label
                      >
                    </q-item-section>

                    <q-item-section side top>
                      <q-item-label caption>5 min ago</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item class="q-pa-md">
                    <q-item-section>
                      <q-item-label overline class="text-grey"
                        >Engineering</q-item-label
                      >
                      <q-item-label class="text-weight-bold"
                        >Ghana has lunch their first Space Rocket!</q-item-label
                      >
                      <q-item-label caption
                        >Secondary line text. Lorem ipsum dolor sit amet,
                        consectetur adipiscit elit.</q-item-label
                      >
                    </q-item-section>

                    <q-item-section side top>
                      <q-item-label caption>5 min ago</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>
            </div>
          </div>
          <q-toolbar>
            <q-toolbar-title><strong>my shots</strong></q-toolbar-title>
            <q-btn
              color="dark"
              icon-right="fas fa-chevron-down"
              label="Latest"
              flat
            ></q-btn>
          </q-toolbar>
        </div>
        <!-- image -->
        <div class="col-3">
          <q-card class="my-card">
            <q-img src="../assets/loginImg.jpg" alt="my photos">
              <div class="absolute-bottom">
                <div class="text-subtitle1">Merketing Landing page</div>
                <div class="text-subtitle2">03 August 2020</div>
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="my-card">
            <q-img src="../assets/face-1.jpg" alt="my photos">
              <div class="absolute-bottom">
                <div class="text-subtitle1">Community dashboard</div>
                <div class="text-subtitle2">03 August 2021</div>
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="my-card">
            <q-img src="../assets/face-3.jpg" alt="my photos">
              <div class="absolute-bottom">
                <div class="text-subtitle1">Movie Booking App</div>
                <div class="text-subtitle2">03 August 2019</div>
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-3">
          <q-card class="my-card">
            <q-img src="../assets/face-2.jpg" alt="my-photos">
              <div class="absolute-bottom">
                <div class="text-subtitle1">Pattern Grandients</div>
                <div class="text-subtitle2">03 August 2018</div>
              </div>
            </q-img>
          </q-card>
        </div>
        <!-- EndImage -->
      </div>
      <!--  -->

      <div v-if="$q.platform.is.mobile">
        <!-- sm -->
        <div class="row q-col-gutter-md">
          <div class="col-4">
            <q-card class="my-card" style="background-color: #09203f">
              <q-item>
                <q-item-section>
                  <div class="text-h6 text-center" style="color: white">
                    <strong class="text-h6">ICDL</strong>
                  </div>
                  <q-item-label class="text-center" style="color: white" caption
                    >Active</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator color="white" />
              <q-item>
                <q-item-section>
                  <div class="text-h6 text-center" style="color: white">
                    <strong>50K</strong>
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card" style="background-color: #09203f">
              <q-item>
                <q-item-section>
                  <div class="text-h5 text-center" style="color: white">
                    <strong class="text-h5">CSD</strong>
                  </div>
                  <q-item-label class="text-center" style="color: white" caption
                    >Active</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator color="white" />
              <q-item>
                <q-item-section>
                  <div class="text-h5 text-center" style="color: white">
                    <strong>120K</strong>
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card" style="background-color: #09203f">
              <q-item>
                <q-item-section>
                  <div class="text-h5 text-center" style="color: white">
                    <strong class="text-h5">CSD</strong>
                  </div>
                  <q-item-label class="text-center" style="color: white" caption
                    >Active</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator color="white" />
              <q-item>
                <q-item-section>
                  <div class="text-h5 text-center" style="color: white">
                    <strong>120K</strong>
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
        <div class="row q-col-gutter-md q-pt-sm">
          <div class="col-4">
            <q-card class="my-card" style="background-color: #09203f">
              <q-item>
                <q-item-section>
                  <div class="text-h5 text-center" style="color: white">
                    <strong class="text-h5">CSD</strong>
                  </div>
                  <q-item-label class="text-center" style="color: white" caption
                    >Active</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator color="white" />
              <q-item>
                <q-item-section>
                  <div class="text-h5 text-center" style="color: white">
                    <strong>120K</strong>
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card" style="background-color: #09203f">
              <q-item>
                <q-item-section>
                  <div class="text-h6 text-center" style="color: white">
                    <strong class="text-h6">Lab</strong>
                  </div>
                  <q-item-label class="text-center" style="color: white" caption
                    >Active</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator color="white" />
              <q-item>
                <q-item-section>
                  <div class="text-h5 text-center" style="color: white">
                    <strong>22K</strong>
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card" style="background-color: #09203f">
              <q-item>
                <q-item-section>
                  <div class="text-h5 text-center" style="color: white">
                    <strong class="text-h5">IOT</strong>
                  </div>
                  <q-item-label class="text-center" style="color: white" caption
                    >Active</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator color="white" />
              <q-item>
                <q-item-section>
                  <div class="text-h5 text-center" style="color: white">
                    <strong>11K</strong>
                  </div>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>
        <div class="col-12 q-pa-sm">
          <q-toolbar>
            <q-toolbar-title class="text-overline"
              >ACTIVE PROJECTS</q-toolbar-title
            >
          </q-toolbar>
          <q-card class="my-card q-pa-sm">
            <q-item>
              <q-item-section>
                <q-item-label
                  ><div class="text-h3" style="color: white">
                    Performance Anaylisis
                  </div></q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item>
              <item-section class="">
                <LineChartMobile />
              </item-section>
            </q-item>
          </q-card>
        </div>
        <div class="row-12 q-pa-sm">
          <q-toolbar>
            <q-toolbar-title class="text-overline"
              >WORKS AVAILABLE</q-toolbar-title
            >
            <q-btn flat text-color="light-blue-8" label="Show All"></q-btn>
          </q-toolbar>
          <q-card
            class="my-card q-pa-sm"
            style="max-width: 355px; height: 332px"
          >
            <q-item>
              <q-item-section>
                <div style="align-items: center" class="q-pr-xl">
                  <DoughnutChartMobile />
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>
        <div class="row-12 q-pa-sm">
          <q-toolbar>
            <q-toolbar-title class="text-overline"
              >WORKS AVAILABLE</q-toolbar-title
            >
            <q-btn flat text-color="light-blue-8" label="Show All"></q-btn>
          </q-toolbar>
          <q-card
            class="my-card q-sa-sm"
            style="max-width: 355px; height: 332px"
          >
            <q-item>
              <q-item-section>
                <div style="align-items: center" class="">
                  <BarChartMobile />
                </div>
              </q-item-section>
            </q-item>
          </q-card>
        </div>

        <!-- </div> -->
        <q-toolbar>
          <q-toolbar-title><strong>my shots</strong></q-toolbar-title>
          <q-btn
            color="dark"
            icon-right="fas fa-chevron-down"
            label="Latest"
            flat
          ></q-btn>
        </q-toolbar>

        <div class="row">
          <div class="col-6 q-pa-sm">
            <q-card class="my-card">
              <q-img src="../assets/loginImg.jpg" alt="my photos">
                <div class="absolute-bottom">
                  <div class="text-subtitle1">Merketing Landing page</div>
                  <div class="text-subtitle2">03 August 2020</div>
                </div>
              </q-img>
            </q-card>
          </div>
          <div class="col-6 q-pa-sm">
            <q-card class="my-card">
              <q-img src="../assets/face-1.jpg" alt="my photos">
                <div class="absolute-bottom">
                  <div class="text-subtitle1">Community dashboard</div>
                  <div class="text-subtitle2">03 August 2021</div>
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
        <!-- <div class="row"> -->
        <div class="row">
          <div class="col-6 q-pa-sm">
            <q-card class="my-card">
              <q-img src="../assets/loginImg.jpg" alt="my photos">
                <div class="absolute-bottom">
                  <div class="text-subtitle1">Merketing Landing page</div>
                  <div class="text-subtitle2">03 August 2020</div>
                </div>
              </q-img>
            </q-card>
          </div>
          <div class="col-6 q-pa-sm">
            <q-card class="my-card">
              <q-img src="../assets/face-1.jpg" alt="my photos">
                <div class="absolute-bottom">
                  <div class="text-subtitle1">Community dashboard</div>
                  <div class="text-subtitle2">03 August 2021</div>
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
        <!-- </div> -->
        <div class="row">
          <div class="col-6 q-pa-sm">
            <q-card class="my-card">
              <q-img src="../assets/face-3.jpg" alt="my photos">
                <div class="absolute-bottom">
                  <div class="text-subtitle1">Movie Booking App</div>
                  <div class="text-subtitle2">03 August 2019</div>
                </div>
              </q-img>
            </q-card>
          </div>
          <div class="col-6 q-pa-sm">
            <q-card class="my-card">
              <q-img src="../assets/face-2.jpg" alt="my-photos">
                <div class="absolute-bottom">
                  <div class="text-subtitle1">Pattern Grandients</div>
                  <div class="text-subtitle2">03 August 2018</div>
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import LineChart from "src/components/LineChart.vue";
import DoughnutChart from "src/components/DoughnutChart.vue";
import BarChart from "src/components/BarChart.vue";
import BarChartMobile from "src/components/BarChartMobile.vue";
// import LineChartMobile from "src/components/LineChartMobile.vue";
import DoughnutChartMobile from "src/components/DoughnutChartMobile.vue";
// import LineChartMobile from "src/components/LineChartMobile.vue";

import { useQuasar } from "quasar";
import LineChartMobile from "src/components/LineChartMobile.vue";
export default {
  name: "IndexPage",
  components: {
    DoughnutChart,
    LineChart,
    BarChart,
    BarChartMobile,
    // LineChartMobile,
    DoughnutChartMobile,
    LineChartMobile,
  },
  setup() {
    const $q = useQuasar();

    $q.platform.is.mobile;
    $q.platform.is.desktop;
    $q.platform.is.electron;
  },
  data: () => ({ value: 0 }),
};
</script>
