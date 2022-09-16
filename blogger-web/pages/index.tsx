import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Loader } from '../components/Loader';
import toast from 'react-hot-toast'

const Home: NextPage = () => {
  return (
    <div>
      <button onClick={() => toast.success('hello toast')}>
        Toast me!!
      </button>
    </div>
  )
}

export default Home
