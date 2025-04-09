import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import styles from "./cart.module.css";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } =
    useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) newQuantity = 1;
    updateQuantity(productId, newQuantity);
  };

  const handleCheckout = () => {
    if (items.length === 0) return;

    setOrderPlaced(true);
    clearCart();

    setTimeout(() => {
      setOrderPlaced(false);
    }, 4000);
  };

  return (
    <div className={styles.cartContainer}>
      <h1>Your Cart</h1>

      {orderPlaced && (
        <div className={styles.orderConfirmation}>
          <div className={styles.orderConfirmationContent}>
            <h2>Order placed successfully!</h2>
            <p>Thank you for your purchase.</p>
          </div>
        </div>
      )}

      {items.length === 0 && !orderPlaced && (
        <div className={styles.emptyCart}>
          <p>Your cart is empty.</p>
        </div>
      )}

      {items.length > 0 && (
        <>
          <div className={styles.cartItems}>
            {items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.cartItemImage}>
                  <img src={item.image} alt={item.title} />
                </div>

                <div className={styles.cartItemDetails}>
                  <h3>{item.title}</h3>
                  <p className={styles.cartItemPrice}>
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className={styles.cartItemActions}>
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className={styles.cartItemSubtotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <div className={styles.cartTotal}>
              <span>Total:</span>
              <span>${getCartTotal()}</span>
            </div>

            <button className={styles.checkoutBtn} onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
