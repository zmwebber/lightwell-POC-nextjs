import { NextPage } from 'next'
import Link from 'next/link'
import Cart from '../components/Cart'
import Layout from '../components/Layout'
import Products from '../components/Products'
const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello World</h1>
      <ul className="card-list">
      <div><Cart><Products/></Cart></div>        
        <li>
          <Link href="/use-shopping-cart">
            <a className="card cart-style-background">
              <h2 className="bottom">View Cart</h2>
              <img src="/use-shopping-cart.png" />
            </a>
          </Link>
        </li>
      </ul>
      
     
    </Layout>
  )
}

export default IndexPage
