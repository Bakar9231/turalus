import { createSSRApp, h } from 'vue'
import { createPinia } from 'pinia'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import '../src/assets/main.css'
import '../src/assets/responsive.css'
export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  }

  const app = createSSRApp(PageWithLayout)
  app.use(createPinia())
  // We make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  return app
}