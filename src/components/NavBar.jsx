import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AutContext";
import { BiSolidUserCircle, BiExit} from 'react-icons/bi'
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.svg'

const pages = [ {label: 'Produtos', url: '/products'} ];

const NavBar = () => {
  const navigate = useNavigate();
  const { authToken, getAuth, setGetAuth } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem('auth');
    setGetAuth(getAuth + 1);
    navigate('/');
  };

  return (
    <Nav>
      <Div>
        <Link to='/'><img src={logo}></img></Link>
        <Ul>
          {pages.map((page, index) => (
            <li key={index} onClick={() => navigate(page.url)}>
              {page.label}
            </li>)
          )}
        </Ul>
      </Div>
      <Div>
        <Ul>
          <Button onClick={() => {authToken.token ? navigate(`/products/new`) : navigate('/sign-in')}}>
            Desapegue
          </Button>
        </Ul>
        <Button onClick={() => {
          authToken.id ? navigate(`/users/${authToken.id}`) : navigate('/sign-in')
        }}>
          <BiSolidUserCircle size={40} />
        </Button>
        <Button onClick={logout}>
          <BiExit size={30} />
        </Button>
      </Div>
    </Nav>
  );
};

const Nav = styled.nav`
z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
  background-color: #6363a3;
`;

const Div = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  img {
    width: 70px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flexbox;
  gap: 10px;
  font-size: 22px;

  button {
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    transition: 500ms;

    &:hover {
      opacity: 50%;
    };
  };

  li {
    cursor: pointer;
  
    &:hover {
      opacity: 80%;
      transition: 500ms;
    };
  };
`;

const Button = styled.button`
background-color: black;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default NavBar;

