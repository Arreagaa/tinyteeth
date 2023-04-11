import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faClock } from'@fortawesome/free-regular-svg-icons'
import { faArrowRight, faBars, faCirclePlus, faCircleMinus, faAngleRight, faAngleLeft, faCreditCard, faX, faTooth, faQuoteLeft, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import 'vue-select/dist/vue-select.css';

/* add icons to the library */
library.add(faYoutube, faFacebook, faInstagram, faArrowRight, faBars, faCirclePlus, faCircleMinus, faEnvelope, faAngleRight, faAngleLeft, faCreditCard,faClock,faX, faTooth, faQuoteLeft, faTriangleExclamation ) 

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .component('l-icon', FontAwesomeIcon)
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
