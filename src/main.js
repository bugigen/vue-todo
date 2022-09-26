import { createApp } from 'vue';
import App from './App.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

library.add(faPenToSquare, faTrashCan);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
