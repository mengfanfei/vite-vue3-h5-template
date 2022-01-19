# 移动端项目模版

- 项目使用 [Vite](https://vitejs.cn/) + [Vue3](https://v3.cn.vuejs.org/) + [Vue-Router4](https://next.router.vuejs.org/zh/) + [Pinia](https://pinia.vuejs.org/) 搭建
- Pinia: 你更喜欢使用的vue状态管理
- 使用 [Vant](https://vant-contrib.gitee.io/vant/v3/#/zh-CN) 移动端组件库
- 使用vw适配移动端
- 自定义全局样式（在assets/styles/index.css）
- 使用scss预编译
- 使用typescript

## 全局样式提示

- **_VSCode_**: 可以增加扩展插件：**IntelliSense for CSS class names in HTML**
- **_webStorm_**: 自动带有提示，若没有提示，可以将项目打包一下就会有了

## Svg和iconfont

- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/blob/HEAD/README.zh_CN.md): 用于生成 svg 雪碧图.

### 使用

- vite.config.ts 中的配置插件
```javascript
import viteSvgIcons from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
  plugins: [
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
})
```
- 在 src/main.ts 内引入注册脚本
```javascript
import 'virtual:svg-icons-register';
import './assets/iconfont/iconfont.css' // iconfont 内容
```
- 创建组件

  `/src/components/SvgIcon.vue`

```vue
<template>
  <component :is="component" :class="className" aria-hidden="true">
    <use :href="iconName" :fill="color"/>
  </component>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'SvgIcon',
    props: {
      prefix: {
        type: String,
        default: 'icon',
      },
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: '#333',
      },
    },
    setup(props) {
      const component = computed(() => props.prefix === 'icon' ? 'svg' : 'i')
      const iconName = computed(() => `#${props.prefix}-${props.name}`)
      const className = computed(() => {
        if (props.prefix === 'icon') {
          return 'svg-icon'
        } else if (props.prefix === 'iconfont') {
          return 'iconfont icon-' + props.name
        }
      })
      return { component, iconName, className }
    },
  });
</script>
<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
```
- icon 和 iconfont 目录结构
```text
/src/icons
- data-cahrt.svg
- data-monry.svg
- expand.svg
- home/add.svg
...
/src/assets/iconfont
- iconfont.css
- iconfont.ttf
...
```
- 使用方式
```vue
<template>
  <SvgIcon name="home-add"></SvgIcon>
  <SvgIcon name="data-chart"></SvgIcon>
  <SvgIcon name="data-money"></SvgIcon>
  <SvgIcon name="data-order"></SvgIcon>
  <SvgIcon name="data-people"></SvgIcon>
  <SvgIcon name="expand"></SvgIcon>
  <SvgIcon name="home-add" color="#8B81C3" style="width: 30px;height: 30px;"></SvgIcon>
  <SvgIcon name="QQ" prefix="iconfont"></SvgIcon>
  <SvgIcon name="QQ" prefix="iconfont" style="color:#edaeda;"></SvgIcon>
  <SvgIcon name="QQ" prefix="iconfont" style="font-size: 30px;"></SvgIcon>
</template>
<script setup>
import SvgIcon from './components/SvgIcon.vue'
</script>
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
