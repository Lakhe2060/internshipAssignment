import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./productdetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to load product details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 900);
  };

  if (loading)
    return (
      <div className={styles.loadingSpinner}>Loading product details...</div>
    );
  if (error) return <div className={styles.errorMessage}>{error}</div>;
  if (!product)
    return <div className={styles.errorMessage}>Product not found</div>;

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailCard}>
        <div className={styles.productImageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.productDetailImage}
          />
        </div>

        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <div className={styles.productCategory}>{product.category}</div>
          <div className={styles.productPrice}>${product.price.toFixed(2)}</div>
          <div className={styles.productRating}>
            Rating: {product.rating.rate} ★ ({product.rating.count} reviews)
          </div>
          <p className={styles.productDescription}>{product.description}</p>

          <button
            className={`${styles.addToCartBtn} ${
              addedToCart ? styles.added : ""
            }`}
            onClick={handleAddToCart}
          >
            {addedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
