import { useContext, useEffect, useState } from "react";
import { getUserData } from "../services/services";
import { AuthContext } from "../context/AutContext";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { updateProductStatus } from "./ProductPage";

const UserPage = () => {
  const { authToken } = useContext(AuthContext);
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [reload, setReload] = useState(0);
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    getUserData(id, authToken.token).then(res => {
      if(res.response) {
        // alert(res.response.data)
        navigate('/');
      } else {
        setUser(res.data)
      }
    })
      .catch(error => alert(error.response));
  }, [reload]);

  if(!user.name) return <div>Carregando</div>

  return (
    <Container>
      <div>
        <h1>Dados da Conta</h1>
        <h4>{`Nome: ${user.name}`}</h4>
        <h4>{`E-mail: ${user.email}`}</h4>
        <h4>{`Telefone: ${user.phone}`}</h4>
      </div>
      <div>
        <h1>Desapegos</h1>
        <ul>
          {user.products.map(p => (
            <li>
              <img src={p.imageUrl} alt="" />
              <div>
                <h4>{p.name}</h4>
                <h4>{`R$ ${Number(p.price).toFixed(2)}`}</h4>
              </div>
              <button onClick={e => { updateProductStatus(e, p.id, !p.available, authToken.token); setReload(reload + 1)}}>{p.available ? "Já desapeguei" : "Quero desapegar"}</button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default UserPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  width: 65%;
  margin: 10vh auto;
  border-radius: 5px;
  padding: 10px;

  li {
    display: flex;
    width: 60%;
    height: 100px;
    border: 1px solid #343434;
    border-radius: 15px;
    align-items: center;
    margin-bottom: 7px;
    padding: 5px;

    img {
      width: 80px;
      height: 80px;
    };

    button {
    padding: 15px;
    margin-left: auto;
    background-color: #5858e6;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;

  }
  }
`;