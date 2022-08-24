import { AppProps } from 'next/app'
import '../styles.css'

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}

export default MyApp
