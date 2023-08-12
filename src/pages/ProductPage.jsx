import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../services/services";
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  console.log(product)
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then(res => setProduct(res));
  }, []);

  return (
    <Container>
      <ProductDetails>
        <h4>{product.category}</h4>
        <h1>{product.name}</h1>
        <img src={product.imageUrl} alt="" />
        <h2>{`R$ ${product.price}`}</h2>
        <h3>{product.description}</h3>
      </ProductDetails>
      <OwnerDetails>
        <h1>{product.ownerName}</h1>
        <div>
          <h2>Contatos</h2>
          <h3><AiOutlineMail/>{` ${product.email}`}</h3>
          <h3><FaWhatsapp/>{` ${product.phone}`}</h3>
        </div>
      </OwnerDetails>
    </Container>
  );
};

export default ProductPage;

const Container = styled.main`
  display: flex;
  gap: 10px;
  width: 65%;
  margin: 15vh auto 0 auto;
  border-radius: 5px;
`;

const ProductDetails = styled.div`
  width: 60%;
  max-height: 75vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  padding: 10px;

  h1 {
    font-size: 22px;
  };

  h2 {
    font-size: 20px;
  };

  h3 {
    font-size: 16px;
  };

  h4 {
    font-size: 12px;
  };
  
  img {
    width: 90%;
    height: 60%;
  };
`;

const OwnerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: auto;
  padding: 20px 5px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin: 20% 0px ;
  };

  h1 {
    font-size: 22px;
  };

  h2 {
    font-size: 20px;
    text-align: center;
  };

  h3 {
    font-size: 18px;
  };
`;