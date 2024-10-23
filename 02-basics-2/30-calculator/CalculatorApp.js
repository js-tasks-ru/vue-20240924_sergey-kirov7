import { defineComponent, ref, computed, watchEffect } from 'vue/dist/vue.esm-bundler'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const result = ref(0);
    const fistOperand = ref(0);
    const secondOperand = ref(0);
    const checked = ref("");


    watchEffect(() => {
      switch (checked.value) {
        case "sum":
          result.value = fistOperand.value + secondOperand.value;
          break;
        case "subtract":
          result.value = fistOperand.value - secondOperand.value;
          break;
        case "multiply":
          result.value = fistOperand.value * secondOperand.value;
          break;
        case "divide":
          result.value = fistOperand.value / secondOperand.value;
          break;
        default:
          break;
      }
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
        <label><input type="radio" name="operator" v-model="checked" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model="checked" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model="checked" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model="checked" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model.lazy="secondOperand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
