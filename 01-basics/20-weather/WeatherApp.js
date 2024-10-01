import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const weather = getWeatherData();
    const icons = WeatherConditionIcons;

    function farengeitToCelc(value) {
      const res = value - 273.15;

      return res.toFixed(1);
    };

    function createTime(time) {
      const timeArr = time.split(':');
      const hour = timeArr[0];
      const minutes = timeArr[1];
      let newDate = new Date();

      newDate.setHours(Number(hour));
      newDate.setMinutes(Number(minutes));

      return newDate;
    }

    function setCardClass(dt, sunrise, sunset) {
      const isNight = createTime(dt) < createTime(sunrise);
      const res = isNight ? 'weather-card weather-card--night' : 'weather-card';

      return res;
    }

    function pressToHg(pressure) {
      const res = pressure * 0.75;

      return res.toFixed(0);
    }

    return {
      weather,
      farengeitToCelc,
      icons,
      setCardClass,
      pressToHg,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="{geographic_name, current, alert} in weather" key="" :class="setCardClass(current.dt, current.sunrise, current.sunset)">
          <div v-if="alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ alert.sender_name }}\n{{ alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="current.weather.description">{{ icons[current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ farengeitToCelc(current.temp) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ pressToHg(current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
