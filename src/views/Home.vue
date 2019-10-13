<template>
  <div>
    <v-row>
      <v-col>
        <!-- <h1>SHERMANATOR</h1> -->
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="main">
          <v-stage :config="stageConfig">
            <v-layer :config="faceLayerConfig">
              <v-image ref="face" :config="faceConfig"></v-image>
              <v-image ref="hair" :config="hairConfig"></v-image>
              <v-image ref="facialhair" :config="facialHairConfig"></v-image>
            </v-layer>
          </v-stage>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-btn @click="randomise">PRESS ME</v-btn>
    </v-row>
  </div>
</template>

<style scoped>
.main {
  height: 50vh;
  width: 50vw;
}
</style>

<script>
  import { keys, helpers, data } from "@/data/images";

  const FACE = "face";
  const HAIR = "hair";
  const FACIAL_HAIR = "facialHair";

  const GLOBAL_OFFSET_X = 0;
  const GLOBAL_OFFSET_Y = -100;

  function randomKey(keySet) {
    let keyArray = Object.keys(keySet);
    let newKey = keyArray[Math.floor(Math.random() * keyArray.length)];
    console.log(newKey, Math.floor(Math.random() * keyArray.length));
    return keySet[newKey];
  }

  export default {
    components: {},

    created() {
      this.loadImage(keys.faces.sherman, FACE, null, false);
    },

    mounted() {},

    computed: {
      faceLayerConfig() {
        return {
          id: "faceLayer"
        };
      },

      faceConfig() {
        return {
          id: "face",
          image: this[FACE + "Image"],
          ...this.faceProps
        };
      },
      facialHairConfig() {
        return {
          id: "facial_hair",
          image: this[FACIAL_HAIR + "Image"],
          ...this.facialHairProps
        };
      },
      hairConfig() {
        return {
          id: "hair",
          image: this[HAIR + "Image"],
          ...this.hairProps
        };
      }
    },

    methods: {
      loadImage(key, to, variant = null, randomVis = true) {
        const image = new Image();

        const data = helpers.get(key);
        image.src = helpers.url(key, variant);

        image.onload = () => {
          this[to + "Image"] = image;

          this[to + "Props"].width = image.width / 4;
          this[to + "Props"].height = image.height / 4;
          this[to + "Props"].offsetX = GLOBAL_OFFSET_X + data.offsetX;
          this[to + "Props"].offsetY = GLOBAL_OFFSET_Y + data.offsetY;

          if (randomVis) {
            if (Math.random() < 0.15) this[to + "Props"].visible = false;
            else this[to + "Props"].visible = true;
          }

          // console.log(this.$refs.face.getNode().zIndex());
        };
      },

      randomise(event) {
        console.log("Randomising");

        let hair = randomKey(keys.hair);
        let facialHair = randomKey(keys.facialhair);

        console.log(helpers.get(hair));
        console.log(helpers.get(facialHair));
        console.log(
          helpers.get(hair).hasOwnProperty("longHair") &&
            helpers.get(facialHair).hasOwnProperty("variants")
        );

        if (
          helpers.get(hair).hasOwnProperty("longHair") &&
          helpers.get(facialHair).hasOwnProperty("variants")
        ) {
          this.loadImage(facialHair, FACIAL_HAIR, "longHair");
        } else {
          this.loadImage(facialHair, FACIAL_HAIR);
        }

        // Some chance that we have no hair or beard
        this.loadImage(hair, HAIR);

        // console.log(this.$refs.hair.getNode().zIndex());
        // console.log(this.$refs.facialhair.getNode().zIndex());
      }
    },

    data() {
      return {
        images: {},

        stageConfig: {
          width: 1500,
          height: 1500
        },

        faceProps: {
          width: 0,
          height: 0,
          visible: true
        },

        hairProps: {
          width: 0,
          height: 0,
          visible: true
        },

        facialHairProps: {
          width: 0,
          height: 0,
          visible: true
        },

        faceImage: null,
        hairImage: null,
        facialHairImage: null,

        configCircle: {
          x: 100,
          y: 100,
          radius: 70,
          fill: "red",
          stroke: "black",
          strokeWidth: 4
        }
      };
    }
  };
</script>