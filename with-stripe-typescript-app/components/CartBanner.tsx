import Link from "next/link"

const CartBanner = () => (
    <div className="banner">
    <ul>
      <li>
        <Link href="/use-shopping-cart">
          <a className="cta">
            <h2 className="bottom">View Cart</h2>
            <img src="/use-shopping-cart.png" />
          </a>
        </Link>
      </li>
    </ul>
  </div>
  )
  
  export default CartBanner