import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'TypeScript Next.js Stripe Example',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@thorwebdev" />
      <meta name="twitter:title" content="TypeScript Next.js Stripe Example" />
      <meta
        name="twitter:description"
        content="Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node."
      />
      <meta
        name="twitter:image"
        content="https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png"
      />
    </Head>
    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <img src="/brand-logo.png" />
            </a>
          </Link>
          <h1>
            <span className="light">Lightwell NextJS Shopping App</span>
          </h1>
        </div>
      </header>
      {children}
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
    </div>
    
  </>
)

export default Layout
