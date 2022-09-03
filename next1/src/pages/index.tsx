import type { NextPage } from 'next'
import {Layout} from "../../components/layout";
import {Getjson} from "../../components/getjson";

const Home: NextPage = () => {
  let title = "Hello!! Next.JS!!"
  return (
    <Layout title={title}>
      <Getjson />
    </Layout>
  )
}

export default Home
