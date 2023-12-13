// import { createApp } from 'vue'
// import './style.css'
// import LoginPage from './views/LoginPage.vue'

// createApp(LoginPage).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'

const app = createApp(App);

app.use(router);

app.mount('#app');
