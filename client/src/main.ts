import { createApp, Vue } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './layout/App.vue';
import router from './router';
import store from './store';

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faHatWizard);

createApp(App).use(store).use(router).mount('#app');
