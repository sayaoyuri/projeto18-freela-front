import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../services/services";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then(res => setProduct(res));
  }, []);

  return (
      <Container>
      <section>
        <h3>{product.category}</h3>
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt="" />
        <h1>{`R$ ${product.price}`}</h1>
        <h5>{product.description}</h5>
      </section>
      <article>
        <h1>{product.ownerName}</h1>
        <h2>{product.email}</h2>
        <h2>{`Whatsapp: ${product.phone}`}</h2>
      </article>
    </Container>
  );
};

export default ProductPage;

const Container = styled.main`
  display: flex;
  gap: 10px;
  width: 50%;
  height: 50vh;
  border: 1px solid black;
  margin: 24vh auto;
  border-radius: 5px;
  padding: 5px;

  section, article {
    width: 60%;
    height: 100%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;

    img {
      margin: 0 auto;
      width: 80%;
      height: 40%;
    };
  };

  article {
    width: 35%;
  };
`;