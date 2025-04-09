import { useCart } from "../contexts/CartContext";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productCardImage}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles.productCardContent}>
        <h3 className={styles.productCardTitle}>{product.title}</h3>
        <p className={styles.productCardPrice}>${product.price.toFixed(2)}</p>
        <p className={styles.productCardCategory}>{product.category}</p>

        <button className={styles.productCardBtn} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
