import styles from "./style.module.css";

function Card({ name, price, description, image, qty, btnAddToCart }) {
  return (
    <div className={styles.CardContainer}>
      {image && (
        <div className={styles.imageProduct}>
          <img className={styles.img} src={image} alt={`pic ${image}`} />
        </div>
      )}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.bottonRow}>
        <div className={styles.price}>${price}</div>
        <div className={styles.qty}>{qty}</div>
      </div>
      <button className={styles.btn} onClick={btnAddToCart}>Add to cart</button>
    </div>
  );
}
export default Card;
