import { Link } from "react-router-dom";
import styled from "styled-components";

const CardProduct = ({product}) => {
  const price = String(product.price).slice(0, -2);
  const cents = String(product.price).slice(-3, -1);

  return (
    <Link to={`/products/${product.id}`} key={product.id}>
      <Card>
        <img src={product.imageUrl} alt="" />
        <h1>{product.name}</h1>
        <h2>{`${price},${cents}`}</h2>
      </Card>
    </Link>
  );
};

export default CardProduct;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 220px;
  height: 280px;
  border-radius: 15px;
  padding: 10px;
  color: #343434;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  h1 {
    font-size: 16px
  }

  h2 {
    font-size: 18px;

    &:before {
      content: 'R$ ';
    };
  };

  img {
    width: 100%;
    height: 70%;
  };
`;