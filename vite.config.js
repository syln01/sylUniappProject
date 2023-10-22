// vite.config.js  
import { defineConfig } from 'vite'  
import uni from '@dcloudio/vite-plugin-uni'  
import { resolve } from 'path'
// https://vitejs.dev/config/  
export default defineConfig({  
  // base: 'https://static-xxxx.bspapp.com/', // uniCloud 前端网页托管资源地址（主要是应用编译后的js，图片等静态资源，可以配置为二级目录）  
  plugins: [  
    uni(),  

  ], 
   server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8081',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }

    // resolve: {
    //    alias: {
    //      '^@': resolve(__dirname, './pages')
    //    }
    //  }
})