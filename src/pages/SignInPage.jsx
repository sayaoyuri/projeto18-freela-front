import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "../assets/styled-components/AuthForm";
import { login } from "../services/services";
import { AuthContext } from "../context/AutContext";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { getAuth, setGetAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    const body = { email, password };

    const result = await login(body);
    console.log(result);
    
    localStorage.removeItem('authToken');
    localStorage.removeItem('authName');

    if(result.token && result.name) {
      localStorage.setItem('authToken', JSON.stringify(result.token));
      localStorage.setItem('authName', JSON.stringify(result.name));
      setGetAuth(getAuth + 1);
      navigate('/');
    } else {
      alert(result);
    };
  };

  return (
    <Form onSubmit={signIn}>
      <h1>Login</h1>
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
      <input type="submit" value="Entrar!" />
      <p>Não possui uma conta? <Link to={'/sign-up'} >Cadastrar-se</Link> </p>
    </Form>
  );
};

export default SignInPage;