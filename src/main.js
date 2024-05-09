import { createApp } from 'vue'
import App from './App.vue'
import Carousel3d from 'vue3-carousel-3d';
import "vue3-carousel-3d/dist/index.css"
import router from './router' // Import router instance
import "@/assets/css/styles.css"
import NavBar from './view/NavBar.vue';
import SearchBar from './view/SearchBar.vue';
import BodyView from './view/BodyPage.vue';
import CastView from './view/movies/CastView.vue';
import ImageView from './view/movies/imagePage.vue';
import mediaModel from './view/model/mediaModel.vue';
import actorList from './view/actors/actorList.vue';
import UpcomingMovie from './view/upcomingMovie.vue';
import AccountDropdown from './view/AccountDropdown.vue';
import store from  './store';
const app = createApp(App)

// Use the router instance with the app
app.use(router);

app.use(Carousel3d);
app.use(store);
// Mount the app

app.component('NavBar', NavBar);
app.component('SearchBar', SearchBar);
app.component('BodyView', BodyView);
app.component('CastView', CastView);
app.component('ImageView', ImageView);
app.component('mediaModel', mediaModel);
app.component('actorList', actorList);
app.component('UpcomingMovie', UpcomingMovie);
app.component('AccountDropdown', AccountDropdown);
app.mount('#app');