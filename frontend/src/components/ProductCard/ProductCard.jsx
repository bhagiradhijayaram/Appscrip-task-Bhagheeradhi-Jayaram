import { useState } from "react";
import "./ProductCard.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ productInfo }) => {
  const [like, setLike] = useState(false);
  const { title, image, price, category } = productInfo;

  const handlewishlist = () => {
    setLike((prev) => !prev);
  };

  return (
    <li className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p className="category">{category}</p>
        <div className="price-like">
          <p className="price">${price}</p>
          <button className="heart-button" onClick={handlewishlist}>
            {like ? <FaHeart size={18} color="red" /> : <CiHeart size={25} />}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
