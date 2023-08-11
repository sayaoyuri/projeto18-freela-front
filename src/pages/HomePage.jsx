import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../services/services";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    getProducts().then(res => setProducts([ ...res ]));
  }, []);

  return (

    <Container>
      {products.map(p => (
        <Link to={`/products/${p.id}`} key={p.id}>
          <div>
            <img src={p.imageUrl} alt="" />
            <h3>{p.name}</h3>
            <h4>{`R$ ${p.price}`}</h4>
          </div>
        </Link>
      ))}
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

  div {
    width: 225px;
    height: 270px;
    border: 1px solid black;
    border-radius: 5px;

    img{
      width: 100%;
      height: 70%;
    }
  }
`;