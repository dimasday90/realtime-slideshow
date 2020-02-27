<template>
  <div>
    <v-carousel v-model="model"
      hide-delimiters
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">Slide {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-card flat>
      <v-card-title>
        Change carousel by clicking minum or plus symbol below
      </v-card-title>
    </v-card>
    <v-row justify="space-around">
      <v-icon @click="modelMin">mdi-minus</v-icon>
      {{ model }}
      <v-icon @click="modelPlus">mdi-plus</v-icon>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange'
      ],
      model: 0
    }
  },
  methods: {
    modelPlus () {
      this.$store.state.socket.emit('modelPlus')
    },
    modelMin () {
      this.$store.state.socket.emit('modelMin')
    }
  },
  created () {
    this.$store.state.socket.on('resModel', num => {
      this.model = this.model + num
    })
  }
}
</script>
