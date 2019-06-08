import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import es from 'vuetify/es5/locale/es'
import colors from 'vuetify/es5/util/colors'


Vue.use(Vuetify, {
  theme: {
    primary: colors.deepOrange.base,
    secondary: colors.orange.base,
    accent: colors.red.base,
    error: colors.pink.base,  
    warning: colors.amber.base,
    info: colors.cyan.base,
     success: colors.lightGreen.base
  },
  options: {
    customProperties: true
  },
  iconfont: 'md',
  lang: {
    locales: { es },
    current: 'es'
  },
})
