import App from './App'

// import uView from '@/uview-plus'
import uviewPlus from '@/uni_modules/uview-plus'

import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'

export function createApp() {
    const app = createSSRApp(App)
    const pinia = createPinia()
    app.use(pinia)
    // app.use(uView)
	app.use(uviewPlus)
    return {
        app,
        pinia
    }
}

