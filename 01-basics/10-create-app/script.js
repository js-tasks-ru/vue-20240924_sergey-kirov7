import { defineComponent, createApp } from 'vue';

const App = defineComponent({
    name: 'App',
    setup() {
        const event = new Date();

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        const currentDay = event.toLocaleDateString(navigator.language, options);

        return {
            currentDay,
        }
    },
    template: `<div class="container">Сегодня {{currentDay}}</div>`,
});

const app = createApp(App);

app.mount('#app');
