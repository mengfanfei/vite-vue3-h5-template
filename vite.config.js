import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import autoprefixer from 'autoprefixer'
import pxtovw from 'postcss-px-to-viewport'
import styleImport from 'vite-plugin-style-import'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy({
      targets: ['chrome >= 49', 'safari >= 10', 'ios >= 10']
    }),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/index`,
        },
      ],
    }),
    viteSvgIcons({
      iconDirs: [resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        pxtovw({
          viewportWidth: 375
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/members': {
        target: 'https://hwdpfw.zhongyijiutai.com',
        changeOrigin: true,
        pathRewrite: {
          '^/members': '/members'
        }
      }
    }
  }
})
