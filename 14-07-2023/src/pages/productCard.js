import styles from "@/styles/productCard.module.scss";

export default function productCard({ data }) {
  return (
    <div className={styles.productCard}>
      {data.products.map((product) => (
        <>
          <h3>
            {product.title} - $ {product.price} - {product.stock}
          </h3>
          <br />
          <hr />
          <br />
        </>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
