import { defineComponent, ref, watch, reactive, computed } from 'vue/dist/vue.esm-bundler'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    let x = ref(0)
    let y = ref(0)

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = event.offsetX
      y.value = event.offsetY
    }

    // const style = reactive({});

    const left = computed(()=> {
      return x.value;
    })

    const top = computed(()=> {
      return y.value;
    })

    return {
      handleClick,
      left,
      top,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="{ 'left': left + 'px', 'top': top + 'px' }">📍</span>
    </div>
  `,
})
