import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Getjson} from "./components/App"

const Home: NextPage = () => {
  return (
    <div>
    <Getjson />
    </div>
  )
}

export default Home
