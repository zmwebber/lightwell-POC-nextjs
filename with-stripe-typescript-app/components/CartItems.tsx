import { formatCurrencyString } from 'use-shopping-cart'
import { useShoppingCart } from 'use-shopping-cart/react'

const CartItems = () => {
    const { cartDetails, incrementItem, decrementItem } = useShoppingCart()

    return (
        <section className="cart-items-parent">
            {Object.entries(cartDetails).map((product: any) => (
                <div className=" cart-item-inner">
                    <img className="cart-item-img" src={product[1].image} alt={product[1].name} />
                    <div className="cart-item-right-child">
                        <h2>{product[1].name}</h2>
                        <div className=" cart-item-desc">
                            <p className="price">
                                {formatCurrencyString({
                                    value: product[1].price,
                                    currency: product[1].currency,
                                })}
                            </p>
                            <p className="price">
                                QTY: {product[1].quantity}
                            </p>
                            <p className="price">
                                Subtotal: {formatCurrencyString({
                                    value: product[1].value,
                                    currency: product[1].currency,
                                })}
                            </p>
                        </div>
                        <div className="cart-item-buttons">
                            <button className="cart-style-background" onClick={() => { incrementItem(product[1].id) }}>
                                Add to cart
                            </button>
                            <button className="cart-style-background" onClick={() => { decrementItem(product[1].id) }}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default CartItems;
