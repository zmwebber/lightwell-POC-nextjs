import { NextPage } from 'next'
import Link from 'next/link'
import Cart from '../components/Cart'
import Layout from '../components/Layout'
import Products from '../components/Products'
const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <div><h1>Products</h1>      
      <Cart><Products removeVisible={true}/></Cart></div>
    </Layout>
  )
}

export default IndexPage
