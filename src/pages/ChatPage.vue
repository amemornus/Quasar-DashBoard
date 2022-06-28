<template>
  <!-- <div class="q-pa-md">
    <div class="box">
      <div class="object">
        <div class="outline"></div>
        <div class="outline" id="delayed"></div>
        <div class="button"></div>
        <div class="button" id="circlein">
          <svg
            class="mic-icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
            xml:space="preserve"
            style="fill: #1e2d70"
          >
            <g>
              <path
                d="M500,683.8c84.6,0,153.1-68.6,153.1-153.1V163.1C653.1,78.6,584.6,10,500,10c-84.6,0-153.1,68.6-153.1,153.1v367.5C346.9,615.2,415.4,683.8,500,683.8z M714.4,438.8v91.9C714.4,649,618.4,745,500,745c-118.4,0-214.4-96-214.4-214.4v-91.9h-61.3v91.9c0,141.9,107.2,258.7,245,273.9v124.2H346.9V990h306.3v-61.3H530.6V804.5c137.8-15.2,245-132.1,245-273.9v-91.9H714.4z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div> -->
    <!-- <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input standout bottom-slots v-model="text" dense>
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon
            v-if="text !== ''"
            name="close"
            @click="text = ''"
            class="cursor-pointer"
          />
          <q-icon name="schedule" />
        </template>

        <template v-slot:after>
          <q-btn round dense flat>
            <q-icon v-if="text !== ''" name="mic" />
          </q-btn>
        </template>
      </q-input>
    </div> -->
    <!--  -->
    <a href="http://example.com" class="pulsingButton">Streaming Live</a>
    <div class="pulsingButton">
      <q-btn round flat>
        <q-icon name="mic"></q-icon>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ChatPage",
  setup() {
    return {
      text: ref(""),

      ph: ref(""),
      dense: ref(false),
    };
  },
};
</script>
<style scoped>
body {
  background: #222032;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
}

.object {
  display: flex;
  flex: 0 1 100%;
  justify-content: center;
  align-items: center;
  align-content: stretch;
}

.outline {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 8px solid #b5a4a4;
  animation: pulse 3s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  position: absolute;
}

.button {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #e72929;
  box-shadow: 0px 0px 80px #0084f9;
  position: absolute;
}

@keyframes pulse {
  0% {
    transform: scale(0);
    opacity: 0;
    border: 65px solid #0b3082;
  }
  0% {
    border: solid #a3ffc2;
    opacity: 0.8;
  }

  90% {
    transform: scale(3.2);
    opacity: 0.2;
    border: 3px solid #2e3cff;
  }
  100% {
    transform: scale(3.3);
    opacity: 0;
    border: 1px solid #7a89ff;
  }
}

#delayed {
  animation-delay: 1.5s;
}

#circlein {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #d80a0a;
  box-shadow: 0px -2px 15px #6bd6e1;
  position: absolute;
}

.mic-icon {
  height: 60px;
  position: absolute;
  margin: 21px;
}

/*  */
/* Basic button styling */

.pulsingButton {
  width: 220px;
  text-align: center;
  white-space: nowrap;
  display: block;
  margin: 50px auto;
  padding: 10px;
  box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
  border-radius: 10px;
  background-color: #ff0000;
  -webkit-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  font-size: 22px;
  font-weight: normal;
  font-family: sans-serif;
  text-decoration: none !important;
  color: #ffffff;
  transition: all 300ms ease-in-out;
}

/* Comment-out to have the button continue to pulse on mouseover */

a.pulsingButton:hover {
  -webkit-animation: none;
  -moz-animation: none;
  -ms-animation: none;
  animation: none;
  color: #ffffff;
}

/* Animation */

@-webkit-keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

@-moz-keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

@-ms-keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

@keyframes pulsing {
  to {
    box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
  }
}

/*  */
</style>
