import { defineComponent, ref, watch, reactive } from 'vue/dist/vue.esm-bundler'

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

    const style = reactive({});

    // Следим за X и Y для установки нового положения
    watch([x, y], ([x, y]) => {
      // Находим метку и изменяем её положение
      style.left = `${x}px`
      style.top = `${y}px`
    })

    return {
      handleClick,
      style,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="style">📍</span>
    </div>
  `,
})
