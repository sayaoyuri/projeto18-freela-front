import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, BottomDiv, AuthError } from "../assets/styled-components/AuthForm";
import { login } from "../services/services";
import { AuthContext } from "../context/AutContext";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { getAuth, setGetAuth } = useContext(AuthContext);
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    const body = { email, password };

    login(body).then(res => {
      if(res.response) {
        setAuthError(res.response.data);
      } else {
        localStorage.removeItem('auth');
    
        if(res.data.id && res.data.token && res.data.name) {
          const { id, name, token } = res.data;
          localStorage.setItem('auth', JSON.stringify({ id, name, token }));
          setGetAuth(getAuth + 1);
          navigate('/');
        } else {
          setAuthError('Erro ao realizar login!');
        };
      };
    });
  };

  return (
    <Form onSubmit={signIn}>
      <h1>Acesse sua conta</h1>
      <input 
        type="email" 
        placeholder="E-mail" 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Senha" 
        minLength={4} 
        maxLength={25} 
        required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <AuthError>{authError}</AuthError>
      <BottomDiv>
        <input type="submit" value="Entrar!" />
        <p>Não possui uma conta? <Link to={'/sign-up'} ><span>Cadastre-se</span></Link> </p>
      </BottomDiv>
    </Form>
  );
};

export default SignInPage;