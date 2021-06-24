import 'nextra-theme-docs/style.css'
import Prism from 'prism-react-renderer/prism'

(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-php")
require("prismjs/components/prism-javascript")
require("prismjs/components/prism-json")

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
