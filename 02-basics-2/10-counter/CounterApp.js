import { defineComponent, ref, computed } from 'vue/dist/vue.esm-bundler'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    let count = ref(0);
    // let isDisabled = computed( () => count < 0 ? true : false);

    return {
      count,
      // isDisabled,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="count <= 0 ? true : false"
        @click="count--"
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="count >= 5 ? true : false"
        @click="count++"
      >➕</button>
    </div>
  `,
})
