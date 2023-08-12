import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts } from "../services/services";
import CardProduct from "../components/CardProduct";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    getProducts().then(res => setProducts([ ...res ]));
  }, []);

  return (
    <Container>
      {products.map(p => <CardProduct key={p.id} product={p}/>)}
    </Container>
  );
};

export default HomePage;

const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 65%;
  margin: 10vh auto;
  border-radius: 5px;
  padding: 10px;
`;