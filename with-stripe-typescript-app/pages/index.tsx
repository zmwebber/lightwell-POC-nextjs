import { NextPage } from 'next'
import Cart from '../components/Cart'
import CartBanner from '../components/CartBanner'
import Layout from '../components/Layout'
import {ComponentTitle} from '../components/ComponentTitle'
import Products from '../components/Products'

const text = "Select Products to add to your cart";
const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <ComponentTitle titleText={text}/>
      <Cart><Products/></Cart>
      <CartBanner/>
    </Layout>
  )
}

export default IndexPage
