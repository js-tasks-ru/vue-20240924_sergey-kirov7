import { defineComponent, ref, computed, watch } from 'vue/dist/vue.esm-bundler'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const fistOperand = ref(0);
    const secondOperand = ref(0);
    const checked = ref("");

    let result = computed(() => {
      return checked === "sum" ? fistOperand.value + fistOperand.value : fistOperand.value;
      // switch(checked) {
      //   case 'sum':
      //     return fistOperand.value + secondOperand.value

      //   default:
      //     return 999;
      // }
    });

    watch(result, (result) => {
      console.log(result);
    })

    return {
      result,
      checked,
      fistOperand,
      secondOperand,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model.lazy="fistOperand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" v-model.lazy="checked" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model.lazy="checked" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model.lazy="checked" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model.lazy="checked" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model.lazy="secondOperand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
