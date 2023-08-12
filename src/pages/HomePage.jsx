import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      {products.map(p => <CardProduct product={p}/>)}
    </Container>
  );
};

export default HomePage;

const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 50%;
  height: 85vh;
  border: 1px solid black;
  margin: 7vh auto;
  border-radius: 5px;
  padding: 5px;
`;