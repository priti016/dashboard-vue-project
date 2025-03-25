import { createApp } from 'vue';
import App from './App.vue';
import router from './routes.js'; // Import the router

const app = createApp(App);

app.use(router); // Use the router
app.mount('#app');
