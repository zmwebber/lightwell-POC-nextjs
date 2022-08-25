import { NextPage } from 'next'
import Layout from '../components/Layout'

import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import CartItems from '../components/CartItems'

const DonatePage: NextPage = () => {
  return (
    <Layout title="Shopping Cart | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <Cart>
          <CartSummary />
          <CartItems />
        </Cart>
      </div>
    </Layout>
  )
}

export default DonatePage
