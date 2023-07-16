import Image from "next/image";

const Card = ({ image, title, price, stock }) => {
  return (
    <div className="card">
      <Image src={image} alt={title} />
      <h2>{product.title}</h2>
      <p>$ {product.price}</p>
      <p>{product.stock}</p>
    </div>
  );
};

export default Card;
