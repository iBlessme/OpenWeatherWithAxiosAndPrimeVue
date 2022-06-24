import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'

import 'primevue/resources/themes/lara-light-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';



const app = createApp(App);
app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Card', Card);

app.mount("#app");
