import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/Navbar'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Toaster></Toaster>
    </>

  ) 
}

export default MyApp
